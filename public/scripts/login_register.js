$("#login_register_form").on("submit", function (event) {
    event.preventDefault();
    const player_account_number = $("#player_account_number").val();
    const player_account_password = $("#player_account_password").val();
    const action = $("input[name='action']:checked").val();
    console.log("点击");
    $.ajax({
      url: "/api/login_register",
      method: "POST",
      data: {
        player_account_number,
        player_account_password,
        action,
      },
      success: function (response) {
        if (response.status === "success") {
          // 登录成功，跳转到主页面
          window.location.href = "/";
        } else {
          // 显示警告信息
          showAlert(response.message);
        }
      },
      error: function (response) {
        // 显示警告信息
        showAlert(response.message);
      },
    });
  });
  