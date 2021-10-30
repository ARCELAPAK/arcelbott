let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  let res = await fetch(`https://recoders-area.caliph.repl.co/api/random/meme?6N8tIK95=${APIKeys["https://recoders-area.caliph.repl.co"]}`)
  let json = await res.json()
  conn.sendFile(m.chat, json.url, `meme`, `${json.title}`, m, false)
}
handler.help = ['meme']
handler.tags = ['nulis']

handler.command = /^(meme)$/i
handler.register = true

module.exports = handler
