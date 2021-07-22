const Discord = require('discord.js');
const client = new Discord.Client();
const {prefix} = require('./config.json');
require('dotenv').config();

//connect to db
const mongoose = require('mongoose');
mongoose.connect(process.env.DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => {
    console.log("Connected to DB!")
})

client.login(process.env.BOTTOKEN);

const fs = require('fs')
// var gameName = config.gameName;

client.commands = new Discord.Collection();


const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
    console.log("loading command module "+command.name+".js...");
}
client.on('ready', () => {
    console.log('client is up!')
});
//banana
    
var command, args;
client.on('message',(message) => {
    args = (message.content.slice(prefix.length).split(/ +/))
    console.log('message sent'+args[0])
    console.log('message args: '+args[1])
    command = args.shift().toLowerCase();
    if (!message.content.startsWith(prefix) || message.author.bot) {return;}
    switch (command){
        case "ping":
            message.channel.send('Pong!');
            break;
        case "hub":
            client.commands.get('hub').execute(message)            
            break;
        case "createcharacter":
            client.commands.get('createcharacter').execute(message, args)
        default:
            message.reply('Not a valid command! Sorry Traveler!');
            break;
    }
});