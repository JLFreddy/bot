module.exports = {
    app: {
        px: '-',
        token: 'OTExNTY4MTA5MjM0NzE2Njkz.YZjR9Q.s3062eI78sB_7YMXvHnLigwq4U4',
        playing: 'QLF'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};