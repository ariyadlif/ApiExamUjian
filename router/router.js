const productsController = require('../controller/productsController')
const userController = require('../controller/userController')
const cartController = require('../controller/cartController')
const kursusController = require('../controller/kursusController')

module.exports = app => {
	app.get('/', productsController.home)

	//api products
	app.get('/products', productsController.listProduct)
	app.get('/products/:id', productsController.detailProduct)
	app.post('/products/', productsController.tambahProduct)
	app.put('/products/:id', productsController.ubahProduct)
	app.delete('/products/:id', productsController.hapusProduct)

	//api user
	app.get('/user', userController.listUser)
	app.get('/user/:id', userController.detailUser)
	app.post('/user/', userController.tambahUser)
	app.put('/user/:id', userController.ubahUser)
	app.delete('/user/:id', userController.hapusUser)

	//api cart
	app.post('/cart/:id', cartController.addToCart)
	app.get('/cart/:id', cartController.showCart)
	app.put('/cart/:id', cartController.editCart)
	app.delete('/cart/:id', cartController.deleteCart)
	app.get('/cart/remove/:id', cartController.removeCart)

	//check out
	app.get('cart/checkout/:id', cartController.checkOut)

	//api kursus
	app.get('/kursus', kursusController.listProduct)
	app.get('/kursus/:id', kursusController.detailProduct)
	app.post('/kursus/', kursusController.tambahProduct)
	app.put('/kursus/:id', kursusController.ubahProduct)
	app.delete('/kursus/:id', kursusController.hapusProduct)
}