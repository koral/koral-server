import net from "net";

const PORT = process.env.PORT;

var server = net.createServer((c) => {
  console.log("Connection from client");

  c.on("end", () => console.log("client disconnected"));
});

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
