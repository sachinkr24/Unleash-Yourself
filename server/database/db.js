
import mongoose from "mongoose"

// creating connection function
const Connection = async(username,password) =>{
    //connection string as first argument
    //second is an object
    const URL = `mongodb://${username}:${password}@ac-pptppce-shard-00-00.0akaslu.mongodb.net:27017,ac-pptppce-shard-00-01.0akaslu.mongodb.net:27017,ac-pptppce-shard-00-02.0akaslu.mongodb.net:27017/?ssl=true&replicaSet=atlas-jg727e-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
          await mongoose.connect(URL,{ useNewUrlParser: true });
          console.log('database connected successfully');
    } catch(error){
        console.log('error while connecting',error);
    }
}

export default Connection;