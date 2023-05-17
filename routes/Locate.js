const express= require('express');
const router= express.Router();
const Locate = require('../models/Location')
const { body, validationResult } = require('express-validator');

router.post('/add',[body('lat').isDecimal(), body('lng').isDecimal()], async (req, res) => {
  // if there is bad request return error reponse
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

  //check if given location is already present in our database or not
  try{
    const check= await Locate.findOne({lat: req.body.lat, lng: req.body.lng});
  if(check)
  return res.status(400).json({error: "given location is already in our database"});
  await Locate.create({
    lat: req.body.lat,
    lng: req.body.lng,
  })
  // .then(res.json({success: 'successfully location added'}))
  res.json({success: 'successfully location added'})
  res.end();
  }catch(err){
    console.log(err.message);
    res.status(500).send("some error occured")
  }
    // .catch(err => {console.log(err)
    // res.json({error:"given location is already on our database", message: err.message})});
})

module.exports= router;