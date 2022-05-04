const { MessageEmbed } = require("discord.js");

exports.run = async () => {
    const embed = new MessageEmbed()
        .setColor(generateRandomColour())
        .setTitle('Rowan Landmarks')
        .setDescription('[Here](https://www.google.com/maps/d/u/1/edit?mid=1qc06q9qIvPpwDCsWP84gu1iJkIU_NDtH&ll=39.712461498923574%2C-75.12410815952384&z=16) ' +
            'is a list of landmarks in the vicinity of Rowan University.')
        .setThumbnail('http://elvis.rowan.edu/~ditara24/ActivitiesMap.png')
        .setFooter({ text: `Made with \u2665` })
        .setTimestamp();
    return { embeds: [embed] };
}
exports.name = "landmarks";
exports.description = "Link to a map of Rowan with marked landmarks";

function generateRandomColour() {
    return `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`;
}