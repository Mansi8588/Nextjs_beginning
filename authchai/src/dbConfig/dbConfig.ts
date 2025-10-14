// import mongoose from "mongoose";

// export async function connect(){
//     try{

// mongoose.connect(process.env.MONGO_URL!);
// const connection = mongoose.connection;
// connection.on("connected", ()=>{
// console.log("Database connected successfully");
// })
// connection.on("error", (err)=>{
//     console.log("Error while connecting to database"+err);
//     process.exit();
// })
//     }
//     catch(error){
// console.log("Error while connecting to database", error);

//     }
// }


import mongoose from "mongoose";

export async function connect() {
  try {
    if (!process.env.MONGO_URL) {
      throw new Error("MONGO_URL is not defined in environment variables");
    }

    console.log("MONGO_URL:", process.env.MONGO_URL);

    await mongoose.connect(process.env.MONGO_URL);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("✅ Database connected successfully");
    });

    connection.on("error", (err) => {
      console.error("❌ Error while connecting to database:", err);
      process.exit(1);
    });
  } catch (error) {
    console.error("❌ Error while connecting to database:", error);
  }
}
