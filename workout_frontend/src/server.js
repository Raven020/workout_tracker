var http = require("http");

var data = {"squat" : [10,15,20,25], "bench" : [30,35,40,45], "deadlift" : [50,55,60,65]};

const server = http.createServer((req,res) => {
    console.log("hello");
    // when request comes in to return data return data
    const url = req.url;
    const method = req.method;
    
    if (url === "/"){
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(data));
        res.end();
    }
});



server.listen(8000);

// read in data
// return data
// or recieve data
// write data