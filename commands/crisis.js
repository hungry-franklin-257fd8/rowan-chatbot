const { MessageEmbed } = require("discord.js");

exports.run = async (client) => {
    const embed = new MessageEmbed()
        .setColor(generateRandomColour())
        .setTitle('Rowan University Crisis Resources')
        .setURL('https://sites.rowan.edu/wellness/counseling/services/crisis.html')
        .setAuthor({ name: 'Rowan Campus', iconURL: 'https://i.imgur.com/UwP2r7v.png', url: 'https://www.rowan.edu/about/visiting/main.html' })
        .setDescription('Find information about crisis resources from Rowan')
        .setThumbnail('https://i.imgur.com/UwP2r7v.png')
        .setFooter({ text: `Made with \u2665` })
        .setTimestamp();
    return { embeds: [embed] };
}
exports.name = "crisis";
exports.description = "returns information about Rowan crisis resources";

function generateRandomColour() {
    return `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`;
}