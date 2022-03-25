import { Message } from "discord.js";

export let aliases = ["p"];

export function listener(msg: Message) {
    msg.channel.send("Pong!");
}