import { Router } from "express";
const router = Router();

import * as productsCtrl from "../controllers/products.controllers";

router.get("/", productsCtrl.getProducts);
router.post("/", productsCtrl.createProduct);
router.get("/:productId", productsCtrl.getProduct);
router.put("/:productId", productsCtrl.updateProduct);
router.delete("/:productId", productsCtrl.deleteProduct);

export default router;
