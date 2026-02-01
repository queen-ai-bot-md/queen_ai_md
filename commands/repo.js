// ==================== commands/repo.js ====================

const scriptLink = "https://github.com/queen-ai-bot-md/queen_ai_md";
const channelLink = "https://whatsapp.com/channel/0029VbBYMyZIyPtOEnuT0S04";
const devChannel2 = "https://whatsapp.com/channel/0029VapNnkE60eBaAvllKJ2g";
const groupLink = "https://chat.whatsapp.com/DpADtS77s3LKToWpjDQnz1";
const telegramGroupLink = "https://t.me/bugbotsapp";
const videoMenuUrl = "https://image2url.com/r2/default/videos/1769892528235-7b251060-9471-45fb-8d30-a9006bc8f68a.mp4";

async function repoCommand(sock, chatId, message) {
    try {
        const text = `
╭━〔 ~*QUEEN AI SYSTEM*~ 〕━⬣
┃ 🧠 Developer: *BLACK~~KING*
┃
┣━━〔 📜 SCRIPT 〕━⬣
┃ 🔗 ${scriptLink}
┃
┣━━〔 📡 CHANNELS 〕━⬣
┃ 🌟 Main: ${channelLink}
┃ 🚀 Dev 2: ${devChannel2}
┃
┣━━〔 🌍 COMMUNITIES 〕━⬣
┃ 🏠 WhatsApp: ${groupLink}
┃ 📱 Telegram: ${telegramGroupLink}
┃
┣━━〔 🎬 MEDIA 〕━⬣
┃ ▶ YouTube: Coming Soon
┃
╰━━〔 ⚜NEMESIS TECH⚜ 〕━⬣
`;

        await sock.sendMessage(chatId, {
            video: { url: videoMenuUrl },
            caption: text,
            gifPlayback: true // vidéo en boucle comme un GIF
        }, { quoted: message });

    } catch (err) {
        console.error("Repo Error:", err);
        await sock.sendMessage(chatId, { text: "❌ Repo menu failed." }, { quoted: message });
    }
}

module.exports = repoCommand;