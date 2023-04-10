const express = require("express");


const router = express.Router();
const { getItems, getItemsCount, getItemsByLimitAndOffset } = require("../models/itemsModel");


  
router.get("/", async (req, res) => {
    try {
      const items = await getItems();
      res.render("index", { items: items });
    } catch (err) {
      console.error("Error querying: " + err.stack);
      res.status(500).send("Error querying the database");
    }
  });
  
  router.get("/count", async (req, res) => {
    try {
      const count = await getItemsCount();
      res.json({ count });
    } catch (err) {
      console.error("Error querying: " + err.stack);
      res.status(500).send("Error querying the database");
    }
  });
  //通过点击切换按钮来用不同的语句来查询不同的语句内容
  router.get("/data/:index/:limit", async (req, res) => {
    const index = parseInt(req.params.index, 10);
    const limit = parseInt(req.params.limit, 10);
  
    try {
      const items = await getItemsByLimitAndOffset(limit, index);
      res.json(items);
    } catch (error) {
      res.status(500).send("Error fetching data");
    }
  });
  

  module.exports = router;

