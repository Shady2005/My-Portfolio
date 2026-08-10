import emailjs from '@emailjs/browser';

/**
 * Sends a contact form submission using EmailJS.
 * Expects environment variables or fallback placeholders.
 */
export const sendContactEmail = async (formData) => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

  if (serviceId === 'YOUR_SERVICE_ID' || templateId === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
    // Return mock success in development if EmailJS credentials are not yet configured in env
    console.warn('EmailJS environment variables not configured. Simulating email sending.');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { success: true, message: 'Message sent successfully (Demo Mode).' };
  }

  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email
      },
      publicKey
    );

    return { success: true, response };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return { success: false, error: error?.text || 'Failed to send message.' };
  }
};
