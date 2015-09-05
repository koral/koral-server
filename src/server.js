import net from "net";

const PORT = process.env.PORT;

export default {
  listen(callback) {
    net.createServer((socket) => {
      console.log("Connection...");

      // Start with an empty data buffer
      var data = new Buffer(0);

      socket.on("data", (part) => {
        data = Buffer.concat([data, part]);
      });

      socket.on("end", () => {
        var size = data.readUInt16BE(0);

        console.log("The size of the file name is:", size);

        var name = data.toString("utf8", 2, size + 2);

        console.log("The filename is:", name);

        var file = data.slice(size + 2);

        callback({ name, file });
      });
    }).listen(PORT, () => {
      console.log("Listening!");
    });
  },
};
