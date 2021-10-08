
npm install --save sequelize
sequelize init >> it will create config, migrate, seeder, model folder in our project

Creating model:
npx sequelize-cli model:generate --name Channel --attributes title:string,content:text
