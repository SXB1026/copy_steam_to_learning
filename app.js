const db = require('./dbUtil/dbUtil');

const express = require('express');
// 中间件
// const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const path = require('path');
const session = require('express-session');
const port = 3000;

app.use(
  session({
    secret: 'your_secret_key', // 在生产环境中使用环境变量
    resave: false,
    saveUninitialized: false,
  })
);

app.use((req, res, next) => {
  if (!req.session.playerId) {
    req.session.playerId = 0;
  }
  next();
});

// 使用 body-parser 中间件
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// 设置 EJS 作为模板引擎
app.set('view engine', 'ejs');
//在写图片路径时可以直接把public视为根目录
app.use(express.static('public'));

const indexRoutes = require("./routes/indexRoutes");
app.use("/", indexRoutes);

const apiRoutes = require("./routes/apiRoutes");
app.use("/api", apiRoutes);

const gameCategoryRoutes = require("./routes/gameCategoryRoutes");
app.use("/game-category", gameCategoryRoutes);


// const personalRoutes = require("./routes/personalRoutes");
// app.use("/profile", personalRoutes);

const playerRoutes = require('./routes/playerRoutes');
app.use('/api', playerRoutes);

const storeroomRoutes = require("./routes/storeroomRoutes"); // 引入 storeroomRoutes
app.use("/", storeroomRoutes); // 使用 storeroomRoutes

const communityRoutes = require("./routes/communityRoutes"); // 引入 communityRoutes
app.use("/", communityRoutes); // 使用 communityRoutes





// 设置 views 文件夹作为模板文件的存放位置
// app.set('views', path.join(__dirname, 'views'));


app.get('/details/:id', (req, res) => {
  const itemId = req.params.id;
  const playerId = req.session.playerId || 0;
  // 可以根据 itemId 从数据库中检索项目详细信息，然后将其传递给模板。
  res.render('details', { id: itemId, playerId: playerId });
});


  

// 启动服务器
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
