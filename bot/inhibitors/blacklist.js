const { Inhibitor } = require('discord-akairo');

module.exports = class BlacklistInhibitor extends Inhibitor {
    constructor() {
        super('blacklist', {
            reason: 'blacklist',
            type: 'all'
        })
    }

    exec(message) {
        // Haha chet me may de
        const blacklist = [];
        return blacklist.includes(message.author.id);
    }
};