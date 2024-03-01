const Discord = require("discord.js")
const { JsonDatabase } = require("wio.db")

const db = new JsonDatabase({ databasePath: './databases/embeds.json' })

module.exports = {
    name: "embed",
    description: "[🔧] Crie uma embed",
    type: Discord.ApplicationCommandType.ChatInput,

    run: async(interact)
}