import express from 'express';
import client from './bot';
import { EmbedBuilder, bold, inlineCode } from 'discord.js';

const app = express();

app.use(express.json());

app.all('/', (req, res) => {
	try {
		const { guild, user, price, name, data } = req.body;
		if (!guild || !user) {
			return res.status(400).send('Bad Request');
		}
		
		res.status(200).send('OK');
		
		const channel = client.channels.cache.get(process.env.CHANNEL_ID!);
		const description =
			`${bold('Usuário')}: <@${user.id}>\n` +
			`${bold('Produto')}: ${inlineCode(name)}\n` +
			`${bold('Preço')}: ${inlineCode(price)}\n` +
			`${bold('Dados')}: ${inlineCode(data)}`;

		const exampleEmbed = new EmbedBuilder()
			.setColor('#0099ff')
			.setTitle('Compra realizada')
			.setDescription(description);

		// @ts-ignore
		channel.send({ embeds: [exampleEmbed] });
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal Server Error');
	}
});

const port = process.env.PORT || 80;
app.listen(port, () => {
	console.log(`Webserver iniciado: ${port}`);
});
