module.exports = {
    name: 'save',
    aliases: ['sv'],
    utilisation: '{prefix}save',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Aucune musique en cours de lecture ${message.author} ❌`);

        message.author.send(`Vous avez enregistré la piste ${queue.current.title} | ${queue.current.author} sur le serveur ${message.guild.name} ✅`).then(() => {
            message.channel.send(`Je t'ai envoyé le titre de la musique par messages privés ✅`);
        }).catch(error => {
            message.channel.send(`Impossible de vous envoyer un message privé ${message.author} ❌`);
        });
    },
};