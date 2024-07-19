
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
global.sudo = process.env.SUDO || "2349074664307";
global.owner = process.env.OWNER_NUMBER || "2349074664307";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0M5QlE5eVhYYnZrVkFLS0o0VXFhbmRkbldrdVF1amxHT2tneFY1UGcxQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQWlLWEJzWDlOWjZHOVdnS2tQQmJSbmZzdDZWdzBYWkxWcUxhc25PVWNGND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0SmJwVGRURWdaT0QwWlFrTzlHL1dHNldIaWVuWW0vdnZCTWpzVXRXaUZJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCakRSNzNiYjBncjE2R0ZHQ3BFaEpCU0c2dm5zWkN3d3YyUUprSHd3NFRvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFMWVBSa1Rad3pHQVNQbUsveWV1c0hJN1ZzSEcxdE82UTJLcno5Q3grMkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1GYTh6SWhQZ2xQY1hucTZRdUQzVzZDTlhacUJmUmpCMlFWcEVQeXhXREE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNElSdVlKME1wV2NrQjlXaFN5eC9UVW9HRzF0YXQxUGU0L1piaGZqaGZHVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWxteWlWd0VZUzFaS2Z2Z1VyU2JFWTM5eHRydE9vVENtRmtYQW5NOXYxST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNYdlhIbjJtTzVZTW0zNDA1eW1qOHlKeHhZQTFXMlZxd09UQndPbkRhN3JUY0xqVmVBcWk3WHJJV0g4aG9nekpwbXp4bnZyekpmNVB4M0Vocy9zeER3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDAsImFkdlNlY3JldEtleSI6IlprZFVPNUNEKzhFc0xEYUlNcDZKcWlvQUFhMWhNVTlpazV5cEswb0hEbm89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ikg2MlZ2cUJsUUZtN09QSW1rUWcza0EiLCJwaG9uZUlkIjoiNDEwNWY5ZGMtYzc1OS00N2RjLWFiN2ItNTQzYTI1ZTVkN2Q3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpuY3FBRkxISW0raWZmejZaMHM5N2h1UGc1VT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoSkRla1d0Sk9nMjJ5bkNTbmZpL3VOMnhMY1E9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWDlMM0dURFQiLCJtZSI6eyJpZCI6IjIzNDkwNzQ2NjQzMDc6NDhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQWJkdWxtYWxpayJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTVMxelJ3UXpwUGp0QVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiL2FldEtwdXBIb0pEdThKUVhhdzdKdlJYbGtIMEViWTV3Zi9nVTVZZlZXOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSjFTTWgvc0FwS1FodzcvRnd1Nk1CUEJRbHJtTmdsZ1ZqOXhCcG4za282YmZTTzhvNkpvWVNHVEh3ZDNCakV5SFk5ZnRCcFptZHZhcmdYazJtTmRqQUE9PSIsImRldmljZVNpZ25hdHVyZSI6ImxpZEpKVTErSGhYR21IQVE1b1BhSHVMV1U1ekRqYTZ6NjRrOExXeXk4WDdzK2RRbWl4MVU2bDQrZDZvZkJLTmNOZVZXUkVqZ2l6eUFBNnFUZFFxWURBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTA3NDY2NDMwNzo0OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmMm5yU3FicVI2Q1E3dkNVRjJzT3liMFY1WkI5QkcyT2NILzRGT1dIMVZ2In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxMjg5MTc5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUh0VCJ9" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By Abdulmalik*",
  author: process.env.PACK_AUTHER || "Abdulmalik",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "AbdulMalik",
  ownername: process.env.OWNER_NAME || "Maleek",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "Malik").toUpperCase(),
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
