import * as main from './main';

export function registerEvents(commands: {}) {
    main.bot.on("messageCreate", (msg) => {
        if(msg.content.startsWith(main.prefix)) {
            
        }
    });
}