import bodyParser from "body-parser";
import express from "express";
import path from "path";
import { postMessages, putMessage } from "./routes/messages";
import { getUser } from "./routes/users";

const app = express();
const port = process.env.PORT || 5000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname , '../frontend', 'build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// use
app.get("/api/users/:id", getUser);

// messages
app.post("/api/messages", postMessages);
app.put("/api/messages/:id", putMessage);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname , '../frontend', 'build/index.html'));
});

// tslint:disable-next-line:no-console
app.listen(port, () => console.log(`Listening on port ${port}`));
