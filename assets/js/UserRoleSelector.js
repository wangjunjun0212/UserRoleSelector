//避免全局污染，做闭包
var UserRoleSelector = (function(){
		//定义UserRoleSelector类型构造器
	function UserRoleSelector(options) {
		this.init(options||{});//初始化操作
		this.bind();//绑定插件中dom所有需要的事件
	}
	var html ='<div class="container user-role-selector">'+
							'<div>'+'<p>我是UserRoleSelector内容</p>'+'</div>'+
							'<a href="javascript:void(0)" class="close">关闭</a>'+
							'<a href="javascript:void(0)" class="login">登录</a>'+
						'</div>';
	//扩展UserRoleSelector类型实例功能
	UserRoleSelector.prototype = {
		init : function(options){
			this.options = options;//初始化参数
			this.dom = document.createElement('div');
			this.dom.className = "mask";
			this.dom.style.display = this.options.show?"block":"none";
			this.dom.innerHTML = html; //渲染dom
			this.status = this.options.show?1:0;
			this.login = this.dom.querySelector(".login");
			this.close = this.dom.querySelector(".close");
			document.body.appendChild(this.dom);
		},
		bind : function(){
			var _this = this;
			if(this.options.onLogin) {
				this.login.onclick = _this.options.onLogin.bind(_this);
			}
			this.close.onclick = function(){//关闭按钮
				_this.hide();//隐藏组件
			}
			this.dom.onclick = function(){//mask操作
				_this.hide();//隐藏组件
			}
		},
		show : function(){
			this.dom.style.display = "block";
			this.status = 1;
		},
		hide : function(){
			this.dom.style.display = "none";
			this.status = 0;
		}
	};
	return UserRoleSelector;
})();