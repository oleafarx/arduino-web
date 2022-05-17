const http = require('http');
const express = require('express');
const { Server } = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(__dirname + '/public'));
server.listen(5500, () => console.log('server on port 5500'));

const { SerialPort, ReadlineParser } = require('serialport');

const port = new SerialPort({
  path: 'COM9',
  baudRate: 9600
});

const parser = new ReadlineParser();

port.pipe(parser);

parser.on('open', function () {
  console.log('connection is opened');
});

parser.on('data', function (data) {
  //let temp = parseInt(data, 10);
  console.log("DATA: ",data);
  io.emit('temp', data.toString());
});

parser.on('error', (err) => console.log(err));
port.on('error', (err) => console.log(err));
