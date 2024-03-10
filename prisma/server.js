const express = require("express");
const app = express();

const PORT = 3000;

// Body parsing
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Logging
app.use((req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
  });

  // Routing
  app.use("/api/", require("./api/.js"));

  // Error handling
app.use((err, req, res, next) => {
    const status = err?.status ?? 500;
    const message = err?.message ?? "Internal server error";
    res.status(status).send(message);
  });


app.listen(PORT, ()=> {
    console.log(`Listening on port ${PORT}`);
});