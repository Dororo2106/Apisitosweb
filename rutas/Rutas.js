const {Router}=require("express");
const router= Router();

const Movil =require("../data.json");
console.log(Movil);

router.get("/datos", (req,res) => {
     const {id,Nombre,Correo,Contraseña}= req.params;
   //   Movil.forEach(Movil =>
    //    {
   // if(Movil.id == id)
     //       {
                res.json(Movil);
     //       }
//});
    res.send("ok");
        console.log(id);
});

router.get('/IP/{Nombre}', (req,res) => {
   const {Nombre}= req.params;
   Movil.forEach(Movil =>{
       if(Movil.Nombre == Nombre){
         res.json(Movil);
        }
    });

   console.log(Nombre);
}); 

router.get('/IP/Correo', (req,res) => {
    const {Correo}= req.params;
    Movil.forEach(Movil =>{
        if(Movil.Zona == Zona){
            res.json(Movil);
        }
    });

    console.log(Correo);
}); //Obtener Informacion De El Usuario.


router.post('/agentes', (req, res) => 
    {
       const{Nombre,Fecha,Porcentaje}=req.body;
        if(Nombre && Fecha && Porcentaje)
        {
            const id = Movil.length +1;
            const nuevoagente = {...req.body,id};
            console.log(nuevoagente);
            Movil.push(nuevoagente);
            res.send(Movil);
        }
        else
        {
            res.send("Error")
        }
        res.send("ok");
    }   
); //Agregar un nuevo agente.


router.post('/registro', (req, res) => 
    {
        const{Fecha,Registro, RegistroActual}=req.body;
        if(Fecha && Registro && RegistroActual)
        {
            const id = Movil.length +1;
            const nuevoregistro = {...req.body,id};
            console.log(nuevoregistro);
            Quejas.push(nuevoregistro);
            res.send(Movil);
        }
        else
        {
            res.send("Error")
        }
        res.send("ok");
    }   
); //Registra una nueva queja en el servidor

module.exports=router;