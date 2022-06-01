import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
    development : {
        username : process.env.DB_USERNAME || 'MySQL your id',
        password : process.env.DB_PASSWORD || "MySQL your password",
        database : process.env.DB_DBNAME || 'your porject database name',
        host : process.env.DB_HOST || 'your host number',
        port : process.env.DB_PORT || 'your port number',
        dialect : "mysql"
    }
} 