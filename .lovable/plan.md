Plan to fix the red “Submission Failed” box:

1. Update the contact form submit flow in `src/components/ContactForm.tsx` only.
2. Keep the same recipient email, fields, validation, lead tracking, and button UI.
3. Make FormSubmit response handling more tolerant:
   - Parse FormSubmit’s response body as text first, then JSON when possible.
   - Treat the submission as successful when FormSubmit returns `success: true`, any normal 2xx response, or a non-error response body.
   - Only show the red failure toast for real network failures or an explicit FormSubmit error.
4. Add safe debug logging for status/body metadata only, without logging customer form values.
5. Verify by submitting a test form in preview and checking the user-facing toast shows “Request Received!” instead of the red error.

Technical note: because the owner is still receiving leads, the likely issue is a false negative from the third-party FormSubmit response, not that the form data is failing to send.