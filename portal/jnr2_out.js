/*
	名字:	隐藏地图
	地圖:	不悦的实验室
	描述:	926110100
*/

function enter(pi) {
	var em = pi.getEventManager("Juliet");
	if (em != null && em.getProperty("stage3").equals("3")) {
		pi.warp(926110200, 0);  //特殊实验室
	} else {
		pi.playerMessage(-7,"[Portal]需要完成相关任務");
}
}