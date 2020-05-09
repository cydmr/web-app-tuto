const express = require("express");
const path = require("path");

const app = express();

const publicDirPath = path.join(__dirname, "..", "public");
// app.com
// app.com/help
// app.com/about

app.use(express.static(publicDirPath));

app.get("/", (req, res) => {
  res.send("<h1>MErhaba, ceyda, web-server app uygulaması, çalışması</h1>");
});

//app.use("/help", express.static())

app.get("/help", (req, res) => {
  res.send(
    (ad = { forecast: "cloudy, ceyda, help page", geolocation: "bolu" })
  );
  console.log(ad.type());
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "Address not found!",
    });
  }

  res.send({
    address: req.query.address,
  });
});

app.get("/about", (req, res) => {
  res.send("<h1> ceyda ceyda cceycey </h1>");
});

app.get("*", (req, res) => {
  res.send("My 404 page, you see");
});
app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
