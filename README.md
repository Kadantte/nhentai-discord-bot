<div align="center">
  <img width="200" height="200" alt="nhentai" src="https://i.imgur.com/BtIDpZ4.png"><br>

  <img alt="nhentai" src="https://i.imgur.com/my4t1Hb.png"><br>

[![Invite nhentai](https://img.shields.io/badge/invite-me-7289da.svg?style=flat-square&logo=discord)](https://discordapp.com/api/oauth2/authorize?client_id=663743798722953258&permissions=387136&scope=bot)
[![Join the support server](https://img.shields.io/badge/join-the%20support%20server-7289da.svg?style=flat-square&logo=discord)](https://discord.gg/8PX6QZb)
[![Library](https://img.shields.io/badge/library-discord.js-blue.svg?style=flat-square)](https://discord.js.org/#/)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)
  <br><br>
    **Just a nhentai Discord bot along with some other NSFW features.**
</div>

---

# ⚠ **Attention**
This bot violates the **[Discord Terms of Service](https://discordapp.com/terms)** as some of its features can provide "_illustrated or digitally altered pornography which depicts minors (such as lolicon, shotacon, or cub)_" as well as "_images of gore and/or animal cruelty_" as stated in the **[Discord Community Guildlines](https://discordapp.com/guidelines)**. I will not take responsibility if your account or your bot's account was banned by the Discord team.

You can continue reading the rest of the README if you are okay with this.

# About
nhentai is an open source nhentai Discord bot powered by JavaScript with [discord.js](https://discord.js.org/#/) using the [Akairo](https://discord-akairo.github.io/#/) framework.

# Features
- Almost every basic features of the **[nhentai](https://nhentai.net/)** website.
- (WIP) EXP system based on the number of doujins searched
- Random reddit post from [r/nhentai](https://www.reddit.com/r/nhentai/).
- Images from [nekobot](https://nekobot.xyz/), [nekos.life](https://nekos.life/), [lolis.life](https://lolis.life/) and multiple booru sites such as Danbooru, Gelbooru, and much more.

# Requirements

1. Discord Bot Token. You can learn how to get one **[here](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)**.
2. A MongoDB server. Read **[this](https://docs.mongodb.com/manual/)** for more info.
3. Node.js v11.0.0 or newer

# Installation

```
git clone https://github.com/kaguwuya/nhentai-discord-bot.git
cd nhentai-discord-bot
npm install
```

After installation finishes you can use `node bot/index.js` to start the bot.

# Configuration

Copy or Rename `.env.example` to `.env` and fill out the values:

```
PREFIX = 'Insert your desired prefix here'
DISCORD_TOKEN = 'Insert your bot's token here'
OWNER = 'Your Discord user ID'
TWITTER_API = 'Your Twitter API key'
TWITTER_SECRET = 'Your Twitter secret'
MONGODB_URI = 'URL of MongoDB server'
```

# Contributing

1. [Fork the repository](https://github.com/kaguwuya/nhentai-discord-bot/fork)
2. Clone your fork: `git clone https://github.com/your-username/nhentai-discord-bot.git`
3. Create your feature branch: `git checkout -b my-new-feature`
4. Commit your changes: `git commit -am 'Add some feature'`
5. Push to the branch: `git push origin my-new-feature`
6. Submit a pull request

# License
nhentai is licensed under the **[MIT License](https://github.com/kaguwuya/nhentai-discord-bot/blob/master/LICENSE)**