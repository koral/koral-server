import fs from "fs";
import path from "path";

import server from "./server";

export default function () {
  fs.mkdir("stuff", () => {
    server.listen((entry) => {
      console.log("Got an entry with the name", entry.name);
      console.log("Will write");

      fs.writeFile(path.join("stuff/", entry.name), entry.file, () => {
        console.log("Written!");
      });
    });
  });
}
