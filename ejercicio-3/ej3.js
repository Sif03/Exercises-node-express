const express = require("express");
const app = express();

app.use(express.json());

const products = [
  {
    description: "Productos",
    items: [
      { id: 1, nombre: "Taza de Harry Potter", precio: 300 },
      { id: 2, nombre: "FIFA 22 PS5", precio: 1000 },
      { id: 3, nombre: "Figura Goku Super Saiyan", precio: 100 },
      { id: 4, nombre: "Zelda Breath of the Wild", precio: 200 },
      { id: 5, nombre: "Skin Valorant", precio: 120 },
      { id: 6, nombre: "Taza de Star Wars", precio: 220 },
    ],
  },
];

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
  }
);

// //? Crear endpoint para poder actualizar un producto
// app.put("/id/:id",(req,res)=>{
//   const found = products.some(product => product.id == req.params.id)
//   if(found){
//       products.forEach(product=>{
//           if(product.id == req.params.id){
//               product.nombre = req.body.nombre ? req.body.nombre: product.nombre,
//               product.precio = req.body.precio ? req.body.precio: product.precio
//               res.send(product)
//           }
//       })
//   }else{
//       res.status(404).send({msg:`Nombre with id ${req.params.id} not found`})
//   }
// })

// app.put("/id/:id", (req, res) => {
//   const found = products.some((products) => items.id == req.params.id);
//   if (found) {
//     items.forEach((items) => {
//       if (items.id == req.params.id) {
//         (items.nombre = req.body.nombre ? req.body.nombre : items.name),
//           (items.precio = req.body.precio ? req.body.precio : items.precio);
//         res.send(items);
//       }
//     });
//   } else {
//     res.status(404).send({ msg: `Nombre with id ${req.params.id} not found` });
//   }
// });



app.listen(3000, () => console.log("Servidor levantado en el puerto 3000"));
