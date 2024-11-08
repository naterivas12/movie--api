const express = require('express')
const cors = require('cors')
const helmet = require('helmet');

class Server{
  constructor(){
    this.app = express();
    this.port = process.env.PORT||3000;
    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.app.use(
      helmet.contentSecurityPolicy({
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'", "*"],
          // Otras directivas aquí según tus necesidades
        },
      })
    );
    
    this.app.use(cors())
    this.app.use( express.static('public'))
  }

  routes(){
    this.app.use('/list_movies',require('../routes/listMovies'))
    this.app.use('/characters',require('../routes/listCharacters'))
    this.app.use('/characters/full',require('../routes/character'))
  }

  listen(){
    this.app.listen(this.port, () => {
      console.log(`Example app listening on this.port ${this.port}`)
    })
  }



}

module.exports = Server;