
const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

//在写图片路径时可以直接把public视为根目录
app.use(express.static('public'));


// 设置 EJS 作为模板引擎
app.set('view engine', 'ejs');

// 创建数据库连接配置
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'the_steam'
});

// 连接到数据库
connection.connect((err) => {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }

  console.log('Connected to MySQL as id ' + connection.threadId);
});

// 路由处理 - 获取 items 数据并渲染到页面上 - req是传进来的请求，res作为传出去的响应（目前无用了已经）
app.get('/', (req, res) => {
  const query = 'SELECT * FROM items where id=1';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error querying: ' + err.stack);
      res.status(500).send('Error querying the database');
      return;
    }

    // 使用 EJS 渲染数据到页面上
    res.render('index', { items: results });//results 是获取到的数据库内容
  });
});

//通过点击切换按钮来用不同的语句来查询不同的语句内容
app.get('/data/:index/:limit', (req, res) => {
  const index = parseInt(req.params.index, 10);
  const limit = parseInt(req.params.limit, 10);
  const query = 'SELECT * FROM items LIMIT ? OFFSET ?';

  connection.query(query, [limit, index], (error, results) => {
    if (error) {
      res.status(500).send('Error fetching data');
    } else {
      res.json(results);//将查询到的结果 results 转换为 JSON 格式，并将其设置为响应体，同时设置响应的 Content-Type 为 "application/json"。
    }
  });
});


//jilushujudeshuliang 
app.get('/count', (req, res) => {
  const query = 'SELECT COUNT(*) as count FROM items';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error querying: ' + err.stack);
      res.status(500).send('Error querying the database');
      return;
    }
    /*查询返回的结果是一个包含一行记录的数组，记录中有一个名为 count 的字段。results[0] 获取结果数组中的第一行记录（数组的第一个元素），results[0].count 则获取这行记录中名为 count 的字段的值。 */
    res.json({ count: results[0].count });
  });
});

  

// 启动服务器
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
