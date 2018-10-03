var http = require("http");
var options = {
    host: "8080",
    path: "",
    method: "POST",
    headers: {
        "Content-Type": "value"
   	}
};
var req = http.request(options)
req.write("5")