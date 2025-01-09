require('dotenv').config()

module.exports = {
    development: {
        username: process.env.POSTGRES_USER || 'postgres',
        password: process.env.POSTGRES_PASSWORD || 'rootroot',
        database: process.env.POSTGRES_DATABASE || 'to-do-project_development',
        host: process.env.POSTGRES_HOST || '127.0.0.1',
        dialect: 'postgres',
        dialectOptions: { 
            ssl: { 
                require: true, 
            }}},
      test: {
        username: process.env.POSTGRES_USER || 'postgres',
        password: process.env.POSTGRES_PASSWORD || 'rootroot',
        database: process.env.POSTGRES_DATABASE || 'to-do-project_test',
        host: process.env.POSTGRES_HOST || '127.0.0.1',
        dialect: 'postgres',
        dialectOptions: { 
            ssl: { 
            require: true, 
            },
        }},
      production: {
        username: process.env.POSTGRES_USER || 'postgres',
        password: process.env.POSTGRES_PASSWORD || 'rootroot',
        database: process.env.POSTGRES_DATABASE || 'to-do-project_production',
        host: process.env.POSTGRES_HOST || '127.0.0.1',
        dialect: 'postgres',
        dialectOptions: { 
            ssl: { 
                require: true, 
            },
        },
        }  
}