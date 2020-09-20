require("dotenv").config();

module.exports = {
  apps: [
    {
      name: "",
      script: "dist/server.js",
      watch: false,
      env: {
        NODE_ENV: "development",
        PORT: process.env.PORT,
        SHOULD_WRITE_LOGS: process.env.SHOULD_WRITE_LOGS,
      },
      env_staging: {
        NODE_ENV: "staging",
        PORT: process.env.PORT,
        SHOULD_WRITE_LOGS: process.env.SHOULD_WRITE_LOGS,
      },
      en_production: {
        NODE_ENV: "production",
        PORT: process.env.PORT,
        SHOULD_WRITE_LOGS: process.env.SHOULD_WRITE_LOGS,
      },
    },
  ],

  deploy: {
    development: {
      user: "xxxxx",
      host: "xx.xxx.xxx.xx",
      ref: "origin/master",
      repo: "git@xxxxxx",
      path: "/./../../../",
      "post-deploy":
        "npm install && node_modules/.bin/tsc && pm2 reload ecosystem.config.js --env devlopment --update-env",
    },
    staging: {
      user: "xxxxx",
      host: "xx.xxx.xxx.xx",
      ref: "origin/master",
      repo: "git@xxxxxx",
      path: "/./../../../",
      "post-deploy":
        "npm install && node_modules/.bin/tsc && node_modules/.bin/sequelize --env staging db:migrate && pm2 reload ecosystem.config.js --env staging --update-env",
    },

    production: {
      user: "xxxxx",
      host: "xx.xxx.xxx.xx",
      ref: "origin/master",
      repo: "git@xxxxxx",
      path: "/./../../../",
      "post-deploy":
        "npm install && node_modules/.bin/tsc && node_modules/.bin/sequelize --env production db:migrate && pm2 reload ecosystem.config.js --env production --update-env",
    },
  },
};
