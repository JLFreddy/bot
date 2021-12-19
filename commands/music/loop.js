const { QueueRepeatMode } = require('discord-player');

module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    utilisation: '{prefix}loop <queue>',
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Aucune musique en cours de lecture ${message.author} ❌`);

        if (args.join('').toLowerCase() === 'queue') {
            if (queue.repeatMode === 1) return message.channel.send(`Vous devez d'abord désactiver la musique actuelle en mode boucle  (${client.config.app.px}loop) ${message.author} ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Mode répétition **${queue.repeatMode === 0 ? 'désactivé' : 'activé'}** toute la file d'attente sera répétée à l'infini  🔁` : `Une erreur s'est produite ${message.author} ❌`);
        } else {
            if (queue.repeatMode === 2) return message.channel.send(`Vous devez d'abord désactiver la file d'attente actuelle en mode boucle (${client.config.app.px}file d'attente en boucle ) ${message.author} ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Repeat mode **${queue.repeatMode === 0 ? 'désactivé' : 'activé'}** la musique en cours sera répétée à l'infini (vous pouvez boucler la file d'attente avec l'option <queue> ) 🔂` : `Something went wrong ${message.author} ❌`);
        };
    },
};