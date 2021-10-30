const os = process
global.DeveloperMode = 'true' //true Or false
global.owner = ['6285224697984', '6285224697984'] || os.env["6282116622141"]// Put your number here
global.linkGC = ['https://chat.whatsapp.com/IMYs03K3jLjrFrL0FGFvbFu:']
global.mods = ['6282116622141', '6282116622141'] // Want some help?
global.prems = ['6285224697984', '6285224697984'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  vhtear: 'https://vhtear.com',
  zeks: 'https://api.zeks.xyz',
  clph: 'https://recoders-area.caliph.repl.co'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'kurrxd09',
  'https://recoders-area.caliph.repl.co': '6N8tIK95',
  'https://vhtear.com': 'AdiOfficial404',
  'https://api.zeks.xyz': 'apivinz'
}

// Sticker WM
global.packname = 'Sticker By ARCELAPAK-BOT'
global.author = 'JAN LUPA DONATE'

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
