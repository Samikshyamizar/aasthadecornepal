import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  brainTreePaymentController,
  braintreeTokenController,
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productFiltersController,
  productListController,
  productPhotoController,
  realtedProductController,
  searchProductController,
  updateProductController,
} from "../controllers/productController.js";
import formidable from "express-formidable";

const productRouter = express.Router();

//routes
productRouter.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);
//update routes
productRouter.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);
//get products
productRouter.get("/get-product", getProductController);

//single product
productRouter.get("/get-product/:slug", getSingleProductController);

//get photo
productRouter.get("/product-photo/:pid", productPhotoController);

//delete rproduct
productRouter.delete("/delete-product/:pid", deleteProductController);

//filter products
productRouter.post("/product-filters", productFiltersController);

//product count
productRouter.get("/product-count", productCountController);

//product per page
productRouter.get("/product-list/:page", productListController);

//search product
productRouter.get("/search/:keyword", searchProductController);

//similar product
productRouter.get("/related-product/:pid/:cid", realtedProductController);

//category wise product
productRouter.get("/product-category/:slug", productCategoryController);

//payments routes
//token
productRouter.get("/braintree/token", braintreeTokenController);

//payments
productRouter.post(
  "/braintree/payment",
  requireSignIn,
  brainTreePaymentController
);

export default productRouter;
