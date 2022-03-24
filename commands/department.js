const { MessageEmbed } = require("discord.js");

exports.run = async (client, args) => {
    depart = null;
    try {
        depart = args[0];
    } catch (error) {
        depart = null;
    }
    console.log(depart);
    // basic message creation stuff
    const embed = new MessageEmbed()
        .setColor(generateRandomColour())
        .setDescription("Please use !department followed by the name of the daprtment you want")
        .setTimestamp()
        .setFooter({ text: `Made with \u2665` });
    
    // this is the switch statement that displays the correct message for the given argument
    switch(depart) {
        case null:
            embed.setDescription("Please use !department followed by the name of the daprtment you want\n\nACCF\t - Accounting and Finance\n AFRI\t - Africana Studies\n AMST\t - American Studies\n ANES\t - Anesthesia\n ART\t - Art\n BISC\t - Biological Science\n BME\t - Biomedical Engineering\n BMS\t - Biomedical Sciences-CMSRU\n CAMD\t - Camden\n CASE\t - Ctr for Access/Success/Equity\n CBIO\t - Cell Biology and Neuroscience\n CEE\t - Civil and Environmental Eng.\n CHE\t - Chemical Engineering\n CHEM\t - Chemistry and Biochemistry\n COSD\t - Communication Studies\n CSCI\t - Computer Science\n DERM\t - Dermatology\n ECE\t - Electrical and Computer Engin\n EDSL\t - Ed Services and Leadership\n EMED\t - Emergency Medicine\n ENGL\t - English\n ENGR\t - Engineering\n ENSC\t - Environmental Science\n FMED\t - Family Medicine\n GENV\t - Geography, Plng and Sustainablty\n GEOL\t - Geology\n GERI\t - Geriatrics and Gerontology\n GSBS\t - Graduate Sciences\n HES\t - Health and Exercise Science\n HIST\t - History\n HONR\t - Honors\n IIE\t - Interdiscipl. and Inclusive Edu\n INTR\t - Interdisciplinary\n JOUR\t - Journalism\n LANG\t - World Languages\n LAWJ\t - Law/Justice\n LLSC\t - Lang Lit and Sociocultural Edu\n MATH\t - Mathematics\n MBIO\t - Molecular Biology\n MBS\t - Biomedical Sciences\n MCB\t - Molecular and Cellular Biosci\n MD\t - Medicine\n MECH\t - Mechanical Engineering\n MED\t - Medicine\n MGTE\t - Management and Entrepreneurship\n MKBI\t - Marketing and Business Info Sys\n MUS\t - Music\n NEUG\t - Neurology\n NURS\t - Nursing\n OBG\t - Obstetrics and Gynecology\n OSCI\t - Osteopathic Manipulative Med\n OST\t - Osteopathic Courses\n PATH\t - Pathology\n PBL\t - Problem Based Learning\n PBRL\t - Public Relations-Advertising\n PCS\t - Program in Cannabis Studies\n PEDS\t - Pediatrics\n PHRE\t - Philosophy and World Religions\n PHYS\t - Physics and Astronomy\n PMR\t - Physical Med and Rehabilitation\n PSEC\t - Political Science and Economics\n PSY\t - Psychology\n PSYC\t - Psychiatry\n RAD\t - Radiology\n RONC\t - Radiation Oncology\n RTVF\t - Radio/TV/Film\n SOAN\t - Sociology and Anthropology\n STM\t - Sci Tech Eng Art and Math =STEAM\n SURG\t - Surgery\n THD\t - Theatre-Dance\n WRAR\t - Writing Arts\n XEED\t - Experiential Engineering Ed");
        break;

            case "ACCF":
            embed.setDescription("https://business.rowan.edu/departments/department_accounting.html");
            break;
            case "AFRI":
                embed.setDescription("https://chss.rowan.edu/centers/inter_majors/interdisciplinary_programs/aas/index.html");
            break;     
            case "AMST":
                embed.setDescription("https://chss.rowan.edu/centers/inter_majors/interdisciplinary_programs/americanstudies/index.html");
            break;   
            case "ANES":
                embed.setDescription("https://cmsru.rowan.edu/faculty/departments/anesthesiology/");
            break;   
            case "ART":
                embed.setDescription("https://ccca.rowan.edu/departments/art/index.html");
            break;   
            case "BISC":
                embed.setDescription("https://csm.rowan.edu/departments/biology/index.html");
            break;   
            case "BME":
                embed.setDescription("https://engineering.rowan.edu/programs/biomedical/index.html");
            break;   
            case "BMS":
                embed.setDescription("https://gsbs.rowan.edu/");
            break;   
            case "CASE":
                embed.setDescription("https://education.rowan.edu/case/index.html");
            break;   
            case "CBIO":
                embed.setDescription("https://som.rowan.edu/research/basicscience/cellbiology/index.html");
            break;   
            case "CEE":
                embed.setDescription("https://engineering.rowan.edu/programs/civilenvironmental/index.html");
            break;   
            case "CHE":
                embed.setDescription("https://engineering.rowan.edu/programs/chemical/index.html");
            break;   
            case "CHEM":
                embed.setDescription("https://csm.rowan.edu/departments/chembio/index.html");
            break;   
            case "COSD":
                embed.setDescription("https://ccca.rowan.edu/departments/communicationStudies/index.html");
            break;   
            case "CSCI":
                embed.setDescription("https://csm.rowan.edu/departments/cs/index.html");
            break;   
            case "DERM":
                embed.setDescription("https://cmsru.rowan.edu/faculty/departments/medicine/");
            break;   
            case "ECE":
                embed.setDescription("https://engineering.rowan.edu/programs/electricalcomputer/index.html");
            break;   
            case "EDSL":
                embed.setDescription("https://education.rowan.edu/programs/departments/edServLead/index.html");
            break;   
            case "EMED":
                embed.setDescription("https://som.rowan.edu/graduate/residency/emergency/index.html");
            break;   
            case "ENGR":
                embed.setDescription("https://global.rowan.edu/programs/ms-in-engineering.html");
            break;   
            case "FMED":
                embed.setDescription("https://som.rowan.edu/graduate/residency/family/index.html");
            break;   
            case "GENV":
                embed.setDescription("https://earth.rowan.edu/departments/geography/index.html");
            break;   
            case "GEOL":
                embed.setDescription("https://earth.rowan.edu/departments/geology/index.html");
            break;   
            case "HES":
                embed.setDescription("https://snhp.rowan.edu/departments/hes/index.html");
            break;   
            case "HIST":
                embed.setDescription("https://chss.rowan.edu/departments/history/index.html");
            break;   
            case "HONR":
                embed.setDescription("https://sites.rowan.edu/honors/");
            break;   
            case "IIE":
                embed.setDescription("https://education.rowan.edu/programs/departments/IIE/index.html");
            break;   
            case "JOUR":
                embed.setDescription("https://ccca.rowan.edu/departments/journalism/index.html");
            break;   
            case "LANG":
                embed.setDescription("https://chss.rowan.edu/departments/world_languages/index.html");
            break;   
            case "LAWJ":
                embed.setDescription("https://chss.rowan.edu/departments/lawjustice/index.html");
            break;   
            case "LLSC":
                embed.setDescription("https://education.rowan.edu/programs/departments/llsc/index.html");
            break;   
            case "MATH":
                embed.setDescription("https://csm.rowan.edu/departments/math/index.html");
            break;   
            case "MBIO":
                embed.setDescription("https://som.rowan.edu/research/basicscience/molecularbiology/index.html");
            break;   
            case "MBS":
                embed.setDescription("https://csm.rowan.edu/departments/mcb/index.html");
            break;   
            case "MCB":
                embed.setDescription("https://csm.rowan.edu/departments/mcb/index.html");
            break;   
            case "MECH":
                embed.setDescription("https://engineering.rowan.edu/programs/mechanical/index.html");
            break;   
            case "MGTE":
                embed.setDescription("https://business.rowan.edu/departments/department_management.html");
            break;   
            case "MUS":
                embed.setDescription("https://cpa.rowan.edu/music/index.html");
            break;   
            case "NEUG":
                embed.setDescription("https://cmsru.rowan.edu/faculty/departments/neurology/");
            break;   
            case "NURS":
                embed.setDescription("https://snhp.rowan.edu/departments/nursing/index.html");
            break;   
            case "OBG":
                embed.setDescription("https://som.rowan.edu/graduate/residency/obgyn/index.html");
            break;   
            case "PBRL":
                embed.setDescription("https://ccca.rowan.edu/departments/publicRelationsAdvertising/index.html");
            break;   
            case "PEDS":
                embed.setDescription("https://cmsru.rowan.edu/faculty/departments/pediatrics/");
            break;   
            case "PHRE":
                embed.setDescription("https://chss.rowan.edu/departments/philosophy/index.html");
            break;   
            case "PHYS":
                embed.setDescription("https://csm.rowan.edu/departments/physics/index.html");
            break;   
            case "PMR":
                embed.setDescription("https://cmsru.rowan.edu/faculty/departments/pmr/");
            break;   
            case "PSEC":
                embed.setDescription("https://cmsru.rowan.edu/faculty/departments/psychiatry/");
            break;   
            case "RTVF":
                embed.setDescription("https://ccca.rowan.edu/departments/radioTelevisionFilm/index.html");
            break;   
            case "SOAN":
                embed.setDescription("https://chss.rowan.edu/departments/sociology/index.html");
            break;   
            case "SURG":
                embed.setDescription("https://som.rowan.edu/graduate/residency/surgery/index.html");
            break;   
            case "THD":
                embed.setDescription("https://cpa.rowan.edu/theatre_dance/index.html");
            break;   
            case "WRAR":
                embed.setDescription("https://ccca.rowan.edu/departments/writingArts/index.html");
            break;   
            
        default:
            embed.setDescription("The Department You requested ither does not exist or has no website associated with it");
    }
    return { embeds: [embed] }
}
exports.name = "department";
exports.description = "provides infomation about rowan academic departments";

function generateRandomColour() {
    return `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`;
}
