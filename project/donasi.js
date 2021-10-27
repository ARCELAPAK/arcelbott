let handler = async m => m.reply(`
╭─「 Donasi • BOT 」
│ • gopay [082116622141]
│ • DANA [082116622141]
│ • OVO  [082116622141]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
