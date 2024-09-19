import mongoose from "mongoose";

const mongoDB =
  "mongodb+srv://mariana_bmoraes:mDWPwYZKokY0Q9Lh@cluster0.kqjgr.mongodb.net/jogo-bicho";
const database = "subdocumentos";

const main = async () => {
  try {
    await mongoose.connect(mongoDB + database);
    console.log("Conectado com sucesso");
  } catch (error) {
    console.log(error);
  }
};

main();

export default mongoose