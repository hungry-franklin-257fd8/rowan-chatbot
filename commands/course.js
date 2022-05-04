const { MessageEmbed } = require("discord.js");
var stringSimilarity = require("string-similarity");

// Command to return information about rowan courses
// Made by Joseph DiTaranto


const Fall = require('./Resorces/Fall.json');
const Spring = require('./Resorces/Spring.json');
const Summer = require('./Resorces/Summer.json');
const Winter = require('./Resorces/Winter.json');


exports.run = async (client, interaction) => {
 
    let semester = '';
    let abr = 'All';
    let course = '';
    if(Array.isArray(interaction)) {
        semester = interaction[1];
        course = interaction[0];
    } else {
        if(interaction.options.get("semester")) semester = interaction.options.get("semester").value;
        if(interaction.options.get("subject")) abr = interaction.options.get("subject").value;
        if(interaction.options.get("name")) course = interaction.options.get("name").value;
    }

    const embed = new MessageEmbed()
        .setColor(generateRandomColour())
        .setTitle("Rowan Courses")
        .setDescription("Rowan offers many courses for you to choose from!\n\n")
        .setTimestamp()
        .setFooter({ text: `Made with \u2665` });

    semesterchoice = ["Fall", "Spring", "Summer", "Winter"];
    var semestermatches = stringSimilarity.findBestMatch(semester, semesterchoice);
    data = eval(semestermatches.bestMatch.target);

    if (abr != 'All') {
        var Subj = Object.keys(data)
        .map(function(key) {
            return data[key].Subj;
        });
        var matches = stringSimilarity.findBestMatch(abr.toUpperCase(), Subj);
        abr = matches.bestMatch.target;
        data = data.filter(function(a) {
            return a.Subj == abr;
            });
    }
    
    var names = Object.keys(data)
    .map(function(key) {
        return data[key].Title;
    });

    var matches = stringSimilarity.findBestMatch(course.toUpperCase(), names);
    var ratings = matches.ratings;
    ratings.sort((a, b) => b.rating - a.rating);
    ratings = Array.from(new Set(ratings.map(a => a.rating)))
                            .map(rating => {return ratings.find(a => a.rating === rating)});

    embed.addField("Best Match:" , "```" + matches.bestMatch.target + "```");
    embed.addField("Subject:" , " " + data[matches.bestMatchIndex].Subj, true);
    embed.addField("Semester:" , " " + semestermatches.bestMatch.target, true);
    embed.addField("Course Number:" ,  " " + data[matches.bestMatchIndex].Crse, true);

    otherresults = "```" + "Semester:" + semestermatches.bestMatch.target + "  Subject:" + abr
    for (var i = 1; i < ratings.length; i++) {
        otherresults += "\n - " + ratings[i].target;
        if (otherresults.length > 500) {
            i = ratings.length;
        }
    }
    otherresults += "```"
    embed.addField("Other Courses Close to Your Search", otherresults);
    embed.addField("More Information", "For more information, please contact the [registrar office](https://sites.rowan.edu/registrar/).");
    
    return { embeds: [embed] }
}

exports.name = "course";
exports.description = "provides information about Rowan courses for the current year";
exports.args = [{"name":"name", "description":"Name of the course","required":true},
                {"name":"semester", "description":"Applicable semester to search in","required":true},
                {"name":"subject", "description":"Optional subject to search in","required":false}];

function generateRandomColour() {
    return `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`;
}