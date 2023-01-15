window.onload = function() {
    themeDefaultContent = $(
      '#app > .theme-container>.page > .theme-default-content'
    );
   
    themeDefaultContent.attr('id', 'yzm');
    btw = new BTWPlugin(); // 注意btw需要是个全局变量,把const去掉
    btw.init({
      id: 'yzm',
      blogId: '28731-1671462030313-911',
      name: '测试猿全栈知识体系',
      qrcode: 'https://pic.testyuan1024.com/i/2022/12/19/63a07c3597994.png',
      keyword: '验证码',
    });
  };