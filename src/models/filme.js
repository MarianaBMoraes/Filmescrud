import conn from "../conn.js"

const Schema = conn.Schema;

const filmeSchema = new Schema({
    titulo: {
        type: String,
        required: true
    },
    ano: {
        type: Schema.Types.Number,
        required: true,
    },
    genero: {
        type: String,
        required: true
    },
})

const Filme = conn.model("Filme", filmeSchema);

export default Filme;