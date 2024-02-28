import  Express  from "express";

const servidor = Express()
const puerto = 3000

servidor.get("/",(solicitud, respuesta)=>{
  respuesta.json({messsege: "works!"})
})

servidor.listen(puerto, ()=>{
  console.log(`servidor ejecutandose en el puerto: ${puerto}`);
})