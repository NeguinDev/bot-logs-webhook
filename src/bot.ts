import { Client, GatewayIntentBits, codeBlock, REST, Routes } from 'discord.js';

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
});

const commands = [
	{
		name: 'ping',
		description: 'Retorna o ping do bot',
	},
	{
		name: 'id',
		description: 'Retorna o id do canal',
	},
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN!);
const routes = Routes.applicationGuildCommands(process.env.CLIENT_ID!, process.env.GUILD_ID!);

rest.put(routes, { body: commands })
	.catch(console.error)
	.then(() => console.log('Comandos registrados'));

client.on('ready', () => {
	console.log(`Bot iniciado: ${client.user?.tag}`);
});

client.on('interactionCreate', async (interaction) => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === 'ping') {
		const now = Date.now();
		await interaction.reply('Pong!');
		await interaction.editReply(`Pong! A latência é ${Date.now() - now}ms.`);
	}

	if (interaction.commandName === 'id') {
		await interaction.reply(`ID do Canal: ${codeBlock('js', interaction.channelId)}`);
	}
});

client.login(process.env.TOKEN);

export default client;