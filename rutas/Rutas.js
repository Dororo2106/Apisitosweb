const {Router}=require("express");
const router= Router();

const Movil =require("../data.json");
console.log(Movil);

router.get("/datos", (req,res) => {
    // const {id,Nombre,Correo,Contraseña}= req.params;
                res.json(Movil);
               // console.log(Movil);
   // res.send("ok");
});

router.post('/datosnuevo', (req,res) => {
   const {id,Nombre, Correo, Contraseña}= req.body;
       if( Nombre && Correo && Contraseña)
       {
            const id = Movil.length+1;
            const nuevosdatos = (req.body, id);
            Movil.push(nuevosdatos);
            res.json(Movil);
        }
        else
        {
            res.send("error");
        }

}); 

router.get('/datos/{Correo}', (req,res) => {
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
);

module.exports=router;