module.exports = async (client, interaction) => {
    try {
        if (!interaction.isCommand()) return;

        const cmd = client.commands.get(interaction.commandName);

        if(cmd.ephemeral) {
            await interaction.deferReply({ephemeral:true});
            await interaction.editReply(await cmd.run(client, interaction));
        } else
        await interaction.reply(await cmd.run(client, interaction));
    } catch (e) {
        await interaction.reply("Something went wrong when running this command. Check the console for more info.");
        console.error(e);
    }
}