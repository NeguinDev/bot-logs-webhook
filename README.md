# Bot Logs Webhook

## Description

Bot Logs Webhook is a Discord bot built to log sales data via a webhook. It uses Discord.js for the bot functionality and Express for the web server.

## Requirements

- Node.js
- Discord.js
- Express

## Installation

Clone the repository:

```bash
git clone https://github.com/NeguinDev/bot-logs-webhook.git
```

Install the dependencies:

```bash
npm install
```

Rename `.env.exemple` to `.env` and fill in the required environment variables:

```
TOKEN=
CLIENT_ID=
GUILD_ID=
CHANNEL_ID=
```

## Usage

To start the bot, run:

```bash
npm start
```

For development:

```bash
npm run dev
```

## Features

### Discord Bot

The bot has basic commands like `ping` and `id` for testing purposes.

### Webhook Server

The Express server listens for incoming webhooks and logs the sales data to a Discord channel.

## Contribution

Feel free to contribute to the project. Open a PR or an issue for discussions.

## License

ISC
