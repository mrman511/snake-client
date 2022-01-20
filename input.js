let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  // your code here
  if (key === '\u0003') {
    process.exit();
  }

  else if (key === 'w') {
     connection.write("Move: up")
    //console.log(connection);
  }
  
  else if (key === 'd') {
    connection.write("Move: right")
   //console.log(connection);
  }

  else if (key === 's') {
    connection.write("Move: down")
   //console.log(connection);
  }

  else if (key === 'a') {
    connection.write("Move: left")
 //console.log(connection);
  }

  else if (key === 'b') {
    connection.write("Say: Thats what he said")
  }

  else if (key === 'g') {
    connection.write("Say: Thats what she said")
  }

  else if (key === 'n') {
    connection.write("Say: Nope!")
  }

  else if (key === '1') {
    connection.write("Say: I win")
  }

};

module.exports = {
  setupInput,
}