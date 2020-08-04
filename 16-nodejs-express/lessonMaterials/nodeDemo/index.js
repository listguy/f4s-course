const http = require('http');
const { readFileSync } = require('fs');

let server = http.createServer(function(request, response){
    // if(request.url === '/hello' && request.method === 'GET'){
    //     let file = readFileSync('./home.html', 'utf8');
    //     response.write(file);
    //     response.end(); 
    // }
    if(request.url === '/bye'){
        response.write('bye');
        response.end(); 
    }
});
 
server.listen(3000);