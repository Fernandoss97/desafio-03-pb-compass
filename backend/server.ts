import app from "./src/app";
import dotenv from "dotenv";

dotenv.config();

const serverPort = process.env.SERVER_PORT;

app.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});
