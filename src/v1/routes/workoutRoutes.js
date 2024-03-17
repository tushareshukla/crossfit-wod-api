const express = require("express");
const router = express.Router();

router.get('/', (req, res)=>{
    res.send("Get all wrokouts")
})

router.get('/:workoutId',(req,res)=>{
    res.send("Get an existing workout");
})

router.post('/',(req,res)=>{
    res.send("Create a new workout");
})
router.patch("/:workoutID",(req,res)=>{
    res.send("Update an existing workout")
})
router.delete('/:workoutID', (req,res)=>{
    res.send("Delete an existing workout")
})
module.exports = router;