// // 网站运行多少天
// var blog_running_days = document.getElementById('blog_running_days')
// var blog_running_hours = document.getElementById('blog_running_hours')
// var blog_running_mins = document.getElementById('blog_running_mins')
// var blog_running_secs = document.getElementById('blog_running_secs')
// function refresh_blog_running_time() {
//   var time = new Date() - new Date(2023, 1, 1, 8, 0, 0)
//   var d = parseInt(time / 24 / 60 / 60 / 1000)
//   var h = parseInt((time % (24 * 60 * 60 * 1000)) / 60 / 60 / 1000)
//   var m = parseInt((time % (60 * 60 * 1000)) / 60 / 1000)
//   var s = parseInt((time % (60 * 1000)) / 1000)
//   blog_running_days.innerHTML = d
//   blog_running_hours.innerHTML = h < 10 ? '0' + h : h
//   blog_running_mins.innerHTML = m < 10 ? '0' + m : m
//   blog_running_secs.innerHTML = s < 10 ? '0' + s : s
// }
// refresh_blog_running_time()
// if (typeof bottomTimeIntervalHasSet == 'undefined') {
//   var bottomTimeIntervalHasSet = true
//   setInterval(function () {
//     refresh_blog_running_time()
//   }, 500)
// }

function NewDate(str) {
  str = str.split('-');
  
  var date = new Date();
  
  date.setUTCFullYear(str[0], str[1] - 1, str[2]);
  
  date.setUTCHours(0, 0, 0, 0);
  
  return date;
  
  }
  
  function showsectime() {
  var birthDay =NewDate("2012-08-01");
  
  var today=new Date();
  
  var timeold=today.getTime()-birthDay.getTime();
  
  var sectimeold=timeold/1000
  
  var secondsold=Math.floor(sectimeold);
  
  var msPerDay=24*60*60*1000;
  
  var e_daysold=timeold/msPerDay;
  
  var daysold=Math.floor(e_daysold);
  
  var e_hrsold=(daysold-e_daysold)*-24;
  
  var hrsold=Math.floor(e_hrsold);
  
  var e_minsold=(hrsold-e_hrsold)*-60;
  
  var minsold=Math.floor((hrsold-e_hrsold)*-60);
  
  var seconds=Math.floor((minsold-e_minsold)*-60).toString();
  
  document.getElementById("showsectime").innerHTML = "网站已安全运行"+daysold+"天"+hrsold+"小时"+minsold+"分"+seconds+"秒";
  
  setTimeout(showsectime, 1000);
  
  }
  
  showsectime();