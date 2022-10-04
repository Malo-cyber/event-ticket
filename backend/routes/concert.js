const {Router} = require("express");
const ctrl = require("../controllers/concert.js");
const auth = require('../middleware/auth');
const router = Router();

const multer = require('../middleware/multer-config');


module.exports = router;
router.get('/getAll', ctrl.getAll);
router.get('/getOne/:id', ctrl.getOne);
router.post('/createOne', ctrl.createOne);
router.post('/createOneImg', ctrl.createOneImg);
router.put('/updateOne/:id', ctrl.updateOne);
router.delete('/deleteOne/:id', auth, ctrl.deleteOne);
router.get('/getSort/', ctrl.getSort);


module.exports = router;
