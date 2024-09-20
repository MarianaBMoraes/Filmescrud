import e from "express";
import diretorController from "../controllers/diretor_controller.js";
const cep_endereco = require('../middlewares/cep_endereco.js');

const router = e.Router()

router.post("/", cep_endereco, diretorController.store)
router.get("/", diretorController.index)
router.get("/:id", diretorController.show)
router.put("/:id", cep_endereco, diretorController.update)
router.delete("/:id", diretorController.destroy)

export default router