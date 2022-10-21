require("dotenv").config();


const dev={
    app:{
       port:process.env.PORT || 4000
    },
    db:{
        url:process.env.URL_DB || "mongodb:localhost:27017/userDb"
    }
};


module.exports=dev;

