

  window.onload= function(){
      alert(1);
}
function upDate(){
 alert(222);
    var httpRequest = new XMLHttpRequest();//第一步：建立所需的对象
var s = 'http://shop.chengzzz.com/insertUser?phone='+document.getElementById("phone").value+'&name='+document.getElementById("name").value+'&sid='+document.getElementById("xh").value;
  console.log(s);
 alert(s);
    httpRequest.open('GET', s, true);
    httpRequest.send();//第三步：发送请求  将请求参数写在URL中
    /**
     * 获取数据后的处理程序
     */
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var json = httpRequest.responseText;//获取到json字符串，还需解析
            console.log(json);
            alert(json)
        }
    };
}


