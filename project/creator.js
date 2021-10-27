let handler = function (m) {
  // this.sendContact(m.chat, '6285224697984', 'ARCEL', m)
  this.sendContact(m.chat, '6285224697984', 'ARCEL', m)
  m.reply('Waitt...')
}
handler.help = ['owner', 'creator', 'pemilikbot']
handler.tags = ['info']

handler.command = /^(owner|creator|pemilikbot)$/i

module.exports = handler
