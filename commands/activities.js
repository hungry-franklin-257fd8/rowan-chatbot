const { MessageEmbed } = require("discord.js");

//Command to return information about the campus & surrounding buildings
//Made by Joseph DiTaranto

exports.run = async (client) => {
    const embed = new MessageEmbed()
        .setColor(generateRandomColour())
        .setTitle('Rowan University Campus Activities')
        .setURL('https://www.google.com/maps/d/u/1/viewer?mid=1iXznGIBFHhFEw2nxLrn4rkG8HD9PNepg&ll=39.72414048304174%2C-75.10995430081154&z=12')
        .setDescription('Find information about activities around Rowan University')
        .setThumbnail('http://elvis.rowan.edu/~ditara24/ActivitiesMap.png')
        .setFooter({ text: `Made with \u2665` })
        .setTimestamp();
    return { embeds: [embed] };
}

exports.name = "activities";
exports.description = "Gives you a list of activities around Rowan University";

function generateRandomColour() {
    return `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`;
}