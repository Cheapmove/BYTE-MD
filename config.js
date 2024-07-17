
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "923072380380";
global.owner = process.env.OWNER_NUMBER || "2349074664307";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU9ZZktjTEFRVlAzUmFhL0x4NlFJZVFRY2swUEg4SWdTcSszZVlSZWptND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidGRiQ2VoR1NJeG5uaGpOWmpIczNKTjRXVlJNbmw5MW9EdWNzR2MrYTlTdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHSFZaYjdCK093ZUFwNmVUUzB3UFlNSndRb0JIcGt0MEUzMW1nY3pxVDFVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsaXhCSkpsZ2JNUlV4a3hEYnYvSjB6QlBBY3J2L0dUOUF6ZUZLcmpmWWtRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNIWEc2cEJLUXJETTd2cEp0VTFSbnR2RXBDQWpVLzlUNHBaYjhlQmtsMFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijc1dWtqUXFzMlA2ZG1XeE9MZnNHNTNQYmFPL2JMYXNXZ3JuTmVrT011U0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME1qdStDNGpNMlAwcFdVOGgxMlZHNzBzME9Nd3pRWXFvSTlIUXB4RzZGOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUFsbE1iK2VWOVN3ZkJLUW92MW5teVQ5b2p2TmVyQlhScGl4TWRZaHJDZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNYejZ2Z3JCSmZtOEJ2Zi9nQ2xTMjlkUHROYzlZY1l5N1JZR3JOcytKVW9YVmIzQnZHNXlMdkw5M09HYmd4c2kybDVWSG5MemtkREhydDcvMGhXYkFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg0LCJhZHZTZWNyZXRLZXkiOiI5K3dlRzZqV28zdmlraUIwZHgvZkNGNEF5OHhXMElQN3FTaEdacm5FV1pRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJVMXdaVXFBUlI3YVZUaDA0M2x6ejRRIiwicGhvbmVJZCI6IjUwYmQ0OWU4LWZjNzctNDkyNC04OWMwLWM5ZGVjZjU3NGM1YyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1em93QkVSZzRiaWRxdkl1ZE1oaUdQd1dUOG89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidGMwRms3QzRTWUhwb0pjZzFDaFBwVW9jZXk4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjQyVE4yODFMIiwibWUiOnsiaWQiOiIyMzQ5MDc0NjY0MzA3OjM4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkFiZHVsbWFsaWsifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0x1MXpSd1E1WlRmdEFZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ii9hZXRLcHVwSG9KRHU4SlFYYXc3SnZSWGxrSDBFYlk1d2YvZ1U1WWZWVzg9IiwiYWNjb3VudFNpZ25hdHVyZSI6IktGRno5NkFSekd5WWdneDR6Sy9rOEdJZ1dhbnRkdjRaUzhkVUltNGNhaDYzMWxzZm4rbFE5RWdxc0xJMFpYSSt6di81SXZDalZ3L0E4eHpJUDhON0R3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJodXhMREZnWTJjc3E0TkhHY1o1ekdLUEdHSll4VEMxNkxVbjZ4RWVNN1FQUStCV29wK1F4ZFBJUG5NTDZFbjFZTzRpeEtCelZWY3RlK2d6VGErenREUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwNzQ2NjQzMDc6MzhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZjJuclNxYnFSNkNRN3ZDVUYyc095YjBWNVpCOUJHMk9jSC80Rk9XSDFWdiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTIyMzc5NCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIdEQifQ==" //Make sure session id starts with Byte;;;
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By Abdulmalik*",
  author: process.env.PACK_AUTHER || "Abdulmalik",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "ABDULMALIK",
  ownername: process.env.OWNER_NAME || "Maleek",
  errorChat: process.env.ERROR_CHAT || "923072380380",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
