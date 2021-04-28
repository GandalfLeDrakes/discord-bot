const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = ","; // Remplacez le "." par le préfixe de votre bot

client.on("ready", () => {
  console.log("Salut je suis connecté");  
  var TailleMembres = client.users.size;
  var TailleServeurs = client.guilds.size;
  client.user.setActivity("Connecté - " + TailleServeurs + " serveur(s) et " + TailleMembres + " membre(s)");
}

client.on('message', (msg) => { // Jusqu'au "}" affiché plus bas, il ne faut mettre que des codes destinés à des messages ici.
  if (msg.content.startsWith(prefix + "ping")) {
    msg.channel.send("Pong ! :ping_pong:")
}
}          
client.login("ODM3MDI3MzIxMDY4MTI2MjM5.YImkcA.H7eRMrhhHr8dFX6WR_e4ZecSE-Q");