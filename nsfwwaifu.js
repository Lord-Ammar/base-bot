let handler = async (m, { conn }) => {
    let hh = global.nsfwwaifu
    let url = hh[Math.floor(Math.random() * hh.length)]
    let buffer = (await conn.getFile(url)).data
    conn.sendButton(m.chat, 'Nyaa Ahhh\nSange Kok Sama Gambar:v', copy, buffer, [[
        'next', '/nsfwwaifu'
    ]], { quoted: m })
}
handler.command = /^(nsfwwaifu)$/i
handler.tags = ['internet']
handler.help = ['nsfwwaifu']
handler.premium = false
handler.private = true
handler.limit = true
module.exports = handler

global.nsfwwaifu = [
      "https://i.ibb.co/YtnMsqp/IMG-20220303-WA0292.jpg",
      "https://i.ibb.co/68cHskd/IMG-20220304-WA0158.jpg",
      "https://i.ibb.co/w63gZHq/IMG-20220304-WA0159.png",
      "https://i.ibb.co/L8JV79p/IMG-20220304-WA0160.jpg",
      "https://i.ibb.co/Stvcf0C/IMG-20220304-WA0161.png",
      "https://i.ibb.co/ZcPtgCT/IMG-20220304-WA0166.jpg",
      "https://i.ibb.co/LhHKsgX/IMG-20220304-WA0181.jpg",
      "https://i.ibb.co/gvjWGKS/IMG-20220304-WA0182.jpg",
      "https://i.ibb.co/1JkpdPD/IMG-20220304-WA0183.jpg",
      "https://i.ibb.co/y8B2rVh/IMG-20220304-WA0184.jpg",
      "https://i.ibb.co/DRF8FXg/IMG-20220304-WA0186.jpg",
      "https://i.ibb.co/M74cVrn/IMG-20220304-WA0187.jpg",
      "https://i.ibb.co/ggSkrqZ/IMG-20220304-WA0192.jpg"
]
