/* =================================+
 |    IMPORTS & GLOBAL VARIABLES    |
 * =================================+
*/
const { Client, Intents } = require('discord.js');
require('dotenv').config();
const TOKEN = process.env.TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

/* =================================+
 |       BOT MAIN APPLICATION       |
 * =================================+
*/
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}...`);
});

// code this when people are online so I can test
client.on('guildMemberAdd', async (member) => {
    member.guild.channels.get('channelID')
        .send(`Welcome, ${member}!`);
});

client.on('interactionCreate', async (interaction) => {
    const { commandName } = interaction;

    if (!interaction.isCommand()) return;

    if (commandName === 'help') 
    {
        await interaction.reply('`Coming soon.`');
    }

    if (commandName === 'info') 
    {
        await interaction.reply('`Coming soon.`');
    }

    if (commandName === 'campus')
    {
        await interaction.reply('https://www.rowan.edu/about/visiting/main.html');
    }
});


// Leave this untouched as the last line in the file
client.login(TOKEN);