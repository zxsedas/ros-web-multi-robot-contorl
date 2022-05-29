var http = require('http'),
    dgram = require('dgram'),
    socketio = require('socket.io');

var app = http.createServer(handleRequest)
const io = socketio(app,{
    cors:{
        origin: "*",
        methods: ['GET','POST']
    }
})

// io.on('connection', (socket)=>{
//     console.log(`user ${socket.id} is connected.`)
// })

let socket = dgram.createSocket('udp4');

socket.on('message', function(content, rinfo) {
    let con_str = content.toString()
    // console.log('got message', content.toString(), 'from', rinfo.address, rinfo.port);
    // console.log(`robot${con_str[0]}: `)
    io.sockets.emit(`img${con_str[0]}`, con_str.slice(1)); 
});

function handleRequest(req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://60.60.0.2:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    res.writeHead(200, {'content-type': 'text/html'});
    res.end("<!doctype html> \
        <html><head> \
        <script src='/socket.io/socket.io.js'></script> \
        <script> \
            var socket = io.connect('localhost', {port: 8000}); \
            socket.on('udp message', function(message) { console.log(message) }); \
        </script></head></html>");
}

socket.bind(7000, '0.0.0.0');
app.listen(8000,'60.60.0.1');

