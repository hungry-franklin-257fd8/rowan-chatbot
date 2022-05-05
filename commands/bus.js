const { MessageEmbed } = require("discord.js");
var stringSimilarity = require("string-similarity");

exports.run = async (client, interaction) => {
    let busstopname = '';
    if(Array.isArray(interaction)) {
        busstopname = interaction[0];
    } else {
        if(interaction.options.get("busstopname")) busstopname = interaction.options.get("busstopname").value;
    }
    if (busstopname == null){
        busstopname = '';
    }
    
    var currTime = new Date();
    var time = currTime.getHours()+""+currTime.getMinutes();
    var busTime = new Date();
    
    const rba = ["0007", "0030", "0700", "0715", "0730", "0745", "0800", "0815",
        "0830", "0845", "0900", "0915", "0930", "0945", "1000", "1030", "1045", "1100", "1115",
        "1130", "1145", "1215", "1245", "1300", "1330", "1400", "1415", "1430", "1445", "1500",
        "1515", "1530", "1545", "1600", "1630", "1700", "1730", "1830", "1930", "2030", "2100",
        "2130", "2245", "2312", "2340"];

    const sc = ["0010", "0033", "0703", "0718", "0733", "0748", "0803", "0818", "0833",
        "0848", "0903", "0918", "0948", "1003", "1033", "1048", "1103", "1118", "1133", "1148", 
        "1218", "1248", "1303", "1333", "1403", "1418", "1448", "1503", "1518", "1533", "1548", 
        "1603", "1633", "1703", "1733", "1833", "1933", "2033", "2103", "2133", "2248", "2315", "2343"];

    const mcbh = ["0012", "0035", "0705", "0720", "0735", "0750", "0805", "0820", "0835", "0850",
        "0905", "0920", "0950", "1005", "1035", "1050", "1105", "1120", "1135", "1150", "1220", "1250", "1305",
        "1335", "1405", "1420", "1435", "1450", "1505", "1520", "1535", "1550", "1605", "1635", "1705", "1735",
        "1835", "1935", "2035", "2105", "2135", "2250", "2317", "2345"];

    const abh = ["0014", "0037", "0707", "0722", "0737", "0752", "0807", "0822", "0837", "0852",
        "0907", "0922", "0952", "1007", "1037", "1052", "1107", "1122", "1137", "1152", "1222", "1252", 
        "1307", "1337", "1407", "1422", "1437", "1452", "1507", "1522", "1537", "1552", "1607", "1637",
        "1707", "1737", "1837", "1937", "2037", "2107", "2137", "2252", "2319", "2347"];

    const jrh = ["0019", "0042", "0712", "0727", "0742", "0757", "0812", "0827", "0842", "0857", "0912",
        "0927", "0957", "1012", "1042", "1057", "1112", "1127", "1142", "1157", "1227", "1257", "1312", "1342",
        "1342", "1412", "1427", "1442", "1457", "1512", "1527", "1542", "1557", "1612", "1642", "1712", "1742",
        "1842", "1942", "2042", "2112", "2142", "2257", "2324", "2352"];

    const epach = ["0021", "0044", "0714", "0729", "0744", "0759", "0814", "0829", "0844", "0859", "0914",
        "0929", "0959", "1014", "1044", "1059", "1114", "1129", "1144", "1159", "1229", "1259", "1314", "1344", "1414",
        "1429", "1444", "1459", "1514", "1529", "1544", "1559", "1614", "1644", "1714", "1744", "1844", "1944", "2044",
        "2114", "2144", "2259", "2326", "2354"];

    const hs = ["0003", "0027", "0050", "0723", "0738", "0753", "0808", "0823", "0838", "0853", "0908", "0923", "0938",
        "1008", "1023", "1053", "1108", "1123", "1138", "1153", "1208", "1238", "1308", "1323", "1353", "1423", "1438", 
        "1453", "1508", "1523", "1538", "1553", "1608", "1623", "1653", "1723", "1753", "1853", "1953", "2053", "2123", 
        "2308", "2335"];

    const esp = ["0005", "0027", "0052", "0725", "0740", "0755", "0810", "0825", "0840", "0855" , "0910", "0925", "0940",
        "1010", "1025", "1055", "1110", "1125", "1140", "1155", "1210", "1240", "1310", "1325", "1355", "1425", "1440", "1455", 
        "1510", "1525", "1540", "1555", "1610", "1625", "1655", "1725", "1755", "1855", "1955", "2055", "2125", "2310", "2337"];

    const places = ["rowan boulevard apartment", "student center", "memorial circle/bozorth", "lot a/business hall", "james/robinson hall",
        "epa/chesnut hall", "301 high street", "ellis street parking", "schedule"];

    const embed = new MessageEmbed()
        .setColor(generateRandomColour())
        .setThumbnail('https://i.imgur.com/UwP2r7v.png')
        .setFooter({ text: `Made with \u2665` })
        .setTimestamp()
        .setTitle("Rowan Bus Schedule");
    
    var typematchs = stringSimilarity.findBestMatch(busstopname, places);
    busstopname = typematchs.bestMatch.target;
    //console.log(busstopname);

    switch(busstopname){
        case "rowan boulevard apartment":
            embed.setTitle("Rowan Boulevard Apartment Bus Stop");
            embed.setDescription("The next bus will be arriving at "+timeCompare(rba, time, busTime));
            break;
        case "student center":
            embed.setTitle("Student Center Bus Stop");
            embed.setDescription("The next bus will be arriving at "+timeCompare(sc, time, busTime));
            break;
        case "memorial circle/bozorth":
            embed.setTitle("Memorial Circle/Bozorth Hall Bus Stop");
            embed.setDescription("The next bus will be arriving at "+timeCompare(mcbh, time, busTime));
            break;
        case "lot a/business hall":
            embed.setTitle("Lot A/Business Hall Bus Stop");
            embed.setDescription("The next bus will be arriving at "+timeCompare(abh, time, busTime));
            break;
        case "james/robinson hall":
            embed.setTitle("James Hall/Robinson Hall Bus Stop");
            embed.setDescription("The next bus will be arriving at "+timeCompare(jrh, time, busTime));
            break;
        case "epa/chesnut hall":
            embed.setTitle("EPA Hall/Chesnut Hall Bus Stop");
            embed.setDescription("The next bus will be arriving at "+timeCompare(epach, time, busTime));
            break;
        case "301 high street":
            embed.setTitle("301 High Street Bus Stop");
            embed.setDescription("The next bus will be arriving at "+timeCompare(hs, time, busTime));
            break;
        case "ellis street parking":
            embed.setTitle("Ellis Street Parking Bus Stop");
            embed.setDescription("The next bus will be arriving at "+timeCompare(esp, time, busTime));
            break;
        case "schedule":
            embed.setDescription("This is a link to the full schedule if you want to see the whole thing");
            embed.setURL("https://sites.rowan.edu/shuttle-services/_docs/internal_schedule_spring22.pdf");
            break; 
        default:
            embed.setDescription("Run this command with the stop you're at to get the next time the bus will be there.")
    }
    return { embeds: [embed] };
}



function generateRandomColour() {
    return `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`;
}

function timeCompare(array, time, busTime){
    var timeString;
    for(i = 0; i < array.length; i++){
        timeString = array[i];
        if(timeString.localeCompare(time) == 1){
            break;
        } else {
            timeString = array[0];
        }
    }
    timeString = [timeString.slice(0,2), ":", timeString.slice(2)].join('');
    busTime.setHours(timeString.substring(0,2), timeString.substring(3,5));
    var final = new Date(busTime).toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', hour12: true});
    return final;
}
exports.name = "bus";
exports.description = "returns information about the shuttle bus schedule for Rowan";
exports.args = [{"name":"busstopname", "description":"Name of the Bus Stop You Are At", "required":false}];