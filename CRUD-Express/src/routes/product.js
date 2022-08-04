import { Router } from "express";

const router = new Router();

router.post("/", (req, res) => {
    // console.log(req);
   const shopDetails = req.body;
   console.log(shopDetails);

   res.status(200).send();
});

router.get("/:productId", (req, res) => {
    const productId = req.params.productId;
    console.log("Get a product");
    res.send({
        productId: productId,
        name: "soap",
        price: 200
    })
});

export default router;
