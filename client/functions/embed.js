function CreateEmbed(userCharacter){
    if (userCharacter)
    {
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        var img = userCharacter.Image
        var charname = userCharacter.characterName
        var level = userCharacter.level
        const Embed = new Discord.MessageEmbed()
        .setColor('#'+randomColor)
        .setTitle(charname)
        // .setURL('https://discord.js.org/')
        .setAuthor('Random ass RPG game', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
        .setDescription('Some description here')
        .setThumbnail((gameIcon) ? gameIcon : 'https://i.imgur.com/wSTFkRM.png')
        .addFields(
            { name: 'Character level', value: level },
            // { name: '\u200B', value: '\u200B' },
            // { name: 'Inline field title', value: 'Some value here', inline: true },
            // { name: 'Inline field title', value: 'Some value here', inline: true },
        )
        .addField('Inline field title', 'Some value here', true)
        .setImage((img) ? img : 'https://i.imgur.com/wSTFkRM.png')
        .setTimestamp()
        .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
        
        return Embed;
    }
    return null;
}