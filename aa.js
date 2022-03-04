const { MessageType } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let fs = require('fs')
let handler = async (m, { conn, text }) => {
let logo = global.logoowner
  let ext= `
*Ketik* _#allmenu_ *Untuk Menampilkan Seluruh Menu Bot*
*Note:* Limit = Ⓛ
        Premium = Ⓟ

*────「 Simple Menu Bot 」────*

╭─↪「 Main Bot 」↩
│ 🔖 .afk <alasan>
│ 🔖 .menu
│ 🔖 .help
│ 🔖 .??
│ 🔖 .request <teks>
│ 🔖 .report <teks>
│ 🔖 .script
╰────

╭─↪「 Epic Rpg 」↩
│ 🔖 .adventure
│ 🔖 .petualang
│ 🔖 .berpetualang
│ 🔖 .mulung
│ 🔖 .work
│ 🔖 .claim
│ 🔖 .feed <tipe hewan>
│ 🔖 .inventory
│ 🔖 .inv
│ 🔖 .judi <jumlah>
│ 🔖 .leaderboard <jumlah user>
│ 🔖 .lb <jumlah user>
│ 🔖 .levelup
│ 🔖 .monthly
│ 🔖 .open <crate>
│ 🔖 .gacha <crate>
│ 🔖 .profile
│ 🔖 .shop <shell|buy> <args>
│ 🔖 .toko <Shell|buy> <args>
│ 🔖 .judi <jumlah>
│ 🔖 .transfer <args>
│ 🔖 .use <item> <jumlah>
│ 🔖 .heal
│ 🔖 .weekly
╰────


╭─↪「 Game Bot 」↩
│ 🔖 .caklontong
│ 🔖 .family100
│ 🔖 .math <mode>
│ 🔖 .siapakahaku
│ 🔖 .slot
│ 🔖 .angka <0-9>
│ 🔖 .tebakbendera
│ 🔖 .tebakgambar
│ 🔖 .tebakkalimat
│ 🔖 .tebakkata
│ 🔖 .tebakkimia
│ 🔖 .tebaklagu Ⓛ
│ 🔖 .tebaklirik
│ 🔖 .tekateki
│ 🔖 .tictactoe <room name>
│ 🔖 .ttt <room name>
╰────

╭─↪「 Exp & Limit 」↩
│ 🔖 .buylimit <jumlah>
│ 🔖 .ceklimit
│ 🔖 .pay @user <amount>
│ 🔖 .paylimit @user <amount>
╰────

╭─↪「 Sticker Convert 」↩
│ 🔖 .sticker <reply Img>
│ 🔖 .stiker <reply Img>
│ 🔖 .s <reply Img>
│ 🔖 .attp <teks>
│ 🔖 .attp2 <teks> Ⓛ
│ 🔖 .ctrigger <teks> Ⓛ
│ 🔖 .circle
│ 🔖 .rainbow
│ 🔖 .sgura <teks> Ⓛ
│ 🔖 .stickfilter <reply Img> Ⓛ
│ 🔖 .stickmaker <reply Img> Ⓛ
│ 🔖 .trash
│ 🔖 .togif <reply>
│ 🔖 .tovideo <reply>
│ 🔖 .ttp <teks>
│ 🔖 .ttp2 <teks> Ⓛ
│ 🔖 .ttpdark <teks> Ⓛ
│ 🔖 .wanted
│ 🔖 .wasted
│ 🔖 .wm <packname>|<author>
╰────

╭─↪「 Kerang Ajaib 」↩
│ 🔖 .apakah <teks>
│ 🔖 .kapankah <teks>
│ 🔖 .artinama <nama>
│ 🔖 .artimimpi <mimpi>
│ 🔖 .howgay siapa?
│ 🔖 .howpintar siapa?
│ 🔖 .howcantik siapa?
│ 🔖 .howganteng siapa?
│ 🔖 .howgabut siapa?
│ 🔖 .howgila siapa?
│ 🔖 .howlesbi siapa?
│ 🔖 .howstress siapa?
│ 🔖 .howbucin siapa?
│ 🔖 .howjones siapa?
│ 🔖 .howsadboy siapa?
│ 🔖 .siapakah <teks>
╰────
*Nyusull Secepatnya!!!*
`
let name = await conn.getName(m.sender)

let fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}

  sumberImg = fs.readFileSync(`./src/owner.jpg`)
  image = (await conn.prepareMessage('0@s.whatsapp.net', sumberImg, MessageType.image, { thumbnail: Buffer.alloc(0) })).message.imageMessage
  res = await conn.prepareMessageFromContent(m.chat, {
    "productMessage": {
      "product": {
        "productImage": image,
        "productId": "4938174216214248",
        "title": "───────[ SIMPLE MENU ]───────",
        "description": '\n\n' + ext,
        "retailerId": "Itu Menu Simple Nya ^_^",
        "url": '',
        "descriptionCount": "999999999",
        "productImageCount": "1",
      },
      "businessOwnerJid": "6287708773367@s.whatsapp.net",
      "contextInfo": {
        "forwardingScore": 9999,
        "isForwarded": false
      }
    }
  },
    { quoted: fkon })
  conn.relayWAMessage(res)

}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

let wm = global.botwm
