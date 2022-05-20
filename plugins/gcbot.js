let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
https://chat.whatsapp.com/EthkDwgA3cT2TPGJmHbjgT
🗿

`.trim()
conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'GRUB SIRAD')).buffer(), ext, '🗿', 'SIAP BANG🗿', 'AUTO JOIN', 'Donasi', '.donasi', m)

}
handler.help = ['Gruboffical']
handler.tags = ['main']
handler.command = /^(gruboffical|gcbot|grubbot|grupbot)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
