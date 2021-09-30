const express = require("express");
const Diagram = require("../bd/diagramShema");
const router = express.Router();

router
  .route("/")
  .get(async (req, res) => {
    const diagrams = await Diagram.find();
    res.status(200).json(diagrams);
  })
  // добавление диаграммы
  .post(async (req, res) => {
    const { name, active, notActive, complet } = req.body;
    if(name && active && notActive && complet){
    const diagram = await Diagram.create({name,active,notActive,complet})
    res.status(200).json(diagram)
    } else{
      res.status(400).json({ createDiagram: false })  }
  })

 

 


module.exports = router;
