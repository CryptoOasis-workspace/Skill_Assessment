module.exports = (io) => {
  io.on("connection", (socket) => {
    socket.on("drawing", (data) => {
      socket.broadcast.emit("drawingResponse", data);
    });
    socket.on('mouseMoving', (data) => {
      socket.broadcast.emit("mouseMoving", data);
      console.log(data)
    })
  });
};
