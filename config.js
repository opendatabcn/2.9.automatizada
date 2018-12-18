module.exports = {

    knimePath: "E:/Program Files/KNIME/knime.exe",
    params: [
        "-nosplash",
        "-reset",
        "-application",
        "org.knime.product.KNIME_BATCH_APPLICATION",
        "-workflowDir=C:/Users/knime-workspace/bicing"
    ],
    cronTime:"*/01 * * * *"  // 1 minute


}



// https://www.npmjs.com/package/node-cron