// twilioService.js
import Twilio from "twilio";

const accountSid = "YOUR_ACCOUNT_SID";
const authToken = "YOUR_AUTH_TOKEN";

const client = Twilio(accountSid, authToken);

export function sendWhatsAppMessage(to, message) {
  return client.messages.create({
    body: message,
    from: "whatsapp:+96171689712", // Twilio sandbox number
    to: `whatsapp:${to}`, // Recipient's WhatsApp number
  });
}
