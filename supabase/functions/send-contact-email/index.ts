import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import "https://deno.land/x/xhr@0.1.0/mod.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface ContactFormData {
  from_name: string
  from_email: string
  phone: string
  service: string
  city: string
  timeline?: string
  details?: string
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { from_name, from_email, phone, service, city, timeline, details }: ContactFormData = await req.json()

    // Get EmailJS credentials from Supabase secrets
    const serviceId = Deno.env.get('EMAILJS_SERVICE_ID')
    const templateId = Deno.env.get('EMAILJS_TEMPLATE_ID')
    const publicKey = Deno.env.get('EMAILJS_PUBLIC_KEY')

    if (!serviceId || !templateId || !publicKey) {
      return new Response(
        JSON.stringify({ error: 'EmailJS credentials not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Prepare email template parameters
    const templateParams = {
      from_name,
      from_email,
      phone,
      service,
      city,
      timeline: timeline || 'Not specified',
      details: details || 'No additional details provided',
      to_email: 'integrityevsolutions@gmail.com'
    }

    // Send email via EmailJS
    const emailResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: templateParams,
      }),
    })

    if (!emailResponse.ok) {
      throw new Error(`EmailJS API responded with status: ${emailResponse.status}`)
    }

    return new Response(
      JSON.stringify({ message: 'Email sent successfully' }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Error sending email:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to send email' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})