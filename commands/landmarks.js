const { MessageEmbed } = require("discord.js");

exports.run = async (client) => {
    const embed = new MessageEmbed()
        .setColor(generateRandomColour())
        .setTitle('Rowan Landmarks')
        .setURL('https://www.tripadvisor.com/AttractionsNear-g46462-d5789853-Rowan_University-Glassboro_New_Jersey.html')
        .setAuthor({ name: 'Rowan Landmarks', iconURL: 'https://i.imgur.com/UwP2r7v.png', url: 'https://www.rowan.edu/about/visiting/main.html' })
        .setDescription('Find things to do around Rowan')
        .setThumbnail('https://i.imgur.com/UwP2r7v.png')
        .setFooter({ text: `Made with \u2665` })
        .setTimestamp();
    return { embeds: [embed] };
}
exports.name = "landmarks";
exports.description = "returns things to do around Rowan";

function generateRandomColour() {
    return `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`;
}