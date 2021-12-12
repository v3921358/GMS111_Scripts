/*
	名字:	隐藏地图
	地圖:	可疑的研究室
	描述:	926110000
*/

function enter(pi) {
	var em = pi.getEventManager("Juliet");
	if (em != null && em.getProperty("stage1").equals("1")) {
		pi.warp(926110001, 0);  //实验室通道
	} else {
		pi.playerMessage(-7,"[Portal]需要完成相关任務");
}
}