import * as main from './main';
import { Command } from "./command";
import { Message } from "discord.js";

export function registerEvents(commands) {
    main.bot.on("messageCreate", (msg: Message) => {
        if(msg.content.startsWith(main.prefix)) {
            let commandName = msg.content.slice(1).trim().split(" ")[0];

            commands.forEach((c) => {
                if(c.name.toLowerCase() == commandName) c.listener(msg);
                else if(commandName in c.aliases) c.listener(msg);
            })
        }
    });
}