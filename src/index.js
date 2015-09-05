// Using ES2015 imports in this file is impossible, because imports bubble to
// the top and thus the `dotenv.load()` call gets moved down, which makes
// `process.env` unavailable at the top level of some of the imported files.

require("dotenv").load();
require("./init")();
