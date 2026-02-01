// channelInfo.js - version modernisée
const channelInfo = {
  contextInfo: {
    forwardingScore: 999,          // Score élevé pour les forwards
    isForwarded: true,             // Message considéré comme forwardé
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363421176303484@newsletter", // ID du canal officiel
      newsletterName: "༺✿ ǫᴜᴇᴇɴ ᴀɪ OFFICIAL CHANNEL ✿༻", // Nom modernisé et lisible
      serverMessageId: Math.floor(Math.random() * 10000) // ID unique par message
    },
    externalAdReply: {
      title: "༺✿ ǫᴜᴇᴇɴ ᴀɪ SYSTEM ✿༻",           // Titre du message interactif
      body: "Tap to view our official channel", // Texte d'appel à l'action
      mediaType: 1,                               // 1 = image
      renderLargerThumbnail: true,               // Thumbnail plus grand
      thumbnailUrl: "https://image2url.com/r2/default/images/1769790494460-0a43b070-35bc-41aa-a2b6-bc78e66c99b8.jpg", // Fallback image
      sourceUrl: "https://whatsapp.com/channel/0029VbBYMyZIyPtOEnuT0S04" // Lien officiel
    }
  }
};

module.exports = { channelInfo };