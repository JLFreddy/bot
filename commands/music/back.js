module.exports = {
    name: 'back',
    aliases: ['previous'],
    utilisation: '{prefix}back',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Aucune musique en cours de lecture ${message.author} ❌`);

        if (!queue.previousTracks[1]) return message.channel.send(`Aucune musique n'a été jouée précédemment ${message.author} ❌`);

        await queue.back();

        message.channel.send(`Lecture de la piste : **précédente** ✅`);
    },
};