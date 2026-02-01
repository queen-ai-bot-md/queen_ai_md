// ================================
// QUEEN AI MENU SYSTEM - MODERNIZED
// Help menu principal & .devinfo
// ================================

const { channelInfo } = require('../lib/messageConfig');

/* Channel official link */
const channelLink = "https://whatsapp.com/channel/0029VbBYMyZIyPtOEnuT0S04";

/* 🎥 Random videos for menus */
const mainVideos = [
    "https://image2url.com/r2/default/videos/1769779207593-673c49d9-dc92-40f6-9a97-69bbbbd850b0.mp4",
    "https://image2url.com/r2/default/videos/1769865468877-c39e06b5-1a4a-4dea-ab19-e3b37d13f847.mp4",
    "https://image2url.com/r2/default/videos/1769865533089-a17a2866-7859-4e5e-83b8-156c84898ba0.mp4"
];
const devVideos = [
    "https://image2url.com/r2/default/videos/1769865636958-ed88f56a-69af-48cb-afed-10b1fc2f29db.mp4",
    "https://image2url.com/r2/default/videos/1769865828614-23e460cb-7c7c-474d-9616-1a1e08f799e3.mp4",
    "https://image2url.com/r2/default/videos/1769866189639-79ab6159-cc37-402c-a3d4-6d8c747ca9a8.mp4"
];

const randomVideo = (videos) => videos[Math.floor(Math.random() * videos.length)];

/* 🎨 Random images for newsletter */
const mainImages = [
    "https://images.iimg.live/images/excellent-collection-4057.webp",
    "https://images.iimg.live/images/wonderful-photo-8175.webp",
    "https://images.iimg.live/images/dynamic-masterpiece-7165.webp"
];
const randomMainImage = () => mainImages[Math.floor(Math.random() * mainImages.length)];

/* 📰 Newsletter context WhatsApp */
const newsletterContext = (imageUrl) => ({
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
        newsletterJid: '120363421176303484@newsletter',
        newsletterName: '༺✿ ǫᴜᴇᴇɴ ᴀɪ OFFICIAL CHANNEL ✿༻',
        serverMessageId: Math.floor(Math.random() * 1000)
    },
    externalAdReply: {
        title: "༺✿ ǫᴜᴇᴇɴ ᴀɪ SYSTEM ✿༻",
        body: "Tap to view our official channel",
        thumbnailUrl: imageUrl,
        mediaType: 1,
        renderLargerThumbnail: true,
        sourceUrl: channelLink
    }
});

/* 📹 Send Main Menu */
const sendMainMenu = async (sock, chatId, message, text) => {
    const videoUrl = randomVideo(mainVideos);
    const imageUrl = randomMainImage();

    return sock.sendMessage(chatId, {
        video: { url: videoUrl },
        caption: `${text} *© Black~~King*`,
        mimetype: "video/mp4",
        contextInfo: newsletterContext(imageUrl)
    }, { quoted: message });
};

/* 🖼 Send Section Menu */
const sendSectionMenu = async (sock, chatId, message, text, profilePicUrl) => {
    return sock.sendMessage(chatId, {
        image: { url: profilePicUrl },
        caption: `${text}\n
╭━━━〔 *POWERED BY* 〕━━━╮
┃  🜲 *BLACK KING NEMESIS*
┃  ⚜ *The Nemesis Prime*
╰━━━━━━━━━━━━━━━━━━━━━╯`,
        contextInfo: newsletterContext(profilePicUrl)
    }, { quoted: message });
};

/* 👑 Main Help Menu */
const helpCommand = async (sock, chatId, message) => {
    const text = `
╔═━━〔 ❀ 𝑸𝑼𝑬𝑬𝑵 𝑨𝑰 ✿ 〕━═╗
┃        𝑽𝒆𝒓𝒔𝒊𝒐𝒏 • 2.0.0 
┃   ━━━━━━━━━━━━━━━━━
┃〔 𝑪𝑶𝑴𝑴𝑨𝑵𝑫 𝑪𝑬𝑵𝑻𝑬𝑹 〕
┃ ✦ Select a module below ✦
┃               ✦
┃ 🧠 𖣘 .general
┃ 👥 𖡡 .group
┃ 👑 𖤍 .owner
┃ 🤖 𖠌 .ai
┃ 🎨 𖥔 .stickmenu
┃ 🌐 𖦹 .social
┃ 🛠 𖠿 .tools
┃ 🎮 𖨆 .games
┃ 📦 𖢥 .misc
┃ 🖥 𖤟 .devinfo
╰━━━━━━━━━━━━━━━━━━━╯
`;

    await sendMainMenu(sock, chatId, message, text);
};

