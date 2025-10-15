import express from "express"
const router = express.Router()
import  supplierController from "../controllers/supplier.controller.js"
import { authenticate, authorize } from "../middleware/auth.js"

router.use(authenticate)
router.use(authorize(["ADMIN"]))

router.get("/", supplierController.getAll)
router.get("/:id", supplierController.getById)
router.post("/", supplierController.create)
router.put("/:id", supplierController.update)
router.delete("/", supplierController.deleteMany)

export default router
