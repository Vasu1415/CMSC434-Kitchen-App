const http = require('http'); 
const bodyParser = require("body-parser");  
const express = require('express'); 
const app = express();    
const path = require("path"); 

process.stdin.setEncoding("utf8");

if (process.argv.length != 3) { 
	process.stdout.write(`Usage: node app.js portNumber\n`); 
	process.exit(1); 
}

const portNumber = process.argv[2];
console.log(`Web server started and running at http://localhost:${portNumber}`); 
process.stdout.write(`Stop to shutdown the server: `);
process.stdin.on("readable", function (){ 
    let dataInput = process.stdin.read(); 
	if (dataInput != null){ 
	    let command = dataInput.trim(); 
	    if (command === "stop"){ 
	        process.stdout.write("Shutting down the server\n"); 
	        process.exit(0); 
	    }else{
            process.stdout.write("Invalid Command\n");
            process.exit(1);
        }
    }
});

app.get("/", (request, response) => { 

	response.render("main_page",{
        link1: '/text',
        link2: '/choices',
        link3: '/todo',
        link4: '/profile',
        link5: '/colors',
        link6: '/lower_right',
        link7: "/"
    });  
});

app.set("views", path.resolve(__dirname, "templates"));  
app.set("view engine", "ejs"); 
app.use(bodyParser.urlencoded({extended:false}));

app.get("/text", (request,response) => {
    response.render("text");
});

app.get("/choices",(request,response) =>{
    response.render("choices");
});

app.get("/todo",(request,response) => {
    response.render("todo");
});

app.get("/profile",(request,response)=>{
    response.render("profile");
});

app.get("/colors",(request,response)=>{
    response.render("colors");
});

app.get("/lower_right",(request,response)=>{
    response.render("lower_right");
});

app.listen(portNumber);