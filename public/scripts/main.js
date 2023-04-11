async function fetchGames(category) {
    // 调用后端 API，传递游戏类型参数
    const response = await fetch(`/api/games?category=${category}`);
    const data = await response.json();
    return data;
  }
  
  function createGameCard(game, gameContainer) {
    const gameCard = document.createElement("div");
    gameCard.classList.add("game-card");
  
    const gameImage = document.createElement("img");
    gameImage.src = game.game_photo;
    gameImage.alt = game.game_name;
    gameImage.classList.add("game-image");
    gameCard.appendChild(gameImage);
  
    const gameName = document.createElement("div");
    gameName.textContent = game.game_name;
    gameName.classList.add("game-name");
    gameCard.appendChild(gameName);
  
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
  })();
  
  