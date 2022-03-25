import { Message } from "discord.js";

export class Command {
    name: string;
    listener: (msg) => any;
    aliases: [];

    constructor(name: string, listener: (msg: Message) => any, aliases: []) {
        this.name = name;
        this.listener = listener;
        this.aliases = aliases;
    }
}