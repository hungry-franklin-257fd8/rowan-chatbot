module.exports = async (client, interaction) => {
    // begone
    if (!interaction.isCommand()) return;

    const cmd = client.commands.get(interaction.commandName);

    await interaction.reply(await cmd.run(client));
}