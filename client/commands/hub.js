
const Discord = require('discord.js');
const {prefix, gameName} = require('../config.json');
module.exports = {
    name: "hub",
    execute(message)
    {
        var userCharacter = GetUserCharacter(message.author.id);
        if (userCharacter)
        {
            message.reply("Welcome back, Traveler!");
            message.channel.send(CreateEmbed(userCharacter))
        }
        else
        {
            message.reply(`Welcome, Traveler! 
            \n It looks like you've never been to ${gameName} before!
            \n type "${prefix}createcharacter <name> <profession>" to start your adventure!`);        
        }
    }
} 

//TODO: Get user data from DB and display it as Embed
function GetUserCharacter()
{
    return null;
}