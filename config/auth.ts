import * as dotenv from 'dotenv';
dotenv.config();

const config = {
    accessSecret: process.env.JWT_ACCESSKEY || "your accessSecretKey",
    refreshSecret: process.env.JWT_REFRESHKEY || "your refreshSecretKeyaccessSecretKey",
    jwtExpiration: process.env.JWT_ACCESSTIME || "your jwtAccessExpiration",        
    jwtRefreshExpiration: process.env.JWT_REFRESHTIME || "your jwtRefreshExpiration", 
}

export default config;