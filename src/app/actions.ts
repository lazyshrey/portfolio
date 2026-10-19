"use server";

export async function sendContactMessage(email: string, message: string) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  
  if (!webhookUrl) {
    console.error("DISCORD_WEBHOOK_URL environment variable is not defined");
    return { success: false, error: "Server configuration issue. Webhook URL is missing." };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: `<@694480378769178645> **New Portfolio Message!**\n\n**From:** \`${email}\`\n**Message:**\n\`\`\`\n${message}\n\`\`\``
      }),
    });

    if (response.ok) {
      return { success: true };
    } else {
      const errorText = await response.text();
      console.error(`Discord webhook error: ${response.status} - ${errorText}`);
      return { success: false, error: "Failed to transmit message via Discord." };
    }
  } catch (error) {
    console.error("Error calling Discord webhook:", error);
    return { success: false, error: "An unexpected error occurred while sending the message." };
  }
}
