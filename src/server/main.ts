import express from "express";
import ViteExpress from "vite-express";

const app = express();

app.get("/hello", (_, res) => {
  res.send("Hello Vite + React + TypeScript!");
});
app.get('/cookie',(req,res)=>{
  res.cookie('test','test')
  res.send('ok')
})

app.get('/csrf',(req,res)=>{
 let cookie= req.headers.cookie;
 
  res.send('ok cookie is:'+cookie)
})

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
