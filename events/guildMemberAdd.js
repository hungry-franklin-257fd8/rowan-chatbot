module.exports = async (client, member) => {
    //console.log(member);
    member.guild.channels.cache.get("941042512133492796").send(`Welcome, ${member.user.username}!`);
}