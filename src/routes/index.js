import { Router } from "express";

const router = Router();

//Así puedo pasar información del back hacia el front, con la porción de codigo que va despues del index creo un objeto, en este casi es title, ahora tb es importante modificar la variable en este caso en el index.ejs
router.get("/", (req, res) =>
  res.render("index", { title: "First web with Node" })
);

router.get("/about", (req, res) => res.render("about", { title: "about me" }));

router.get("/contact", (req, res) =>
  res.render("contact", { title: "contact me" })
);

export default router;
