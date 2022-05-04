const { MessageEmbed } = require("discord.js");

// This command will be used to get weather data for the user.
// Made by Joseph


exports.run = async () => {
    const embed = new MessageEmbed()
        .setColor(generateRandomColour())
        .setDescription('Weather for Rowan University')
        .setTimestamp()
        .setFooter({text: `Made with \u2665`});

        try {
            const config = require("../config.json");
            dontlookatthispls = config.OpenWeather;
            const OpenWeatherAPI = require("openweather-api-node")
            let weather = new OpenWeatherAPI({
                key: dontlookatthispls,
                locationName: "Glassboro",
                units: "imperial"
            })
            let today = await weather.getCurrent();
            embed.addField('Description', `${today.weather.description}`);
            embed.addField('Temperature', `${today.weather.temp.cur}°F`);
            embed.addField('Humidity', `${today.weather.humidity}%`);
            embed.addField('Wind Speed', `${today.weather.wind.speed} mph`);
            embed.setThumbnail(today.weather.icon.url);
        } catch (error) {
            embed.addField('Description', "No weather data available");
        }

    return { embeds: [embed] };
}
exports.name = "weather";
exports.description = "Returns the current weather at Rowan University";

function generateRandomColour() {
    return `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`;
}