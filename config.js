/* Copyright (C) 2020 Yusuf Usta.

WhatsAsena - Yusuf Usta
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// Özel Fonksiyonlarımız
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './whatsasena.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: 'v8.0.0',
    CHANNEL: 'https://t.me/remasterplugin',
    SESSION: process.env.SANA_SESSION === undefined ? '' : process.env.SANA_SESSION,
    ANTİLİNK: process.env.ANTİ_LİNK === undefined ? 'false' : process.env.ANTİ_LİNK,
    AUTOBİO: process.env.AUTO_BİO === undefined ? 'false' : process.env.AUTO_BİO,
    GANSTYLE: process.env.GAN_IMAGE === undefined ? 'https://i.hizliresim.com/loUtAb.jpg' : process.env.GAN_IMAGE,
    LANG: process.env.LANGUAGE === undefined ? 'en' : process.env.LANGUAGE.toUpperCase(),
    ALIVEBTN: process.env.ALIVE_BUTTON === undefined ? 'ᴇɴɢᴀɴᴇʏᴜɴᴅ sᴀɴᴀ ᴍᴡᴏʟ🌝' : process.env.ALIVE_BUTTON,
    ALIVEBTN2: process.env.ALIVE_BUTTON2 === undefined ? 'ᴘᴏᴡᴇʀᴇᴇsʜ🤩' : process.env.ALIVE_BUTTON2,
    ALIVEMSG: process.env.ALIVE_MESSAGE === undefined ? 'default' : process.env.ALIVE_MESSAGE,
    KICKMEMSG: process.env.KICKME_MESSAGE === undefined ? 'default' : process.env.KICKME_MESSAGE,
    BLOCKCHAT: process.env.BLOCK_CHAT === undefined ? false : process.env.BLOCK_CHAT,
    OWNER: process.env.OWNER_NAME === undefined ? 'default' : process.env.OWNER_NAME,
    PHONE: process.env.NUMBER === undefined ? '+917025868709' : process.env.NUMBER,   
    GROUP: process.env.LINK === undefined ? 'https://chat.whatsapp.com/Bq0eHs3UpGJ2BKIHOmy7mk' : process.env.LINK,
    OA_NAME: process.env.DEPLOYER === undefined ? 'Abu,Ser' : process.env.DEPLOYER,
    ALL: process.env.ALL_CAPTION === undefined ? 'Made By Sana Mwol' : process.env.ALL_CAPTION,
    MENTION: process.env.TAG_REPLY === undefined ? '917025994178@s.whatsapp.net' : process.env.TAG_REPLY,
    ADDMSG: process.env.ADD_MESSAGE === undefined ? 'default' : process.env.ADD_MESSAGE,
    PLKS: process.env.THERI_LIST === undefined ? false : process.env.THERI_LIST,
    MUTEMSG: process.env.MUTE_MESSAGE === undefined ? 'default' : process.env.MUTE_MESSAGE,
    BGMFILTER: process.env.BGM_FILTER === undefined ? false : convertToBool(process.env.BGM_FILTER),
    ALL_IMG: process.env.ALL_IMG === undefined ? 'https://i.imgur.com/TR4CYrZ.jpg' : process.env.ALL_IMG,
    ALL_NAME: process.env.ALL_NAME === undefined ? 'sᴀɴᴀ ᴍᴡᴏʟ' : process.env.ALL_NAME,
    DISBGM: process.env.DISABLE_JID_BGM_FILTER === undefined ? false : process.env.DISABLE_JID_BGM_FILTER,
    BAD_KICK: process.env.BAD_KICK === undefined ? 'true' : process.env.BAD_KICK,
    STICKERP: process.env.AUTO_STICKER === undefined ? true : convertToBool(process.env.AUTO_STICKER),
    DISSTICKER: process.env.DISABLE_STICKER === undefined ? false : process.env.DISABLE_STICKER,
    BOT: process.env.BOT_NAME === undefined ? '𝚂𝙰𝙽𝙰 𝙼𝚆𝙾𝙻' : process.env.BOT_NAME,
    NOLOG: process.env.NO_LOG === undefined ? 'true' : process.env.NO_LOG,
    DURATION: process.env.BGM_DURATION === undefined ? '7025994178' : process.env.BGM_DURATION,
    THERI_KICK: process.env.THERI_KICK === undefined ? 'false' : process.env.THERI_KICK,
    SONGD: process.env.SONGD === undefined ? 'ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ꜱᴏɴɢ' : process.env.SONGD,
    SONGU: process.env.SONGU === undefined ? 'ᴜᴘʟᴏᴀᴅɪɴɢ ꜱᴏɴɢ' : process.env.SONGU,
    TALKING_SANA: process.env.TALKING_SANA === undefined ? 'false' : process.env.TALKING_SANA,
    BLOCKMSG: process.env.BLOCK_MESSAGE === undefined ? 'default' : process.env.BLOCK_MESSAGE,
    UNBLOCKMSG: process.env.UNBLOCK_MESSAGE === undefined ? 'default' : process.env.UNBLOCK_MESSAGE,
    UNMUTEMSG: process.env.UNMUTE_MESSAGE === undefined ? 'default' : process.env.UNMUTE_MESSAGE,
    GEAR: process.env.CHANGE_BGM_TO === undefined ? 'one' : process.env.CHANGE_BGM_TO,
    WORKTYPE: process.env.WORK_TYPE === undefined ? 'private' : process.env.WORK_TYPE,
    PROMOTEMSG: process.env.PROMOTE_MESSAGE === undefined ? 'default' : process.env.PROMOTE_MESSAGE,
    DEMOTEMSG: process.env.DEMOTE_MESSAGE === undefined ? 'default' : process.env.DEMOTE_MESSAGE,
    BANMSG: process.env.BAN_MESSAGE === undefined ? 'default' : process.env.BAN_MESSAGE,
    AFKMSG: process.env.AFK_MESSAGE === undefined ? 'default' : process.env.AFK_MESSAGE,
    WEL_GIF: process.env.WEL_GIF === undefined ? 'https://i.imgur.com/nErXUGj.mp4' : process.env.WEL_GIF,
    GIF_BYE: process.env.GIF_BYE === undefined ? 'https://i.imgur.com/Z1jCYGN.mp4' : process.env.GIF_BYE,
    HANDLERS: process.env.HANDLERS === undefined ? '^[.!;]' : process.env.HANDLERS,
    TAGPLK: process.env.TAG_HEADER === undefined ? 'Note this' : process.env.TAG_HEADER,
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    YAK: process.env.YAK === undefined ? '918921483992,0' : process.env.YAK,
    BRANCH: 'master',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './whatsasena.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ? false : process.env.REMOVE_BG_API_KEY,
    NO_ONLINE: process.env.NO_ONLINE === undefined ? true : convertToBool(process.env.NO_ONLINE),
    SUDO: process.env.SUDO === undefined ? false : process.env.SUDO,
    DEBUG: DEBUG,
    WITAI_API: "TEYMELA6DMC4XB5YM3SPTTQWUUIBKURG",
    SUPPORT: "905524317852-1612300121",
    SUPPORT2: "917012074386-1631435717",
    SUPPORT3: "905511384572-1621865274",
    SUPPORT4: "905511384572-1625319286"
};