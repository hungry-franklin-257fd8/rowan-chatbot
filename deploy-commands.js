/* =================================+
 |    IMPORTS & GLOBAL VARIABLES    |
 * =================================+
*/
const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9')
const fs = require("fs");
require('dotenv').config();
const config = require('./config.json')
const TOKEN = config.TOKEN;
const CLIENT_ID = config.CLIENT_ID;
const GUILD_ID = config.GUILD_ID;
const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const rest = new REST({ version: '9' }).setToken(TOKEN);

/* =================================+
 |    SETS BOT COMMANDS TO GUILD    |
 * =================================+
*/

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(new SlashCommandBuilder().setName(command.name).setDescription(command.description));
}

(async () => {
    await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {body: commands})
        .then(() => console.log('Successfully registered application commands.'))
        .catch(console.error);
})();