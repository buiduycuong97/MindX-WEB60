const express = require("express");
const { v4: uuidv4 } = require("uuid");
const mangaRouter = express.Router();

const manga = [
  { id: 1, name: "Naruto" },
  { id: 2, name: "Doremon" },
  { id: 3, name: "Inuyasha" },
];

mangaRouter.get("/", (req, res) => res.send(manga));

mangaRouter.post("/", (req, res) => {
  const newManga = {
    id: uuidv4(),
    name: req.body.name,
  };
  manga.push(newManga);
  res.send(manga);
});

mangaRouter.delete("/:id", (req, res) => {
  const cloneManga = manga.filter((item) => item.id != req.params.id);
  res.send(cloneManga);
});

mangaRouter.put("/:id", (req, res) => {
  manga.forEach((item) => {
    if (item.id == req.params.id) {
      item.name = req.body.name;
    }
  });
  res.send(manga);
});

module.exports = { mangaRouter: mangaRouter };
