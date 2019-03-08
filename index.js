if (process.platform === "win32") {
    var rl = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout
    })

    rl.on("SIGINT", function () {
        process.emit("SIGINT")
    })
}

module.exports = function (work) {
    process.on("SIGINT", work)
    process.on("SIGTERM", work)
}