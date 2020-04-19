"use strict";
const product = require("../../../models/product.model");
const category = require("../../../models/category.model");

const addProduct = (msg, callback) => {
  var res = {};

  const date = new Date();
  // getting date in mm/dd/yyyy format
  const myCustomDate =
    date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();

  let productToCreate = product({
    sellerId: msg.sellerId,
    sellerEmailId: msg.emailId,
    sellerName: msg.sellerName,
    productName: msg.productName,
    productCategory: msg.productCategory,
    productPrice: msg.productPrice,
    productDescription: msg.productDescription,
    photos: msg.productImagesURL,
    clickCount: [{ date: myCustomDate, count: 0 }],
  });
  console.log(productToCreate);
  productToCreate.save((productSaveError) => {
    if (productSaveError) {
      res.status = 500;
      res.message = "Database Error";
      callback(null, res);
    } else {
      // assuming msg.productCategory will always be valid from frontend
      category.findOne({ name: msg.productCategory }, (err, result) => {
        if (err) {
          res.status = 500;
          res.message = "Database Error";
          callback(null, res);
        }
        if (result) {
          result.productCount = result.productCount + 1;
          result.save((incrementSaveError) => {
            if (incrementSaveError) {
              res.status = 500;
              res.message = "Database Error";
              callback(null, res);
            } else {
              res.status = 200;
              res.message = "Success";
              callback(null, res);
            }
          });
        } else {
          res.status = 400;
          res.message = "Product Category Not found";
          callback(null, res);
        }
      });
    }
  });
};

exports.addProduct = addProduct;
