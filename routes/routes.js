'use strict';
const express = require("express"),
      router = express.Router(),
      multer = require('multer'),
      upload = multer({dest: 'uploads/'});

router.route('/').get(function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
})

router.post('/file', upload.single('file'), function(req, res) {
  res.format({
    'application/json': function() {
      res.send({"size": req.file.size});
    }
  })
});

module.exports = router
