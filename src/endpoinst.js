import{ Router } from 'express'

import {dobro, somar} from './service.js'





const server = Router();

server.get('/dobro/:numero', (req, resp)=>{
    try {
        const numero = Number(req.params.numero);

        const d = dobro(numero);
    
        
          resp.send({
              dobro:d
          });

    } catch (err) {
        resp.status(404).send({
            erro:err.message
        })
    }
})

server.get('/somar', (req, resp)=>{
    try {
        const a = Number(req.query.a);
        const b = Number(req.query.b);

        const x = somar(a, b);
    
        resp.send({
            soma:x
        })
    } catch (err) {
        resp.status(404).send({
            erro:err.message
        })
    }
    
})

server.post('/somar', (req, resp) =>{
    try {
        const {valores:{a, b}} = req.body;
    
        const x = somar(a, b);
    
        resp.send({
            soma: x
        })
    } catch (err) {
        resp.status(404).send({
            erro:err.message
        })
    }
})

export default server;