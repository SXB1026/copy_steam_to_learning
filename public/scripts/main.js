async function fetchGames(category) {
    // 调用后端 API，传递游戏类型参数
    const response = await fetch(`/api/games?category=${category}`);
    const data = await response.json();
    return data;
  }
  
  function createGameCard(game, gameContainer) {
    const gameCard = document.createElement("div");
    gameCard.classList.add("game-card");
  
    const gameLink = document.createElement("a");
    gameLink.href = `/details/${game.game_id}`; // 为游戏卡片添加一个链接，包含游戏ID
    gameCard.appendChild(gameLink);
  
    const gameImage = document.createElement("img");
    gameImage.src = game.game_photo;
    gameImage.alt = game.game_name;
    gameImage.classList.add("game-image");
    gameLink.appendChild(gameImage); // 将游戏图片添加到链接元素中
  
    const gameName = document.createElement("div");
    gameName.textContent = game.game_name;
    gameName.classList.add("game-name");
    gameLink.appendChild(gameName); // 将游戏名称添加到链接元素中
  
    // 将游戏卡片添加到指定的游戏容器中
    gameContainer.appendChild(gameCard);
  }
  
  

// 定义一个函数来获取游戏类型列表
async function fetchGameCategories() {
    // 调用后端 API，获取游戏类型列表
    const response = await fetch('/api/game-categories');
    const data = await response.json();
    return data;
  }
  
  // 定义一个函数来创建游戏类别容器
  function createGameCategoryContainer(category) {
    // console.log(category);
    const gameCategory = document.createElement("div");
    gameCategory.id = `category-${category.game_type}`;
    gameCategory.style.paddingTop = '50px';
    gameCategory.style.marginTop = '-50px';
    gameCategory.classList.add("game-category");
  
    const categoryHeader = document.createElement("div");
    categoryHeader.classList.add("category-header");
    gameCategory.appendChild(categoryHeader);
  
    const categoryTitle = document.createElement("h2");
    categoryTitle.classList.add("category-title");
    categoryTitle.textContent = category.game_type;
    categoryHeader.appendChild(categoryTitle);
  
    const viewMore = document.createElement("a");
    viewMore.href = `/game-category/all/${category.game_type}`;

    viewMore.classList.add("view-more");
    viewMore.textContent = "查看更多";
    categoryHeader.appendChild(viewMore);

  
    const gameContainer = document.createElement("div");
    gameContainer.classList.add("game-container");
    gameCategory.appendChild(gameContainer);
  
    return { gameCategory, gameContainer };
  }

  async function populateLeftNavbar() {
    const categories = await fetchGameCategories();
    const leftNavbar = document.querySelector(".classify");
  
    categories.forEach((category) => {
      const categoryLink = document.createElement("a");
      categoryLink.href = `#category-${category.game_type}`; // 使用游戏类别的ID设置锚点
      categoryLink.textContent = category.game_type;
      categoryLink.classList.add("left-category-link");
  
      leftNavbar.appendChild(categoryLink);
    });
  }
  
  // 在页面加载时获取并渲染游戏类型及其游戏数据
  (async function () {
    const categories = await fetchGameCategories();
    const mainContainer = document.getElementById("main-container");
    console.log(categories);
    for (const category of categories) {
      // 为每个游戏类型创建一个游戏类别容器
      const { gameCategory, gameContainer } = createGameCategoryContainer(category);
      mainContainer.appendChild(gameCategory);
  
      // 请求并显示当前游戏类型的游戏
      const games = await fetchGames(category.game_type);
      games.forEach((game) => createGameCard(game, gameContainer));
    }
    await populateLeftNavbar();
  })();
  
  