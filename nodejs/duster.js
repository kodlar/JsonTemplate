/**
 * Created by okeskiner on 15.12.2015.
 */
var duster = require('dusterjs');
var rimraf = require('rimraf');
var fileFinderAndRemover = require('find-remove');

inputPaths = [];
//homeInputPaths = [];

inputPaths.push("../dust/templates");
outputPath = "../js";

var result = fileFinderAndRemover(outputPath, { extensions: ['.js'] });


duster.watch(inputPaths, outputPath);
