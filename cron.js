const Config = require("./config");
const exec = require("child_process").execFile;
const cron = require("node-cron");



function cronService() {

    return new Promise((resolve, reject) => {

        exec(Config.knimePath,
            Config.params, (error, data) => {

                if (error) {

                    reject(new Error(`Error - ${error}`));
                }

                resolve(data);

            }
        );

    });

}



cron.schedule(Config.cronTime, () => {

    console.log(`running a task every ${Config.cronTime}minute:${new Date()}`);
    cronService().then(response => {

        console.log (`OK: ${response}`)

    }).catch (error => {

        console.log (`Error: ${error}`);

    });
});