/* 📂 Section Menus */
const menuSystem = async (sock, chatId, message, section) => {
    try {
        const botJid = sock.user.id;
        let profilePicUrl;
        try {
            profilePicUrl = await sock.profilePictureUrl(botJid, 'image');
        } catch {
            profilePicUrl = 'https://files.catbox.moe/ankha3.jpg';
        }

        const sectionsText = {
            general: `
╭───〔 ༺✿ GENERAL ✿༻ 〕───╮
│ .ping
│ .tts <text>
│ .weather <city>
┃ .alive
│ .news
│ .lyrics <song>
│ .8ball <question>
│ .translate <text>
│ .autostatus
╰───────────────────╯`,
            group: `
╭───〔 ⚔️ GROUP 〕───╮
│ .ban
│ .unban
│ .promote 
│ .demote
│ .mute 
│ .unmute
│ .kick
┃ .delete
│ .clear
│ .welcome <on/off>
│ .antilink 
│ .antibadword
│ .tagall 
│ .hidetag
│ .purge
╰───────────────────╯`,
            owner: `
╭───〔 👑 OWNER 〕───╮
│ .mode <public/private>
│ .update 
│ .settings
│ .autotyping 
│ .autoread
│ .anticall 
│ .pmblocker
│ .cleartmp
│ .clearsession
│ .setpp
╰───────────────────╯`,
            ai: `
╭───〔 🧠 AI & FUN 〕───╮
│ .gpt 
│ .gemini
│ .imagine
│ .flux 
│ .sora
│ .compliment
│ .flirt
│ .insult
│ .stupid
│ .truth
│ .dare
╰───────────────────╯`,
            stickmenu: `
╭───〔 🎨 STICKERS 〕───╮
│ .sticker
│ .take
│ .tg
╰───────────────────╯`,
            social: `
╭───〔 🌐 SOCIAL 〕───╮
│ .tiktok <link>
│ .facebook <link>
│ .instagram <link>
│ .spotify 
│ .play
│ .song
│ .video
│ .music
╰───────────────────╯`,
            tools: `
╭───〔 🛠 TOOLS 〕───╮
│ .shorturl <link>
│ .qrcode <text>
│ .ss <url>
│ .url <link>
│ .ai <query>
│ .setpp
│ .repo
╰───────────────────╯`,
            games: `
╭───〔 🎮 GAMES 〕───╮
│ .tictactoe
│ .hangman
│ .trivia
│ .dice
│ .rps <rock/paper/scissors>
╰───────────────────╯`,
            misc: `
╭───〔 🗂 MISC 〕───╮
│ .quote
│ .fact
│ .joke
│ .compliment
│ .insult
│ .roseday
│ .shayari
╰─────────────────╯`,
            devinfo: `
╔══〔 ~𝐍𝐞𝐌𝐞𝐒𝐢𝐒~𝐏𝐫𝐈𝐦𝐄~𝐓𝐞𝐂𝐡~ 〕══╗
┃ 🜲 𝐏𝐫𝐢𝐦𝐞 : *BLACK KING*
┃ 🌐 Channel  : ${channelLink}
┃
┃ ✦ ~𝐍𝐞𝐌𝐞𝐒𝐢𝐒~𝐏𝐫𝐈𝐦𝐄~𝐓𝐞𝐂𝐡 :
┃ • 𝐃𝐚𝐫𝐤 𝐌𝐨𝐝𝐬 𝐍𝐞𝐦𝐞𝐬𝐢𝐬
┃ • 𝐌𝐫 𝐋𝐞𝐲 𝐍𝐞𝐦𝐞𝐬𝐢𝐬
┃ • 𝐁𝐥𝐚𝐜𝐤 𝐆𝐫𝐞𝐲 𝐍𝐞𝐦𝐞𝐬𝐢𝐬
┃ • 𝐌𝐫 𝐑𝐨𝐚𝐧 𝐍𝐞𝐦𝐞𝐬𝐢𝐬
╚════════════════════╝`
        };

        if (!sectionsText[section]) return sock.sendMessage(chatId, { text: '❌ Unknown section.' });

        // For .devinfo use random video
        if (section === 'devinfo') {
            const videoUrl = randomVideo(devVideos);
            return sock.sendMessage(chatId, {
                video: { url: videoUrl },
                caption: sectionsText.devinfo + `\n© *Black~~King*`,
                mimetype: "video/mp4",
                contextInfo: newsletterContext(profilePicUrl)
            }, { quoted: message });
        }

        await sendSectionMenu(sock, chatId, message, sectionsText[section], profilePicUrl);

    } catch (error) {
        console.error('Error menuSystem:', error);
        await sock.sendMessage(chatId, { text: '❌ Cannot display this menu.' });
    }
};

module.exports = { helpCommand, menuSystem };