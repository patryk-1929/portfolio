import React from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const isValidEmail = (email) => {
  if (!email) return false;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const initialFormState = {
  name: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [form, setForm] = React.useState(initialFormState);
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [formSent, setFormSent] = React.useState(false);
  const [formError, setFormError] = React.useState(false);

  const handleChange = (field) => (event) => {
    const value = event.target.value;

    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Name is required.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!isValidEmail(form.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!form.message.trim()) {
      nextErrors.message = "Message is required.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const resetForm = () => {
    setForm(initialFormState);
    setErrors({});
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("Submit clicked");

    setFormSent(false);
    setFormError(false);

    if (!validate()) {
      console.log("Validation failed", form);
      return;
    }

    console.log("Validation passed");

    if (!executeRecaptcha) {
      console.log("Recaptcha is not ready or provider is missing");
      setFormError(true);
      return;
    }

    setLoading(true);

    try {
      console.log("Before recaptcha");

      const token = await executeRecaptcha("contact_form");

      console.log("Recaptcha token:", token);

      const body = {
        email: form.email.trim(),
        template_id: process.env.GATSBY_CBP_TEMPLATE_ID,
        "g-recaptcha-response": token,
        params: {
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        },
      };

      const baseEndpoint = process.env.GATSBY_CBP_ENDPOINT || "";
      const endpoint = baseEndpoint.endsWith("/")
        ? baseEndpoint
        : `${baseEndpoint}/`;

      console.log("Sending to:", `${endpoint}email/send`);
      console.log("Body:", body);

      const response = await fetch(`${endpoint}email/send`, {
        method: "POST",
        headers: {
          "X-API-KEY": process.env.GATSBY_CBP_API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      console.log("Response:", response.status, response.ok);

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setFormSent(true);
      setFormError(false);
      resetForm();
    } catch (error) {
      console.error("Form error:", error);
      setFormSent(false);
      setFormError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full px-7 py-10">
      <div className="mx-auto w-full max-w-7xl">
        {formSent && !formError && (
          <div className="mb-6 rounded-md bg-green-100 px-4 py-3 text-sm text-green-900">
            Thank you! Your message has been sent.
          </div>
        )}

        {formError && (
          <div className="mb-6 rounded-md bg-red-100 px-4 py-3 text-sm text-red-900">
            Something went wrong while sending your message. Please try again.
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="w-full">
          <div className="grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-2">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-4 text-xs text-[#20f0d0]">
                Your name *
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange("name")}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                className="border-0 border-b border-[#6ba29f] bg-transparent pb-2 text-sm text-white placeholder:text-white/80 outline-none focus:border-[#20f0d0]"
              />

              {errors.name && (
                <p id="name-error" className="mt-2 text-xs text-red-300">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="mb-4 text-xs text-[#20f0d0]">
                Your email *
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange("email")}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                className="border-0 border-b border-[#6ba29f] bg-transparent pb-2 text-sm text-white placeholder:text-white/80 outline-none focus:border-[#20f0d0]"
              />

              {errors.email && (
                <p id="email-error" className="mt-2 text-xs text-red-300">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="flex flex-col md:col-span-2">
              <label htmlFor="message" className="mb-4 text-xs text-[#20f0d0]">
                Your message *
              </label>

              <textarea
                id="message"
                name="message"
                rows={2}
                placeholder="Enter your needs"
                value={form.message}
                onChange={handleChange("message")}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                className="resize-none border-0 border-b border-[#6ba29f] bg-transparent pb-2 text-sm text-white placeholder:text-white/80 outline-none focus:border-[#20f0d0]"
              />

              {errors.message && (
                <p id="message-error" className="mt-2 text-xs text-red-300">
                  {errors.message}
                </p>
              )}
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="cursor-pointer flex items-center gap-3 rounded-full bg-[#20f0d0] px-7 py-3 text-sm font-semibold text-[#142027] transition hover:bg-[#36ffe0] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Sending..." : "Send Message"}

              <span aria-hidden="true" className="text-lg leading-none">
              ✈
            </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;