var gulp = require("gulp");
var kexec = require("kexec");
var nodemon = require("gulp-nodemon");
var child = require("child_process");

var CONFIG = {
  PATHS: {
    GULPFILE:    "gulpfile.js",
    SRC:         "./src",
    DEST:        "./lib",
    ENTRY_POINT: "./lib/index.js",
  },
};

gulp.task("default", ["precompile"]);

gulp.task("precompile", function () {
  var cmd = [
    "babel",
    CONFIG.PATHS.SRC,
    "--out-dir",
    CONFIG.PATHS.DEST,
  ];

  child.execSync(cmd.join(" "));
});

gulp.task("watch", ["default"], function () {
  gulp.watch(CONFIG.PATHS.GULPFILE, ["reload"]);

  nodemon({
    script: CONFIG.PATHS.ENTRY_POINT,
    watch:  CONFIG.PATHS.SRC,
    tasks:  ["precompile"],
  });
});

gulp.task("reload", function () {
  console.log("Reloading gulpfile.js");
  kexec(process.argv.join(" "));
});

gulp.task("dev", ["watch"]);
