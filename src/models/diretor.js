import conn from "../conn.js"

const Schema = conn.Schema;

const diretorSchema = new Schema({
    endereco: { type: Object, required: true },
    telefones: [String],
})

const Diretor = conn.model("Diretor", diretorSchema);

export default Diretor;