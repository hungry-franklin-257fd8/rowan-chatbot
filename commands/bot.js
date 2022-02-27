const {MessageEmbed} = require("discord.js");
exports.run = async (client) => {
    const embed = new MessageEmbed()
        .setColor(generateRandomColour())
        .setAuthor({ name: 'Rowan Chatbot', iconURL: 'https://i.imgur.com/rotM2an.png' })
        .setDescription('This bot was made for Software Engineering during the Spring 2022 semester. It is made by Vince, Mura, Avery, Joe, Tristan, & Zach. The GitHub link can be found here: https://github.com/hungry-franklin-257fd8/rowan-chatbot.')
        .setTimestamp()
        .setFooter({text: `Made with '\u2665'`});
    return { embeds: [embed] };
}

function generateRandomColour()
{
    return `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`;
}

exports.name = "bot";
exports.description = "returns information about Rowan Chatbot";