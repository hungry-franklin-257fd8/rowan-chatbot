const { MessageEmbed } = require("discord.js");

exports.run = async (client) => {
    const embed = new MessageEmbed()
        .setColor(generateRandomColour())
        .setTitle('Rowan University Campus')
        .setURL('https://www.rowan.edu/about/visiting/main.html')
        .setAuthor({ name: 'Rowan Campus', iconURL: 'https://i.imgur.com/UwP2r7v.png', url: 'https://www.rowan.edu/about/visiting/main.html' })
        .setDescription('Find information about the campus & surrounding buildings')
        .setThumbnail('https://i.imgur.com/UwP2r7v.png')
        .setFooter({ text: `Made with \u2665` })
        .setTimestamp();
    return { embeds: [embed] };
}
exports.name = "campus";
exports.description = "returns information about Rowan campus & surrounding buildings";

function generateRandomColour() {
    return `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`;
}