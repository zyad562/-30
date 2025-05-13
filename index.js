/// ThailandCodes|loqmanas ©

import { Client, GatewayIntentBits, Collection } from "discord.js";
import { config } from "dotenv";
import { handleChairsGame } from "./games/chairs.js";
config();
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
  ],
});
client.games = new Collection();
client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith("+كراسي")) {
    await handleChairsGame(message);
  }
});
client.once("ready", () => {
  console.log(`Bot is ready! Logged in as ${client.user.tag}`);
});
client.login(process.env.DISCORD_TOKEN);

console.log("Bot is starting..."); /// ThailandCodes|loqmanas ©
