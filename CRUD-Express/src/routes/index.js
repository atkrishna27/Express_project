import { Router } from "express";
import productRoutes from "./product.js";

const router = new Router();

router.use("/product", productRoutes);

router.get("/products", (req, res) => {
    res.send("All products");
});

export default router;
