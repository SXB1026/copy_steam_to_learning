// 获取所有的小图片
const smallPhotos = document.querySelectorAll(".small_photo img");
  
// 获取大图片的元素
const bigPhoto = document.querySelector(".big_photo");

// 为每个小图片添加点击事件
smallPhotos.forEach((photo) => {
  photo.addEventListener("click", () => {
    // 更新大图片的背景图片为点击的小图片的 src
    bigPhoto.style.backgroundImage = `url('${photo.src}')`;
  });
});

// 获取购买按钮
    const buyButton = document.querySelector(".buy_game");
  
    // 定义一个函数用于创建提示框
    function createAlert(message, buttons) {
      const alertBox = document.createElement("div");
      alertBox.style.position = "fixed";
      alertBox.style.top = "50%";
      alertBox.style.left = "50%";
      alertBox.style.transform = "translate(-50%, -50%)";
      alertBox.style.padding = "20px";
      alertBox.style.backgroundColor = "white";
      alertBox.style.border = "1px solid black";
      alertBox.style.textAlign = "center";
      alertBox.style.zIndex = "1000";
  
      const messageElem = document.createElement("p");
      messageElem.innerText = message;
      alertBox.appendChild(messageElem);
  
      buttons.forEach((button) => {
        alertBox.appendChild(button);
      });
  
      return alertBox;
    }
  
    // 点击购买按钮的事件处理程序
    buyButton.addEventListener("click", () => {
      // 检查是否已登录，这里可以根据您的实际情况进行判断
      const isLoggedIn = !!<%= playerId %>;
      
      if (!isLoggedIn) {
        const okButton = document.createElement("button");
        okButton.innerText = "确定";
        okButton.addEventListener("click", () => {
          document.body.removeChild(alertBox);
        });
  
        const alertBox = createAlert("请先登录", [okButton]);
        document.body.appendChild(alertBox);
      } else {
        const okButton = document.createElement("button");
        okButton.innerText = "确定";
        okButton.addEventListener("click", () => {
          // 在这里可以实现购买游戏的功能
  
          // 移除提示框
          document.body.removeChild(alertBox);
        });
  
        const cancelButton = document.createElement("button");
        cancelButton.innerText = "取消";
        cancelButton.addEventListener("click", () => {
          document.body.removeChild(alertBox);
        });
  
        const alertBox = createAlert("确定将此游戏加入您的库？", [okButton, cancelButton]);
        document.body.appendChild(alertBox);
      }
    });