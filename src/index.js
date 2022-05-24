import 'dotenv/config'

import express from "express"
import cors from "cors"

import {somar, dobro} from './service.js'

const server = express();
server.use(cors());
server.use(express.json());

server.get('/dobro/:numero', (req, resp) =>{
    try {
        const numero = Number(req.params.numero);
        const d = {dobro}
        resp.send({
            dobro:d
        })
    } catch (err) {
        resp.status(404).send({
            erro:err.message
        })
    }
})

server.get ('/somar', (req, resp)  => {
    try {
        const a= Number (req.query.a);
        const b= Number (req.query.b);
        
        const x= a + b;
        resp.send({
            soma: x
        })
    } catch (err) {
        resp.status(404).send({
            erro:err.message
        })
    }
})

server.post('/somar', (req,resp)=> {
    try {
        const a = req.body.a;
        const b = req.body.b;

        const c = a + b;
        resp.send({
            somar:c
        })
    }catch (err) {
        resp.status(404).send({
            erro:err.message
        })
    }
})

server.get('dia2/corprimaria/:cor', (req,resp) =>{
    try {

        function Corpri(cor){

            const mensagem = true;
    
            if(cor != 'vermelho' && cor != 'amarelo' && cor != 'azul')
            mensagem = false;
            
            
        }
        resp.send({
            resposta: Corpri
        })


    } catch (err) {
        resp.status(404).send({
            erro:err.message
        })
    }
})






server.listen(process.env.PORT, 
    ()=> console.log(`API online na porta ${process.env.PORT}`));
