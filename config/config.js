require('dotenv').config();

module.exports = {
    development: {
        username: process.env.POSTGRES_USER || 'postgres',
        password: process.env.POSTGRES_PASSWORD || 'rootroot',
        database: process.env.POSTGRES_DATABASE || 'to-do-project_development',
        host: process.env.POSTGRES_HOST || '127.0.0.1',
        dialect: 'postgres',
        port: process.env.PORT|| 5432,
        dialectOptions: { 
            ssl: { 
                require: true,
            }
        }
    },
      test: {
        username: process.env.POSTGRES_USER || 'postgres',
        password: process.env.POSTGRES_PASSWORD || 'rootroot',
        database: process.env.POSTGRES_DATABASE || 'to-do-project_test',
        host: process.env.POSTGRES_HOST || '127.0.0.1',
        dialect: 'postgres',
        port: process.env.PORT || 5432,
        dialectOptions: { 
            ssl: { 
                require: true, 
            }
        }
    },
      production: {
        use_env_variable: process.env.POSTGRES_URL,
        dialect: 'postgres',
        dialectOptions: { 
            ssl: { 
                require: true, 
                rejectUnauthorized: false
            }
        }
    }  
}