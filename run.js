var connect = require('connect')
    , os = require('os')
    , serverSignature = 'Node.js / Debian ' + [os.type(), os.release(), os.arch()].join(' ') + ' / Raspberry Pi';
console.log(serverSignature,os.networkInterfaces().wlan0);
console.log('running... CTRL+C to stop');
return connect.createServer(connect.static(__dirname)).listen(8081);
