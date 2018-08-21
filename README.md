# 二维码

## 该项目基于原生封装的点击蒙版层的组件（避免全局变量的污染）
```

### 使用

```html
<button id="showSelector">配置用户角色</button>

```

```
var selector = new UserRoleSelector({
    show : false ,//默认不显示
    onLogin : function(){
        alert("登录成功了") //do code
        this.hide();
    }
});
document.getElementById("showSelector").onclick = function () {
    if(selector.status) {
        selector.hide();//让组件隐藏
    }else {
        selector.show();//让组件出现
    }
}

```
