import { Message, MessageEmbed } from "discord.js";
import { SyncRequestClient } from 'ts-sync-request/dist'
import * as main from "../main";

export let aliases = [
    "teaminfo",
    "teami",
    "team",
    "info"
];

export function listener(msg: Message) {
    let args = msg.content.split(" ").slice(1);
    let teamNum = args[0];
    let team = new SyncRequestClient()
        .addHeader("X-TBA-Auth-Key", main.tba)
        .get(main.tbaUrl + "team/frc" + teamNum)

    let events: [] = new SyncRequestClient()
        .addHeader("X-TBA-Auth-Key", main.tba)
        .get(main.tbaUrl + "team/frc" + teamNum + "/events/simple")

    let eventString = "Events: "
    for(let e in events) {
        eventString += `\n - ${e["name"]}`
    }

    let embed = new MessageEmbed()
        .setTitle(`Team ${teamNum}`)
        .setDescription(`Team info for team ${teamNum}:`)
        .addField("Name", team["nickname"])
        .addField("Locatiom", `${team["city"], team["state_prov"]}`)
        .addField("Events", eventString)
}