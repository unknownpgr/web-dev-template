import express, { json, urlencoded } from "express";
import { RegisterRoutes } from "./infra/routes/routes";

export const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());

// Logging
app.use((req, _, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Register API routes under /api
const apiRouter = express.Router();
RegisterRoutes(apiRouter);
app.use("/api", apiRouter);

const port = process.env.PORT || 80;

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`)
);
