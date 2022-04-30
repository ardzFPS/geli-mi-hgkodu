
const moment =require("moment")
require("moment-duration-format")
moment.locale("tr");
  client.on("guildMemberAdd", async(member) => {  
    if(member.guild.id !==  "sunucuid") return
    await member.roles.add("otorolid");
  let los = client.users.cache.get(member.id);
    const kurulus = new Date().getTime() - los.createdAt.getTime();  

      const mapping = {
                   " ": "   ",
                    '0': '0️⃣',
                    '1': '1️⃣',
                    '2': ' 2️⃣',
                    '3': '3️⃣',
                    '4': '4️⃣',
                    '5': '5️⃣',
                    '6': '6️⃣',
                    '7': '7️⃣',
                    '8': '8️⃣',
                    '9': '9️⃣'
      }
        let üyesayısı =   `${member.guild.memberCount.toString()}`
           .split("")
           .map(c => mapping[c] || c)
           .join("")

  var kontrol;
if (kurulus < 1296000000) {
  member.roles.add("otorolid");
  member.roles.remove("fakehesapid");
  kontrol = `Hesap Durumu: **Güvenilir Değil** `
}
if (kurulus > 1296000000) kontrol = `Hesap Durumu: **Güvenilir** `
 
  const kanal = member.guild.channels.cache.get("841678737698455562")
  const kuruluss = new Date().getTime() - los.createdAt.getTime();  
  const gecen = moment.duration(kuruluss).format(`YY **[Yıl,]** DD **[Gün,]** HH **[Saat,]** mm **[Dakika,]** ss **[Saniye]**`) 
const embed = new MessageEmbed()
.setTitle(`Sunucumuza Hoşgeldin ${member.user.username}`)
.setThumbnail(member.user.avatarURL({ dynamic: true }))
.setDescription(`  • Sunucumuza Hoşgeldin ${los} !

• Seninle Beraber Sunucumuzda `+ üyesayısı +` Değerli İnsan Oldu.

> • Hesabın \``+ gecen +`\` Önce Oluşturulmuş.

 • `+ kontrol +`



`)
.setColor("RANDOM")
kanal.send({embeds: [embed]})

})

