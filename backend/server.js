import express from 'express'
import cors from 'cors'

const PORT =  process.env.PORT || 3000;

const app = express();

app.use(cors({ origin: "http://localhost:5174" }));

app.get('/',(req,res)=>{
    res.json({msg: "backend am in !!!"});
})

app.listen(PORT,()=>{
    console.log(`Bckend is listening on port: ${PORT}`);
})
