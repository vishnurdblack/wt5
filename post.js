const http = require('http');
const express=require("express");
const app=express();
const collection=require("./mongodb")
const qs = require('querystring');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', async() => {
      const formData = qs.parse(body);
      res.writeHead(600, {'Content-Type': 'text/html'});
      console.log(`Name: ${formData.Name}\nEmail: ${formData.Email}  \n `);
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`
      not correct
    `);
  }
});

server.listen(5004, () => {
  console.log('Server running on port 5004');
});
