const { Command } = require('discord-akairo');
const { MessageEmbed } = require('discord.js');
const he = require('he');
const moment = require('moment');
const User = require('../../../models/user');

module.exports = class FavoritesCommand extends Command {
	constructor() {
		super('favorites', {
            category: 'general',
			aliases: ['favorites', 'favourites'],
			description: {
                content: 'Check your (or your buddy\'s) favorites list.\nTo add a doujin to your favorites list, react with `❤️`',
                usage: '[user]',
                examples: ['', '@nhentai#7217']
            },
            args: [{
                id: 'member',
                type: 'member'
            }],
            cooldown: 10000
		});
    }

	async exec(message, { member }) {
        member = member || message.member;
        await User.findOne({
            userID: member.id
        }, async (err, user) => {
            if (err) {
				this.client.logger.error(err);
				return message.channel.send(this.client.embeds('error'));
			}
            if (!user) return message.channel.send(this.client.embeds('error', 'Favorites list not found.'));
            else {
                if (!user.favorites.length) return message.channel.send(this.client.embeds('error', 'Favorites list not found.'));
                let msg = await message.channel.send('Fetching favorites ... The longer your favorites list is, the more time you have to wait ...');
                const display = this.client.embeds('display');
                for (let i = 0, a = user.favorites; i < a.length; i++) {
                    await this.client.nhentai.g(a[i]).then(async doujin => {
                        const info = new MessageEmbed()
                            .setAuthor(he.decode(doujin.title.english), this.client.icon, `https://nhentai.net/g/${doujin.id}`)
                            .setThumbnail(doujin.getCoverThumbnail())
                            .setTimestamp()
                        let tags = new Map();
                        doujin.tags.forEach(tag => {
                            if (!tags.has(tag.type)) tags.set(tag.type, []);
                            let a = tags.get(tag.type); a.push(`**\`${tag.name}\`**\`(${tag.count.toLocaleString()})\``);
                            tags.set(tag.type, a);
                        });
                        if (tags.has('parody')) info.addField('Parodies', tags.get('parody').join(' '));
                        if (tags.has('character')) info.addField('Characters', tags.get('character').join(' '));
                        if (tags.has('tag')) info.addField('Tags', tags.get('tag').join(' '));
                        if (tags.has('artist')) info.addField('Artists', tags.get('artist').join(' '));
                        if (tags.has('group')) info.addField('Groups', tags.get('group').join(' '));
                        if (tags.has('language')) info.addField('Languages', tags.get('language').join(' '));
                        if (tags.has('category')) info.addField('Categories', tags.get('category').join(' '));
                        info.addField('‏‏‎ ‎', `${doujin.num_pages} pages\nUploaded ${moment(doujin.upload_date * 1000).fromNow()}`);
                        display.addPage(info, doujin.id);
                    }).catch(err => {
                        this.client.logger.error(err);
                        return message.channel.send(this.client.embeds('error'));
                    });
                }
                return display.run(await msg.edit('Done.'));
            }
		});
	}
};