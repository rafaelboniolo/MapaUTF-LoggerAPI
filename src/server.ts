import app from "./app";

console.log("Express listening on port 3001");
app.listen(process.env.PORT||3001);