const {MessageEmbed} = require("discord.js");
const fs = require("fs");

exports.run = async (client) => {
    let descriptionBuilder = "";
    const files = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
    console.log(files);
    try {
        for(const file of files) {
            let cmd = require(`./${file}`);
            descriptionBuilder = descriptionBuilder + `\`/${cmd.name}\`` + " — " + `${cmd.description}` + "\n";
            //console.log(descriptionBuilder);
        }
    }
    catch (err) {
        console.log("Error when reading command json:", err);
    }
    try {
        const embed = new MessageEmbed()
            .setColor(generateRandomColour())
            .setDescription(`${descriptionBuilder}`)
            .setTimestamp()
            .setFooter({text: `Made with '\u2665'`});
        //console.log(embed);
        return {embeds: [embed]}
    } catch (e) {
        console.error(e);
        console.error("Problem while running help!");
    }

    function generateRandomColour()
    {
        return `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`;
    }
}

exports.name = "help";
exports.description = "returns list of available Chatbot commands";