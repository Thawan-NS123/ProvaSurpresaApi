import 'dotenv/config'
import {somar, dobro, media, cinema} from './services.js'

import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());
server.use(express.json());

server.get ('/dobro/:numero', (req, resp) => {
   try{
    const numero= req.params.numero;
    const a= dobro(numero);

    resp.send({
        dobro:a,
    })

   } catch{
       resp.status(404).send({
           erro: err.message
       })
   }
})


server.get('/somar', (req, resp) => {
   try{
    const a= Number (req.query.a);
    const b= Number (req.query.b);

    const c= somar(a , b);

    resp.send ({
        soma: c,
    })
   }catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})



server.post('/somar', (req,resp) => {
    try{
        const {a, b} = req.body;
    
        const x= somar (a, b);

    resp.send({
        soma: x,
    })
    }catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})




server.get ('/dia2/corprimaria/:cor', (req, resp) => {
    try{
            let cor= req.params.cor;
            let primaria= (cor=='amarelo' || cor=='azul' || cor=='vermelho');
        
            resp.send({
            primaria:primaria,
        })
    }catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.get('/temperatura', (req, resp) => {
    try{
        let temp= req.query.temp;
    
    let febre= (temp>=37)
    
    resp.send({
        febre:febre,
    })
    }catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})




server.post ('/media', (req, resp) => {
    try{
        const {notas: {a, b, c}} = req.body;
  

    const x= media(a , b , c);

    resp.send({
        media:x,
    })
    }catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.post('/dia2/cinema', (req, resp) => {
    try{
        const {int, meia, dia, nac} = req.body;
   

    const x= cinema(int, meia);

    resp.send({
        total: x,

    })
    }catch(err){
    resp.status(404).send({
        erro: err.message
    })
}
})



server.listen(process.env.PORT,
    () => console.log (`API online na porta ${process.env.PORT}`));

