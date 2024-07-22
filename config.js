
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "fataimalik15@gmail.com";
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
global.sudo = process.env.SUDO || "2349074664307";
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
    "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUIvUlVBQ3Z1dTQ3a2NOY3FoQkgzSWY3NzJyb0FROGFManBSMnZOQ3Uyaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiLzhTZTdnOG9sNlAwamdpZkx6cDFNTDVDTVdKQVRWSFJwSzhHSXhEYTVpST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhRmpmSnlteTkrZ1hUU3E1c2dIVmxuWVBBOWFrK1p3L0hHNXJIYTlSUTB3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpeUkyUGdISTlUTHArSE1rUmZaWFozTVgydW9keDRMSDR6SVF5bkJueEF3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVBSTRSYzNWbWlxbHczOTVOMFdOMkxFd3IvWmEvMUVEUWM1UHJGcDFsbDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFFN21GZTVtTXFTWFpvL0FKTDFkNjV0eHRMTFhWNEFQN29oYVhqZUo5VUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0RBdzNId3dsMmhWS0RVMUlxYUFxYysvZjNTUHVBbG5sWUxTd0JIdmFXVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVkVVQVlIcHdLYmNVVTFkNHI2eUQ0QzlXbnIzY2JyeDBwSmNhMG1KSUlBTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJycEpxRXdtalc1Y2ZXbzJ5bnFJd29mTk4wK2xaUWdiWUFWbDhmZ2ozbDdjSUJiUURYUldibXdSN3hlWWJQbFY3a01pVHpEVGoxZm1od2QvaGpGOGhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcyLCJhZHZTZWNyZXRLZXkiOiJJWHQ5NVFlVmtxa3ZnbkFGV2J5bTRYUGRxQ1hGRElmS25SS1h1R1JXeGZ3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJzNWV1Q2lrSlJQV05HaXpoVXdJN3p3IiwicGhvbmVJZCI6IjA3NjY5ODBmLTkyNzUtNGI2OS04YWUzLTg3Zjk0ZGI4MzY0MCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqR1pBWXQwK2UrVXZEMEhSSjNidGNNa3M5VkU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVWdJb3hkbU9sMktWN2ZJblp1ODlaOHZqbVVjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik42RjlZTURaIiwibWUiOnsiaWQiOiIyMzQ5MDc0NjY0MzA3OjU3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkFiZHVsbWFsaWsifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01tMXpSd1F4Wlg3dEFZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ii9hZXRLcHVwSG9KRHU4SlFYYXc3SnZSWGxrSDBFYlk1d2YvZ1U1WWZWVzg9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImVoa1ZLS3A2ZkRJd1A5OEZvc3Ztekh1MWtZSityYkcrUGM0ZUt6UDloWW1tY1I2NUJBUXVZZ3VpYTRjN09KK29OaUFmdktFa2xWSjFMYWlmUEg0RkNnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJGMmFtOTh4T3BmT1dXL0htUDFoMFJ6UnR5VzVuMnVMVVZocVFOeXlEMy8yQkllOFNNWEEzdjVGbU40MHFIdEhpT2lXallWNlJ2Qy92VjVESFR4a0Zpdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwNzQ2NjQzMDc6NTdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZjJuclNxYnFSNkNRN3ZDVUYyc095YjBWNVpCOUJHMk9jSC80Rk9XSDFWdiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTY4MjY0MywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIdGoifQ==" //Make sure session id starts with Byte;;;
  
  process.env.SESSION_ID ||
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "MALIK").toUpperCase(),
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
