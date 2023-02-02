import express from "express"
import ReactDOMserver from "react-dom/server"
import App from "../components/app"

const server = express()

server.use(express.static('dist'))

server.get("/",(req,res)=>{

    const initialMarkup = ReactDOMserver.renderToString(<App/>)

    

   // console.log("Return String ", returnString)

    res.send(`<html>
    <head>
    <title>Sample React Application</title>
    </head>
    <body>
        <div id="app" >{initialMarkup}</div>
        <script src="/main.js"></script>
    </body>
 </html>`)       
 })

server.listen(4242,()=>{console.log("Listening on port 4242")



})