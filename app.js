const express = require('express');
const app = express();
const session = require('express-session');
const port = 3000;

app.use(
  session({
    secret: 'your_secret_key', // 在生产环境中使用环境变量
    resave: false,
    saveUninitialized: false,
  })
);

// 判断用户登录状态
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

// 主页相关
const indexRoutes = require("./routes/indexRoutes");
app.use("/", indexRoutes);

// api相关
const apiRoutes = require("./routes/apiRoutes");
app.use("/api", apiRoutes);

// 游戏分类相关
const gameCategoryRoutes = require("./routes/gameCategoryRoutes");
app.use("/game-category", gameCategoryRoutes);

// 个人资料相关
const playerRoutes = require('./routes/playerRoutes');
app.use('/api', playerRoutes);

// 库页面
const storeroomRoutes = require("./routes/storeroomRoutes"); 
app.use("/", storeroomRoutes); 

// 社区页
const communityRoutes = require("./routes/communityRoutes"); 
app.use("/", communityRoutes);

// 启动服务器
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
