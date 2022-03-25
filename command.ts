import { Message } from "discord.js";

export class Command {
    listener: (msg) => any;
    aliases: [];

    constructor(listener: (msg: Message) => any, aliases: []) {
        this.listener = listener;
        this.aliases = aliases;
    }
}