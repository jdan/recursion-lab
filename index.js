#!/usr/bin/env node

// TODO: https://github.com/kishorsharma/currying-workshopper/blob/master/exercises/binary/exercise.js

const workshopper = require("workshopper");
const path = require("path");

workshopper({
  name: "recursion-lab",
  title: "Recursion Lab",
  subtitle:
    "Learn recursion from first principles, and some interesting data structures",
  appDir: __dirname,
  menuItems: [],
  exerciseDir: path.join(__dirname, "exercises"),
});
