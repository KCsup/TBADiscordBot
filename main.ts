import { Client } from "discord.js";
import { Command } from "./command";
import { readdir } from "fs/promises";
import * as fs from "fs";
import * as events from "./events";

export let prefix = "!";
export let commands = [Command];

let token = JSON.parse(fs.readFileSync(".token.json").toString()).token;
export const bot = new Client({intents:["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"]});

readdir("./commands/").then(async (files) => {
    for(let file of files) {
        if(!file.endsWith(".ts")) continue;

        let fileName = file.slice(0, -3);
        let command = await import(`./commands/${fileName}`);
        commands.push(new Command(fileName, command.listener, command.aliases));
    }
}).then(() => {
    events.registerEvents(commands);
    bot.login(token);
});
