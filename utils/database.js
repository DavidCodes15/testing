import mongoose from "mongoose";

let isConnected = false; // track the connection

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  try{
    await mongoose.connect(process.env.MONGODB_URI, {
        dbName: "geo_pipe",
       
    //   useUnifiedTopology: true,

    })
    console.log("mongo is connected");
  } catch (error) {
    console.log("mongo did not connect");
  }

//   if(isConnected) {
//     console.log('MongoDB is already connected');
//     return;
//   }

//   try {
//     await mongoose.connect(process.env.MONGODB_URI, {
//       dbName: "geo_pipe",
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })

//     isConnected = true;

//     console.log('MongoDB connected')
//   } catch (error) {
//     console.log(error);
//   }
}