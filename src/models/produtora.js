import conn from "../conn.js";

const Schema = conn.Schema;

const produtoraSchema = new Schema({
  nome: { type: String, required: true },
  endereco: { type: Object, required: true },
  telefones: [String],
});

const Produtora = conn.model("Produtora", produtoraSchema);

export default Produtora;
