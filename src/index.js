import express, { json } from "express";
import cors from "cors";
import data from "./store.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// korisnik
app.get("/korisnik", (req, res) => {
  res.json(data.korisnik);
});

// stanje racuna
app.get("/korisnik/stanjeRacuna", (req, res) => {
  res.json(data.stanjeRacuna);
});

// prihodi
app.get("/korisnik/prihodi", (req, res) => {
  res.json(data.prihodi);
});
app.get("/korisnik/prihodi/:idPrihod", (req, res) => {
  res.json(data.jedanPrihod);
});

app.post("/korisnik/upisiPrihod", (req, res) => {
  console.log("Novi prihod: ", req.body);
  res.setHeader("Location", "/korisnik/prihodi/3");
  res.statusCode = 201;
  res.send(req.body);
});

app.put("/korisnik/izmijeniPrihod/:idPrihod", (req, res) => {
  let data = req.body; // upisujemo izmjene za određeni prihod // pretvorimo u string
  data = JSON.stringify(data);

  if (data.length === 0 || data.lenght === 1 || data.length === 2) {
    // kako optimizirati; json.lenght je uvijek 2
    res.statusCode = 404;
    res.json("There are parameters missing");
  } else {
    console.log("Izmjenjen je prihod sa id-em:", req.params.idPrihod);
    res.setHeader("Location", "/korisnik/prihodi/3");
    res.statusCode = 201;
    res.send();
  }
});

app.delete("/korisnik/izbrisiPrihod/:idPrihod", (req, res) => {
  console.log("Obrisan prihod s id-em:", req.params.idPrihod);
  res.statusCode = 200;
  res.send();
});

// rashodi
app.get("/korisnik/rashodi", (req, res) => {
  res.json(data.rashodi);
});
app.get("/korisnik/rashodi/:idRashod", (req, res) => {
  res.json(data.jedanRashod);
});

app.post("/korisnik/upisiRashod", (req, res) => {
  console.log("Novi rashod: ", req.body);
  res.setHeader("Location", "/korisnik/rashodi/14");
  res.statusCode = 201;
  res.send(req.body);
});

app.put("/korisnik/izmijeniRashod/:idRashod", (req, res) => {
  let data = req.body; // upisujemo izmjene za određeni rashod // pretvorimo u string
  data = JSON.stringify(data);

  if (data.length === 0 || data.lenght === 1 || data.length === 2) {
    // kako optimizirati; json.lenght je uvijek 2
    res.statusCode = 404;
    res.json("There are parameters missing");
  } else {
    console.log("Izmjenjen je rashod sa id-em:", req.params.idRashod);
    res.setHeader("Location", "/korisnik/rashod/14");
    res.statusCode = 201;
    res.send();
  }
});

app.delete("/korisnik/izbrisiRashod/:idRashod", (req, res) => {
  console.log("Obrisan rashod s id-em:", req.params.idRashod);
  res.statusCode = 200;
  res.send();
});

// stednja
app.get("/korisnik/stednja", (req, res) => {
  res.json(data.stednja);
});
app.get("/korisnik/stednja/:idStednja", (req, res) => {
  res.json(data.jednaStednja);
});

app.post("/korisnik/upisiStednju", (req, res) => {
  console.log("Nova stednja: ", req.body);
  res.setHeader("Location", "/korisnik/stednja/222");
  res.statusCode = 201;
  res.send(req.body);
});

app.put("/korisnik/izmijeniStednju/:idStednja", (req, res) => {
  let data = req.body; // upisujemo izmjene za određenu stednju // pretvorimo u string
  data = JSON.stringify(data);

  if (data.length === 0 || data.lenght === 1 || data.length === 2) {
    // kako optimizirati; json.lenght je uvijek 2
    res.statusCode = 404;
    res.json("There are parameters missing");
  } else {
    console.log("Izmjenjena je stednja sa id-em:", req.params.idStednja);
    res.setHeader("Location", "/korisnik/stednja/222");
    res.statusCode = 201;
    res.send();
  }
});

app.delete("/korisnik/izbrisiStednju/:idStednja", (req, res) => {
  console.log("Obrisana stednja s id-em:", req.params.idStednja);
  res.statusCode = 200;
  res.send();
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
