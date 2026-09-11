// Built in Silk — landing page
// Minimal progressive-enhancement JS only. No framework required.

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".subscribe-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    // Placeholder handler until this is wired to a real provider
    // (Substack, Beehiiv, ConvertKit, Mailchimp, etc).
    // Replace this block with that provider's embed/API call.
    const action = form.getAttribute("action");
    if (!action || action === "#") {
      e.preventDefault();
      const email = form.querySelector("#email");
      const note = form.querySelector(".form-note");
      if (note) {
        note.textContent = `Thanks — we'll be in touch at ${email.value}. (Connect this form to your email provider to go live.)`;
      }
      form.reset();
    }
  });
});
