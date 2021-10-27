let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('*[❗] WAIT, Sedang Proses...*')
  let res = await fetch(`https://leyscoders-api.herokuapp.com/api/textmaker/cup1?q=${response}&apikey=MIMINGANZ`)
  let json = await res.json()
  conn.sendFile(m.chat, json.result.url, 'cup1.jpg', `Nih kak...\n*Jgn lupa Download https://www.mediafire.com/file/p9hjo1pnx3698vp/arcelapak.apk/file-ELA"`, m, false)
}
handler.help = ['cup1'].map(v => v + ' <teks>')
handler.tags = ['maker']
handler.command = /^(cup1)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler


