## 动态代理
### 使用方法
- npm install
- npm run start
```
var data = new FormData();
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});
xhr.open("POST", "http://localhost:3000/api/app/mock/12614/testpost");
xhr.setRequestHeader("d-target", "http://rap2api.taobao.org");
xhr.setRequestHeader("d-path", "api");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("postman-token", "7e35a565-8834-b041-7816-c2676dee655c");

xhr.send(data);

```
