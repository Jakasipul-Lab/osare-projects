// Sends an alert to the OSARE owner on Telegram.
// Never throws: a failed alert must never break an enquiry.
export async function notifyOwner(subject, lines) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;

  const body = Array.isArray(lines) ? lines.join('\n') : String(lines || '');
  const text = subject ? `${subject}\n\n${body}` : body;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 5000);

  try {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text }),
      signal: controller.signal,
    });
  } catch (err) {
    console.error('notifyOwner failed:', err.message);
  } finally {
    clearTimeout(timer);
  }
}
