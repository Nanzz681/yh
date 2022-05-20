let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kamisato = `
┌〔 List Berlangganan 〕
├ Permanen
├ 2 Bulan
├ 1 Bulan
├ Trial 1 jam
└────
Silahkan klik pada "List Harga" untuk melihat list.

Pembayaran:
Dana: 085648267676
Gopay: 082140059454
`.trim()
    const button = {
        buttonText: 'List Harga',
        description: kamisato,
        sections:  [{title: "Silahkan di pilih", rows: [
        {title: 'Permanen', description: "Rp35.000\nSewa bot tanpa batasan waktu.", rowId:".masuk"},
        {title: '1 Bulan', description: "Rp15.000\nSewa bot selama 1 bulan.", rowId:".masuk"},
        {title: '3 Minggu', description: "Rp10.000\nSewa bot selama 1 minggu.", rowId:".masuk"},
        {title: 'Trial', description: "GRATIS\nBot gratis 1 Jam.", rowId:".masuk"},
        {title: 'Owner', description: "Chat owner nya jika ada perlu.", rowId:".owner"},
        {title: 'Rules', description: "Kebijakan Privasi, Syarat Ketentuan dan Peraturan.", rowId:".rules"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['main']
handler.command = /^(sewa|sewabot)$/i
handler.help = ['sewa']
module.exports = handler
//Haruno Bot
