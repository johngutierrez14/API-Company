import { Router } from "express";
const router = Router();

import * as productsCtrl from "../controllers/products.controllers";

router.get("/", productsCtrl.getProducts);
router.post("/", productsCtrl.createProduct);
router.get("/:id", productsCtrl.getProduct);
router.put("/:id", productsCtrl.updateProduct);
router.delete("/:id", productsCtrl.deleteProduct);

export default router;
