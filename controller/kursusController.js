const Product = require('../models/kursus')

exports.home = (req,res) => {
	res.send("Wellcome to API Shop")
}

exports.listProduct = async (req,res) => {
	let data = await Product.find()
	res.send(JSON.stringify({ "status" : 200, "error" : null, "response" : data}))
}

exports.detailProduct = async (req,res) => {
	const data = await Product.findById(req.params.id)
	res.send(JSON.stringify({ "status" : 200, "error" : null, "response" : data}))
}

exports.tambahProduct = async (req,res) => {
	// const products = new Product(req.body)
	// const status = await products.save()
	// res.send(JSON.stringify({ "status" : 200, "error" : null, "response" : status}))

	const harga = Number.parseInt(req.body.harga)
	const total_durasi = req.body.total_durasi
	const total_murid = req.body.total_murid
	const jumlah_video = Number.parseInt(req.body.jumlah_video)
	const image = req.body.image
	const nama_kursus = req.body.nama_kursus
	if(harga >= 5000000){
			const data = {
					nama_kursus : nama_kursus,
					total_durasi : total_durasi,
					total_murid : total_murid,
					jumlah_video : jumlah_video,
					harga : harga,
					diskon : (harga - (harga * 20/100)) - 100000,
					image : image
			}
			const products = new Product(data) 
			const status = await products.save()
			res.send(JSON.stringify({"status" : 200, "error" :null, "response" : status}))
	}else{
			const data = {
				nama_kursus : nama_kursus,
				total_durasi : total_durasi,
				total_murid : total_murid,
				jumlah_video : jumlah_video,
				harga : harga,
				diskon : (harga - (harga * 20/100)),
				image : image
			}
			const products = new Product(data)
			const status = await products.save()
			res.send(JSON.stringify({"status" : 200, "error" :null, "response" : status}))
	}
}

exports.ubahProduct = async (req,res) => {
	const {id} = req.params
	const status = await Product.update({_id : id}, req.body)
	res.send(JSON.stringify({ "status" : 200, "error" : null, "response" : status}))
}

exports.hapusProduct = async (req,res) => {
	let {id} = req.params
	const status = await Product.remove({_id : id})
	res.send(JSON.stringify({ "status" : 200, "error" : null, "response" : status}))
}
