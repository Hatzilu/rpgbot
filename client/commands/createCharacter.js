const Discord = require('discord.js');
const {prefix, gameName} = require('../config.json');
const Character = require('../classes/Character.js')
module.exports = {
    name: "createcharacter",
    execute(message, args)
    {
        var name = args[1]
        var profession = args[2].toLowerCase();
        //validate user arguements
        if (name == null || name == "" || name.includes("@"))
        {
            message.channel.send("I'm sorry Traveler, You may not use that name!");
            return;
        }
        else if (profession != "warrior" || 
                 profession != "mage" || 
                 profession != "thief" ||
                 profession != "archer")
        {
            message.channel.send(`I'm sorry Traveler, There's no such profession!`)
            return; 
        }
        message.channel.send('Give me a moment, Traveler...');
        //TODO Check if character exists in db

        const Character = new Character(name, profession)

        //TODO insert character into db

        message.channel.send(`Welcome to ${gameName},`)
    }
}