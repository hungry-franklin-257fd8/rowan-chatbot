//https://today.rowan.edu/events/

//Author: Joseph DiTaranto

const { MessageEmbed } = require("discord.js");

exports.run = async () => {

    const color = generateRandomColour()

    const embed = new MessageEmbed()
        .setColor(color);
    embed.addField('There are many fun and exciting events happening at Rowan University', "```" + 'Rowan offers a wide variety of events. From concerts, to community service, to fundraisers, to social events, Rowan has it all!' + "```");

    const embed2 = new MessageEmbed()
        .setColor(color)
        .setTitle('Rowan University Events Calendar')
        .setURL('https://today.rowan.edu/events/')
        .setDescription('Check out the events calendar for Rowan University to see what is going on!')
        .setThumbnail('https://pbs.twimg.com/profile_images/1412407508359122966/4YIINk4s_400x400.jpg')
        .setFooter({ text: `Made with \u2665` })
        .setTimestamp();
    
    return { embeds: [embed,embed2] };

}
exports.name = "currevents";
exports.description = "returns information about current events at the university";

function generateRandomColour() {
    return `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`;
}