const settings = require("../settings");
const os = require("os");
const axios = require("axios");

/* 🎨 Images aléatoires pour le alive */
const aliveImages = [
    "https://image2url.com/r2/default/images/1769777596247-37b7ec61-10cf-417c-b0ce-fc336b0457b3.jpg",
    "https://image2url.com/r2/default/images/1769777677016-e8b648fd-e745-4dc4-9643-8d0c2f03af9a.jpg",
    "https://image2url.com/r2/default/images/1769777722897-5b3cf8c2-120f-4466-a90e-b0a6dc0a3c61.jpg"
];

/* 🌟 Helper pour image random */
const getRandomImage = () => aliveImages[Math.floor(Math.random() * aliveImages.length)];

/* 📰 Newsletter context pour WhatsApp */
const newsletterContext = (imageUrl) => ({
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
        newsletterJid: '120363421176303484@newsletter',
        newsletterName: '༺『Q』『U』『E』『E』『N』 ❀『A』『i』༻',
        serverMessageId: Math.floor(Math.random() * 1000)
    },
    externalAdReply: {
        title: "༺✿ ǫᴜᴇᴇɴ ᴀɪ SYSTEM ✿༻",
        body: "Tap to view our official channel",
        thumbnailUrl: imageUrl,
        mediaType: 1,
        renderLargerThumbnail: true,
        sourceUrl: "https://whatsapp.com/channel/0029VbBYMyZIyPtOEnuT0S04"
    }
});

/* 🎬 Commande ALIVE PREMIUM - QUEEN AI */
async function aliveCommand(sock, chatId, message, botStats = {}) {
    const randomImage = getRandomImage();

    const totalGroups = botStats.totalGroups || "N/A";
    const totalUsers  = botStats.totalUsers  || "N/A";
    const uptime      = botStats.uptime     || "N/A";

    const aliveMessage = `
╔═━━━『 👑 ǫᴜᴇᴇɴ ᴀɪ SYSTEM 』━━━═╗
┃          Version • ${settings.version} ⚙️
╚═━━──────────────────━━═╝

╭━━〔 ⚡ STATUS 〕━━╮
┃ 🟢 Online
┃ 🌍 Mode   : Public
┃ 🛡 Features:
┃   • 🏰 Group Management
┃   • ⚔️ Antilink Protection
┃   • 🎮 Fun Commands
┃   • ✨ And more!
╰━━━━━━━━━━━━━━╯

╭━━〔 📊 BOT STATS 〕━━╮
┃ 👥 Groups   : ${totalGroups}
┃ 🧍 Users    : ${totalUsers}
┃ ⏱ Uptime    : ${uptime}
┃ 🖥 Platform  : ${os.platform()} ${os.arch()}
╰━━━━━━━━━━━━━━╯

╭━━〔 🏰 POWERED BY 〕━━╮
┃ 👑 BLACK KING NEMESIS
┃ ⚜ Elite Bot Architecture
╰━━━━━━━━━━━━━━╯

🌐 Official Channel:
https://whatsapp.com/channel/0029VbBYMyZIyPtOEnuT0S04
`;

    try {
        // 🔥 Télécharger l'image en buffer pour WhatsApp
        const response = await axios.get(randomImage, { responseType: 'arraybuffer' });
        const imageBuffer = Buffer.from(response.data, 'binary');

        await sock.sendMessage(chatId, {
            image: imageBuffer,
            caption: aliveMessage,
            mentions: [message.key?.participant || chatId],
            contextInfo: newsletterContext(randomImage)
        }, { quoted: message });

    } catch (error) {
        console.error('Error sending ALIVE message:', error);
        // Fallback texte si problème
        await sock.sendMessage(chatId, {
            text: aliveMessage,
            mentions: [message.key?.participant || chatId],
            contextInfo: newsletterContext(randomImage)
        }, { quoted: message });
    }
}

module.exports = aliveCommand;