import express from "express";
import Knex from "knex";
import { Model } from "objection";
import knexConfig from "./knexfile";
import Router from "./routes/router";
import path from "path";
import multer from "multer";
import session from "express-session";

const upload = multer();

const PORT = process.env.PORT || 3000;

const app = express();
const knexInstance = Knex(knexConfig.development);

Model.knex(knexInstance);

app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(upload.array("files"));

app.use(
  session({
    secret: "your-secret-key", // Ganti dengan kunci rahasia Anda
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Set ke true jika menggunakan HTTPS
  })
);

app.use(Router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
