import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/middleware";
import { createClient } from "npm:@supabase/supabase-js@2";
import * as kv from './kv_store.tsx';

const app = new Hono();

// Configure CORS and logging
app.use("*", cors());
app.use("*", logger(console.log));

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
);

// Contact form submission
app.post('/make-server-8b443622/contact', async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, company, interest, message } = body;

    // Validate required fields
    if (!name || !email || !interest) {
      return c.json({ error: 'Missing required fields' }, 400);
    }

    // Generate unique lead ID
    const leadId = `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Store lead in KV store
    const leadData = {
      id: leadId,
      type: 'contact_form',
      name,
      email,
      company: company || '',
      interest,
      message: message || '',
      source: 'website',
      status: 'new',
      created_at: new Date().toISOString(),
      priority: interest === 'full-package' ? 'high' : 'normal'
    };

    await kv.set(`lead:${leadId}`, leadData);
    await kv.set(`lead_by_email:${email}`, leadId);

    // Send email notification (placeholder for external integration)
    const emailData = {
      to: 'hello@vahorizon.com',
      subject: `New Contact Form Submission - ${name}`,
      body: `
        New lead from VA Horizon website:
        
        Name: ${name}
        Email: ${email}
        Company: ${company || 'Not provided'}
        Interest: ${interest}
        Message: ${message || 'No message'}
        
        Priority: ${leadData.priority}
        Lead ID: ${leadId}
      `
    };

    // Store email in queue for external processing
    await kv.set(`email_queue:${leadId}`, emailData);

    console.log(`New contact form submission: ${leadId} from ${email}`);

    return c.json({ 
      success: true, 
      message: "Thanks! We'll email you within 24 hours to schedule your audit.",
      leadId 
    });

  } catch (error) {
    console.error('Contact form submission error:', error);
    return c.json({ error: 'Failed to process form submission' }, 500);
  }
});

// Pilot reservation form
app.post('/make-server-8b443622/pilot', async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, company, interest, preferredTime } = body;

    // Validate required fields
    if (!name || !email || !interest) {
      return c.json({ error: 'Missing required fields' }, 400);
    }

    // Generate unique pilot ID
    const pilotId = `pilot_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Store pilot request in KV store
    const pilotData = {
      id: pilotId,
      type: 'pilot_request',
      name,
      email,
      company: company || '',
      interest,
      preferredTime: preferredTime || '',
      source: 'website',
      status: 'new',
      priority: 'high', // All pilots are high priority
      created_at: new Date().toISOString()
    };

    await kv.set(`pilot:${pilotId}`, pilotData);
    await kv.set(`pilot_by_email:${email}`, pilotId);

    // Send priority email notification
    const emailData = {
      to: 'hello@vahorizon.com',
      subject: `🔥 New Pilot Request - ${name}`,
      body: `
        HIGH PRIORITY: New pilot request from VA Horizon website:
        
        Name: ${name}
        Email: ${email}
        Company: ${company || 'Not provided'}
        Interest: ${interest}
        Preferred Time: ${preferredTime || 'Not specified'}
        
        Pilot ID: ${pilotId}
        
        Action Required: Schedule discovery call within 24 hours.
      `
    };

    await kv.set(`email_queue:${pilotId}`, emailData);

    // Update pilot counter
    const currentCount = await kv.get('pilot_requests_count') || '0';
    await kv.set('pilot_requests_count', (parseInt(currentCount) + 1).toString());

    console.log(`New pilot request: ${pilotId} from ${email}`);

    return c.json({ 
      success: true, 
      message: "Thanks! We'll email you within 24 hours to schedule your audit.",
      pilotId 
    });

  } catch (error) {
    console.error('Pilot reservation error:', error);
    return c.json({ error: 'Failed to process pilot reservation' }, 500);
  }
});

// Get lead information
app.get('/make-server-8b443622/lead/:leadId', async (c) => {
  try {
    const leadId = c.req.param('leadId');
    const lead = await kv.get(`lead:${leadId}`) || await kv.get(`pilot:${leadId}`);
    
    if (!lead) {
      return c.json({ error: 'Lead not found' }, 404);
    }

    return c.json({ success: true, lead });
  } catch (error) {
    console.error('Get lead error:', error);
    return c.json({ error: 'Failed to retrieve lead' }, 500);
  }
});

// Update lead status
app.post('/make-server-8b443622/lead/:leadId/status', async (c) => {
  try {
    const leadId = c.req.param('leadId');
    const { status, notes } = await c.req.json();
    
    // Get existing lead
    const lead = await kv.get(`lead:${leadId}`) || await kv.get(`pilot:${leadId}`);
    if (!lead) {
      return c.json({ error: 'Lead not found' }, 404);
    }

    // Update lead status
    const updatedLead = {
      ...lead,
      status,
      notes: notes || lead.notes,
      updated_at: new Date().toISOString()
    };

    const key = lead.type === 'pilot_request' ? `pilot:${leadId}` : `lead:${leadId}`;
    await kv.set(key, updatedLead);

    console.log(`Lead status updated: ${leadId} -> ${status}`);

    return c.json({ success: true, lead: updatedLead });
  } catch (error) {
    console.error('Update lead status error:', error);
    return c.json({ error: 'Failed to update lead status' }, 500);
  }
});

// Get dashboard stats
app.get('/make-server-8b443622/stats', async (c) => {
  try {
    // Get recent leads and pilots
    const leads = await kv.getByPrefix('lead:');
    const pilots = await kv.getByPrefix('pilot:');
    
    const totalLeads = leads.length;
    const totalPilots = pilots.length;
    
    // Calculate stats for the last 30 days
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    
    const recentLeads = leads.filter(lead => 
      new Date(lead.created_at) > thirtyDaysAgo
    ).length;
    
    const recentPilots = pilots.filter(pilot => 
      new Date(pilot.created_at) > thirtyDaysAgo
    ).length;

    const stats = {
      total_leads: totalLeads,
      total_pilots: totalPilots,
      recent_leads_30d: recentLeads,
      recent_pilots_30d: recentPilots,
      conversion_rate: totalLeads > 0 ? Math.round((totalPilots / totalLeads) * 100) : 0
    };

    return c.json({ success: true, stats });
  } catch (error) {
    console.error('Get stats error:', error);
    return c.json({ error: 'Failed to retrieve stats' }, 500);
  }
});

// Health check
app.get('/make-server-8b443622/health', (c) => {
  return c.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    service: 'VA Horizon Backend'
  });
});

// Error handler
app.onError((err, c) => {
  console.error('Server error:', err);
  return c.json({ error: 'Internal server error' }, 500);
});

export default app;

Deno.serve(app.fetch);