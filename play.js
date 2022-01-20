
// const connect = require('./client');



// setupInput()
// console.log("Connecting ...");
// connect.connect();

const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
const connection = connect();

setupInput(connection);