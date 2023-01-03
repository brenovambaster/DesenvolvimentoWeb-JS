
//  maneira mais potente e flexível  de fazer
const schedule = require('node-schedule');
const tarefa1 = schedule.scheduleJob('*/5 * * * * *', () => {
    console.log("executou " + new Date().getSeconds())
});

// ~ função nativa no js no front-end
setTimeout(() => {
    tarefa1.cancel()
    console.log("Cancelando a terafa1")

}, 10000)

/**
 * ^ Outras maneiras de trabalhar com agendadores
 * ^ Funções nativas do JS
 * 
 *  setTimeout(() => {}, timeout);
 *  setImmediate(() => { })
 *  setInterval(() => {
 * 
 */

