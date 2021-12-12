/*
	名字:	玩具城
	地圖:	玩具工厂&amp;lt;第2工程&gt;第5地区
	描述:	220030400
*/

function act(){
	rm.playerMessage(5,"你發現了一個秘密工廠");
	if (Math.random() < .5)
		rm.warp(922000020);
	else
		rm.warp(922000021);
}