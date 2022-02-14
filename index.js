#!/usr/bin/env node
const debounce = require("lodash.debounce");
const chokidar = require("chokidar");
const program = require("caporal");

const start = debounce(() => {console.log("starting...");}, 100);

chokidar
    .watch(".")
    .on("add", start)
    .on("change", () => {console.log("File changed")})
    .on("unlink", () => {console.log("File unlinked")})