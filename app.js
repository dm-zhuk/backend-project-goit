import express from "express";
import morgan from "morgan";
import cors from "cors";
import sequelize from "./db/sequelize.js";
import contactsRouter from "./routes/contactsRouter.js";
import "dotenv/config";

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use("/api/contacts", contactsRouter);
app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});
app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

app.listen(3000, () => {
  console.log("Server is running. Use our API on port: 3000");
});

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
