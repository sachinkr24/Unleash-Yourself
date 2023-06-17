import User from '../model/user.js';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken';
import Token from '../model/token.js'

dotenv.config();
export const signupUser = async(request, response)=>{
     try{
          // const salt = await bcrypt.genSalt();
          const hashedPassword = await bcrypt.hash(request.body.password, 10);
          const user = { username: request.body.username , name: request.body.name , password: hashedPassword}

          //validated input is stored in newUser
          const newUser = new User(user);
          //newUser is saved in database
         await newUser.save();

         return  response.status(200).json({msg:'signup successfull'})
     } catch(error){
        return  response.status(500).json({msg:'error while signing up the user'})
     }

} 

export const loginUser = async(request, response)=>{
    let user = await User.findOne({username:request.body.username});
    if(!user){
     return response.status(400).json({msg:'username doesnt match'});
    } 
    try{
     let match =  await bcrypt.compare(request.body.password , user.password);
     if(match){
          const accessToken =  jwt.sign(user.toJSON(),process.env.ACCESS_SECRET_KEY, {expiresIn:'15m'} );
          const refreshToken = jwt.sign(user.toJSON(),process.env.REFRESH_SECRET_KEY, {expiresIn:'15m'} );

          const newToken = new Token ({ token : refreshToken});
          await newToken.save(); 

          return response.status(200).json({accessToken : accessToken,refreshToken: refreshToken, name: user.name , username: user.username})


     }else{
          response.status(400).json({msg:'password doesnt match'});

     }
    }catch(error){
     response.status(500).json({msg:'Error while logging in the user'});
    }
} 