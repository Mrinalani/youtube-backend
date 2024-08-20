import { express } from "express";
import cookieParser from "cookie-parser";
import cors from 'cors'     // import

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))                                         // config

app.use(express.json())                     // handle: data get from from
app.use(express.urlencoded({extended}))    // handle: data get through url
app.use(express.static("public"))         // handle: static files
app.use(express.cookieParser())


export { app }