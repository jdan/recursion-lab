#!/usr/bin/env node

const workshopper = require("workshopper");
const path = require("path");

workshopper({
  name: "recursion-lab",
  title: "Recursion Lab",
  subtitle: "Learn recursion from first principles",
  appDir: __dirname,
  menuItems: [],
  exerciseDir: path.join(__dirname, "exercises"),
});
