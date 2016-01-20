function Banner (obj) {
	console.log(obj);
	this.parents = obj.elem;
	this.arr_src = obj.img_src;
	this.url_site = obj.url_site;
	this.parents.style.width = obj.w + 'px';
	this.parents.style.height = obj.h + 'px';
	this.createElemBan();
	this.loadImgBanner();
}
Banner.prototype = {
	createElemBan: function(){
		var elem = this.parents;
		var link = document.createElement('a');
		link.href = this.url_site;
		elem.appendChild(link);

		var div_cont_ban = document.createElement('div');
		div_cont_ban.className = 'cont_ban';
		link.appendChild(div_cont_ban);
		this.div_cont_ban = div_cont_ban;
		var btn = document.createElement("div");
		btn.className = 'btn';
		div_cont_ban.appendChild(btn);

	},
	loadImgBanner: function(){
		var last_index = localStorage.getItem("id_bnr");
		if(!this.arr_src[last_index]) last_index = null;
		var num = this.nextIdBanner(last_index);
		var url = this.arr_src[num];
		console.log(url);
		this.div_cont_ban.style.backgroundImage = 'url('+url+')';
		localStorage.setItem('id_bnr', num);


	},
	nextIdBanner: function(last){
		var num = getRandomIntInclusive(this.arr_src.length);

		while(last !== null && last == num){
			num = getRandomIntInclusive(this.arr_src.length);
		}
		
		return num

		function getRandomIntInclusive(max) {
			return Math.floor(Math.random() * max);
		}
	}
}