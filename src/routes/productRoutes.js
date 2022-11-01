const express = require ('express');
const productController = require('../controllers/productController');
const multer = require ('multer');
const router = express.Router();
const uploadFile = require ('../middlewares/multerProducts.js')

router.get('/productList/:tipo',productController.productList);
router.get('/productDetail/:id',productController.productDetail);
router.get('/productEdit/:id',uploadFile.single (photo), productController.productEdit);
router.post('/productEdit', productController.postEdit);
router.post('/productDelete', productController.postDelete);
router.get('/productCart',productController.productCart);




module.exports = router;