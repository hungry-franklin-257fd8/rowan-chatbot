/* =================================+
 |    IMPORTS & GLOBAL VARIABLES    |
 * =================================+
*/
const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9')
const fs = require("fs");
const config = require('./config.json');
const TOKEN = config.TOKEN;
const CLIENT_ID = config.CLIENT_ID;
const GUILD_ID = config.GUILD_ID;
const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

/* =================================+
 |    SETS BOT COMMANDS TO GUILD    |
 * =================================+
*/

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    const slashCommand = new SlashCommandBuilder().setName(command.name).setDescription(command.description);
    if (command.args) {
        if (command.args.constructor.name == "Array") {
            for (comm in command.args) {
                slashCommand.addStringOption(option =>
                    option.setName(command.args[comm].name).setDescription(command.args[comm].description).setRequired(command.args[comm].required));
            }
        } else {
            slashCommand.addStringOption(option =>
            option.setName(command.args).setDescription("Input").setRequired(false));
        }
    }
    commands.push(slashCommand);
}

const rest = new REST({ version: '9' }).setToken(TOKEN);

(async () => {
    await rest.put(Routes.applicationCommands(CLIENT_ID), {body: commands})
        .then(() => console.log('Deployed commands globally, may require some time to cache.'))
        .catch(console.error);
    await rest.put(Routes.applicationGuildCommands(CLIENT_ID,GUILD_ID), {body: commands})
        .then(() => console.log(`Updated main server slash commands. Should work immediately.`))
        .catch(console.error);
})();