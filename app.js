
const express = require('express');
const mysql = require('mysql');
const app = express();
const path = require('path');
  
const port = 3000;
// 设置 EJS 作为模板引擎
app.set('view engine', 'ejs');
//在写图片路径时可以直接把public视为根目录
app.use(express.static('public'));

const indexRoutes = require("./routes/indexRoutes");
app.use("/", indexRoutes);

const apiRoutes = require("./routes/apiRoutes");
app.use("/api", apiRoutes);

// 设置 views 文件夹作为模板文件的存放位置
// app.set('views', path.join(__dirname, 'views'));


app.get('/storeroom', (req, res) => {
  res.render('storeroom');
});

app.get('/community', (req, res) => {
  res.render('community');
});
app.get('/details/:id', (req, res) => {
  const itemId = req.params.id;
  // 可以根据 itemId 从数据库中检索项目详细信息，然后将其传递给模板。
  res.render('details', { id: itemId });
});

  

// 启动服务器
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
