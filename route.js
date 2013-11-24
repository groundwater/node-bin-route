#!/usr/bin/env node

var sock = require('src-sockios');

var args = process.argv;

var ip = args[2];

if(!ip) {
  console.log('Please Enter an IP Address');
  process.exit(2);
}

var r2 = sock.setDefaultGateway(ip);

if( r2!==0 ){
  console.log('Could Not Set Default gateway');
  process.exit(r2);
}
