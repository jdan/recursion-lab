// https://github.com/kishorsharma/currying-workshopper/blob/92747968d8fd9995ff85bba23a0febd1a0487d28/exercises/binary/exercise.js

const filecheck = require("workshopper-exercise/filecheck");
const path = require("path");

let exercise = require("workshopper-exercise")();

// checks that the submission file actually exists
exercise = filecheck(exercise);

// add setup.
exercise.addSetup(function (mode, callback) {
  this.solutionModule = require(path.join(exercise.dir, "solution.js"));
  // todo: absolute paths
  this.submissionModule = require([process.cwd(), this.args[0]].join("/"));
  process.nextTick(callback);
});

// add a processor.
exercise.addProcessor(function (mode, callback) {
  let pass = true;
  const solutionResult = this.solutionModule.status;
  const submissionResult = this.submissionModule.status;

  if (solutionResult !== submissionResult) {
    exercise.emit(
      "fail",
      "Expected result: " +
        solutionResult +
        " \nActual result: " +
        submissionResult
    );
    pass = false;
  }

  process.nextTick(function () {
    callback(null, pass);
  });
});

exercise.getSolutionFiles = function (callback) {
  callback(null, [path.join(exercise.dir, "solution.js")]);
};

module.exports = exercise;
