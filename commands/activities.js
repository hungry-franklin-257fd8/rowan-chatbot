const { MessageEmbed } = require("discord.js");

//Command to return information about the campus & surrounding buildings
//Made by Joseph DiTaranto

exports.run = async (client) => {
    const embed = new MessageEmbed()
        .setColor(generateRandomColour())
        .setTitle('Rowan University Campus Activities')
        .setURL('http://elvis.rowan.edu/~ditara24/rowanact.html')
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