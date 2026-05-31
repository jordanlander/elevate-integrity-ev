I found two concrete problems to fix:

1. The preview/user route `/index` currently renders the 404 page, so any `/index` traffic is broken.
2. The contact form still relies on reading FormSubmit's AJAX response. If FormSubmit receives the lead but the browser gets a CORS/network/response parsing failure afterward, the customer sees the red “Submission Failed” toast even though the owner may still receive the email.

Plan:

1. Fix the `/index` route
   - Add `/index` as an alias for the home page so it renders the real landing page instead of the 404 page.
   - Keep the existing `/` route unchanged.

2. Make FormSubmit submission more reliable
   - Change the FormSubmit request from JSON to `FormData`.
   - Remove the manual `Content-Type: application/json` header so the browser does not trigger a fragile CORS preflight.
   - Keep `Accept: application/json` and `_captcha: false`.
   - Preserve all existing lead fields, UTM fields, validation, recipient email, and UI.

3. Add a no-CORS fallback path
   - If the AJAX request throws or returns an unclear failure, submit the same payload through a hidden iframe-backed standard HTML form to FormSubmit.
   - This avoids showing customers a red error when the lead was likely accepted but the response could not be read.
   - Show the green “Request Received!” confirmation after the primary request succeeds or the fallback submission is launched.

4. Only show the red failure toast for real client-side failures
   - Validation errors remain red.
   - A true browser-side construction failure can still show the red fallback message.
   - Network/CORS/ambiguous FormSubmit response issues should no longer scare customers after they submit.

5. Verify in preview
   - Submit a test lead from `/` and `/index`.
   - Confirm the page does not 404 on `/index`.
   - Confirm the user sees the green success toast instead of the red “Submission Failed” toast.
   - Check browser network/console signals for FormSubmit without logging customer form values.