const io = require("socket.io-client");
const socket = io("https://www.windows93.net:8088", {
	forceNew: true,
	transportOptions: {
		polling: {
			extraHeaders: {
				"Accept": "*/*",
				"Accept-Encoding": "identity",
				"Accept-Language": "*",
				"Cache-Control": "no-cache",
				"Connection": "keep-alive",
				"Cookie": "",
				"Host": "www.windows93.net",
				"Origin": "http://www.windows93.net",
				"Pragma": "no-cache",
				"Referer": 'http://www.windows93.net/trollbox/index.php',
				"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36"
			}
		}
	}
});

        socket.emit("user joined", "Windowsbloxbot [w!]", "green", "", "");

        socket.on("message", function(data) {

            if (data.msg == "w!hello") {
                socket.send("Hello, idiot.")
            }

            if (data.msg == "w!owner") {
                socket.send("Its Windows.")
            }

            if (data.msg == "w!windows") {
                socket.send("Windows is the best OS")
            }

            if (data.msg == "w!help") {
                socket.send("Ask windows.")
            }

            if (data.msg == "w!filly") {
                socket.send("He's a legend.")
            }

            if (data.msg == "w!bimo") {
                socket.send("No for education AI slopt.")
            }

            if (data.msg == "w!what") {
                socket.send("I'm bored.")
            }

            })