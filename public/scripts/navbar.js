document.addEventListener('DOMContentLoaded', () => {
  const playerId = document.body.getAttribute('data-player-id');
  const dropdownContent = document.getElementById('dropdown-content');
  const loginLink = document.getElementById('login');
  const profileLink = document.getElementById('profile');
  const logoutLink = document.getElementById('logout');

  if (playerId !== '0') {
    profileLink.style.display = 'block';
    logoutLink.style.display = 'block';
    loginLink.style.display = 'none';
  } else {
    profileLink.style.display = 'none';
    logoutLink.style.display = 'none';
    loginLink.style.display = 'block';
  }

  // 点击登录链接时，导航到登录/注册页面
  if (loginLink) {
    loginLink.addEventListener('click', () => {
      window.location.href = '/login_register';
    });
  }
  
  // 点击退出登录链接时，发送请求以退出登录状态
  if (logoutLink) {
    logoutLink.addEventListener('click', (event) => {
      event.preventDefault();
      fetch('/api/logout', { method: 'POST' })
        .then((response) => {
          if (response.status === 200) {
            // 退出登录成功，刷新页面以更新导航栏
            window.location.reload();
          } else {
            // 显示错误消息
            console.error('退出登录失败');
          }
        })
        .catch((error) => {
          console.error('退出登录请求失败:', error);
        });
    });
  }
  
  if (profileLink && playerId) {
    profileLink.addEventListener('click', (event) => {
      event.preventDefault();
      // 根据您的路由设置，将下面的URL替换为个人资料页面的URL
      window.location.href = `/api/player/${playerId}`;
    });
  }
  // ...其他代码...
});

