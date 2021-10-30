let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Harap Masukan Nama Film Animenya', m)

	axios.get(`https://api.caliph71.xyz/api/anidsr?query=text&apikey=6N8tIK95`).then ((res) => {
	 	let hasil = `*Film Anime ${text}*\n\nJudul : ${name}\nRating : ${star}\nInfo : ${desc}\nLink Video : ${url}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['filmanime'].map(v => v + ' <film>')
handler.tags = ['nime']
handler.command = /^(filmanime)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
