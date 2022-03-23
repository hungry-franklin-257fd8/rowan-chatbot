/* =================================+
 |    IMPORTS & GLOBAL VARIABLES    |
 * =================================+
*/
const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9')
const fs = require("fs");
require('dotenv').config();
const TOKEN = process.env.TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;
const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

/* =================================+
 |    SETS BOT COMMANDS TO GUILD    |
 * =================================+
*/

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command);
}

const rest = new REST({ version: '9' }).setToken(TOKEN);

(async () => {
    await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {body: commands})
        .then(() => console.log('Successfully registered application commands.'))
        .catch(console.error);
})();