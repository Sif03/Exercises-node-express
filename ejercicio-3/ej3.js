const express = require("express");
const app = express();

app.use(express.json());

const products = [
      { id: 1, nombre: "Taza de Harry Potter", precio: 300 },
      { id: 2, nombre: "FIFA 22 PS5", precio: 1000 },
      { id: 3, nombre: "Figura Goku Super Saiyan", precio: 100 },
      { id: 4, nombre: "Zelda Breath of the Wild", precio: 200 },
      { id: 5, nombre: "Skin Valorant", precio: 120 },
      { id: 6, nombre: "Taza de Star Wars", precio: 220 },
];

const {description, items} = products
console.log(items)

//?  Al llamar a localhost:3000/products se debe mostrar el siguiente JSON:
app.get("/", (req, res) => {
  res.send(products);
});

//? Crear endpoint para poder crear un producto nuevo
app.post("/newProduct", (req, res) => {
  const newProduct = {
    id: products.length + 1,
    nombre: req.body.nombre,
    precio: req.body.precio,
  };
  products.push(newProduct);
  res.status(201).send({ products });
});

//? Crear endpoint para poder actualizar un producto
app.put("/id/:id", (req, res) => {
  const found = products.some((product) => product.id == req.params.id); //para saber si existe lo que busco
  if (found) {
    products.forEach((product) => {
      if (product.id == req.params.id) {
        (product.nombre = req.body.nombre ? req.body.nombre : product.nombre),
          (product.precio = req.body.precio ? req.body.precio : product.precio);
        res.send(product);
      }
    });
  } else {
    res.status(404).send({ msg: `Product with id ${req.params.id} not found` });
  }
});

// ! No encuentra el id nunca... Está dentro de un array literal y no sé como llegar hasta él.


//? DELETE productos en base al id
app.delete("/id/:id", (req, res) => {
  const found = items.some((items) => items.id == req.params.id);
  if (found) {
    //Elimino si encuentro
    res.send(items.filter((items) => items.id !== req.params.id));
  } else {
    res.status(404).send({ msg: `Product with id ${req.params.id} not found` });
  }
});

//! Mismo error de antes, la formula creo que es correcta. Pero no accede porque no encuentra la ruta.
//! He probado a consolear el products.id y me devuelve undefinded cuando 
//! en todos los ejemplos que he visto les devuelve los datos que contiene...


app.listen(3000, () => console.log("Servidor levantado en el puerto 3000"));
