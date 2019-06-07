const Logger = require('./logger');
var logger = new Logger();

const EventEmitter = require('events');

logger.on('Loggercalled!',function(){
    console.log("Listener called!");
});

logger.log("Hello message!");