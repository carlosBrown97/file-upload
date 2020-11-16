const { Router } = require('express')
const multer = require('multer')
const router = Router()

const storage = multer.diskStorage({
  destination: `public/uploads`,
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

const mlt = multer({
  storage,
  dest: `public/uploads`
}).single('file')

router.get('/', (req, res) => {
    res.render('index')
})

router.post('/upload', mlt,(req, res) => {
  console.log('FILE', req.file)
  res.send('Uploaded')
})

module.exports = router
