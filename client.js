const net = require("net");
const { IP, PORT } = require("./constants");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    // host: "localhost",// IP address here,
    // port: 50541// PORT number here,
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log('we Connected');
  });

  conn.on('connect', () => {
    conn.write("Name: PBB");
  });

  // conn.on('connect', () => {
  //   conn.write("Move: up");
  // });

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = { connect };