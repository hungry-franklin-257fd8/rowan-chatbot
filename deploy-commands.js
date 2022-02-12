/* =================================+
 |    IMPORTS & GLOBAL VARIABLES    |
 * =================================+
*/
const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9')
require('dotenv').config();
const TOKEN = process.env.TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;
const commands = [
    new SlashCommandBuilder().setName('help').setDescription('Replies with helpful dialogue about the Bot.'),
    new SlashCommandBuilder().setName('info').setDescription('Replies with information about Rowan')
].map(command => command.toJSON());
const rest = new REST({ version: '9' }).setToken(TOKEN);

/* =================================+
 |    SETS BOT COMMANDS TO GUILD    |
 * =================================+
*/
rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: commands })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);

