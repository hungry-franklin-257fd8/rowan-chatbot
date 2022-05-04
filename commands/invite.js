const { MessageEmbed } = require("discord.js");

exports.run = async () => {
    return { embeds: [new MessageEmbed()
            .setTitle("Invite Link")
            .setColor(generateRandomColour())
            .setDescription("Click [here](https://discord.com/api/oauth2/authorize?client_id=941042373683712130&permissions=274878024704&scope=bot%20applications.commands) to invite this bot to a server!")
            .setTimestamp()
            .setFooter({ text: `Made with \u2665` })]};
}


exports.name = "invite";
exports.description = "Get the link to invite the bot to your own server.";
exports.ephemeral = true;

function generateRandomColour() {
    return `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`;
}