const {Router}=require('express');
const router=Router();
const _ = require('underscore');
const series = require('../sample.json');

router.get('/series',(req,res)=>{
    res.json(series);
});

router.post('/series', (req, res)=>{
    const{nombre, temporadas,año}=req.body;
    if(nombre && temporadas && año){
        const id= series.length + 1;
        const newSerie = {...req.body,id};
        series.push(newSerie);
        res.json(series);
    }else{
        res.status(500).json({error:'Hubo un error'});
    }
});

router.put('/id', (req, res)=>{
    const {id}= req.params;
    const {nombre, temporadas, año}=req.body;
    if(nombre && temporadas && año){
        _.each(series,(serie,i)=>{
            if(serie.id== id){
                serie.nombre=nombre;
                serie.temporadas=temporadas;
                serie.año=año;
            }
        });
        res.json(series);
    }else{
        res.status(500).json({error:'Hubo un error'});
    }
});




module.exports=router;