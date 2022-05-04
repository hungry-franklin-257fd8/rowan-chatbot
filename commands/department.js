const { MessageEmbed } = require("discord.js");
var stringSimilarity = require("string-similarity");

// Command to return information about rowan departments
// Made by Joseph DiTaranto


const depdata = require('./Resorces/departments.json');
exports.run = async (client, interaction) => {
 
    let departmentname = '';
    if(Array.isArray(interaction)) {
        departmentname = interaction[0];
    } else {
        if(interaction.options.get("departmentname")) departmentname = interaction.options.get("departmentname").value;
    }

    const embed = new MessageEmbed()
        .setColor(generateRandomColour())
        .setDescription("A list of all department names and contact information")
        .setTimestamp()
        .setFooter({ text: `Made with \u2665` });

    if (departmentname == '') {
        embed.setDescription("Please enter a department name with your command. To see a list of all departments, type `/departments all`");
    }else if (departmentname == 'all') {
        embed.setDescription("A list of all 200 departments can be found [here](https://directory.rowan.edu/phones.php).");
    } else {
        var array = Object.keys(depdata)
        .map(function(key) {
            return depdata[key].Name;
        });
        var matches = stringSimilarity.findBestMatch(departmentname, array);
        embed.setDescription(`Department: \`\`\` ${matches.bestMatch.target} \`\`\`\nContact Info: ${depdata[matches.bestMatchIndex].ContactInfo}\n[Search the website](${depdata[matches.bestMatchIndex].SearchRowan})`);
    }
        
    return { embeds: [embed] }
}

exports.name = "department";
exports.description = "provides information about Rowan departments";
exports.args = [{"name":"departmentname", "description":"Name of the department","required":false}];

function generateRandomColour() {
    return `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`;
}
