// 定义索引和数据库数据条数
let currentIndex = 0;
let recordCount = 0;

// 通过从数据库查询到的数据来渲染页面
function updateContent(items) {
  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = ""; // 清空内容

  items.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");

    const img = document.createElement("img");
    img.src = item.game_photo;
    img.alt = item.game_name;
    img.addEventListener('click', () => {
    // 跳转到详情页，将 id 作为 URL 参数传递
      location.href = `/details/${item.game_id}`;
    });

    itemDiv.appendChild(img);

    //这个div装 图片下面的游戏名，价格等信息
    const nameDiv = document.createElement("div");
    nameDiv.classList.add("nameDiv");

    const nameH3 = document.createElement("h5");
    nameH3.textContent = item.game_name;
    nameDiv.appendChild(nameH3);

    const priceP = document.createElement("p");
    priceP.textContent = "价格: " + item.game_price;
    nameDiv.appendChild(priceP);

    itemDiv.appendChild(nameDiv);

    contentDiv.appendChild(itemDiv);
  });
}

// 初始化和点击按钮时会被调用
function fetchData(index, limit) {
  if (index < 0 || index >= recordCount-1) {
    return;
  }

  fetch(`/data/${index}/${limit}`)
    .then((response) => response.json())
    .then((data) => {
      currentIndex = index;
      updateContent(data);
    })
    .catch((error) => console.error("Error fetching data:", error));
} 

// 这两个是监听按钮，通过改变查数据库的索引来实现切换推荐数据
document.querySelector("#prev").addEventListener("click", () => {
  if (currentIndex > 0) {
    fetchData(currentIndex - 6, 6);
  }
});

document.querySelector("#next").addEventListener("click", () => {
  fetchData(currentIndex + 6, 6);
});

// 前进和后退按钮
document.querySelector("#goBack").addEventListener("click", () => {
  window.history.back();
});

document.querySelector("#goForward").addEventListener("click", () => {
  window.history.forward();
});

// 直接先执行，获取记录数量和初始化网页
fetch('/count')
  .then((response) => response.json())
  .then((data) => {
    recordCount = data.count;
    // 初始化
    fetchData(0, 6);
  })
  .catch((error) => console.error("Error fetching count:", error));