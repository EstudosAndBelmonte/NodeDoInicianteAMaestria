const EventEmmiter = require('events')
const eventEmitter = new EventEmmiter()

eventEmitter.on('start', () => {
    console.log('durante')
})

console.log('Antes')
eventEmitter.emit('start')
console.log('Depois')