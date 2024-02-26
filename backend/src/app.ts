import express, { json, urlencoded } from "express";
import { RegisterRoutes } from "./infra/routes/routes";

export const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());

RegisterRoutes(app);

const port = process.env.PORT || 80;

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`)
);
