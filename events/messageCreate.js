module.exports = async (client, message) => {
    // begone bots
    if (message.author.bot) return;

    // ignore non-prefixed msgs
    if (message.content.indexOf(client.config.prefix) !== 0) return;

    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    // ^ whitespace split using regex
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command);

    if (!cmd) return;

    await message.reply(await cmd.run(client));
}