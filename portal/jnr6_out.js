/*
	名字:	隐藏地图
	地圖:	犹泰的办公室
	描述:	926110203
*/

function enter(pi) {
	var em = pi.getEventManager("Juliet");
	if (em != null && em.getProperty("stage5").equals("2")) {
		pi.warp(926110300, 0);  //犹泰的办公室
	} else {
		pi.playerMessage(-7,"[Portal]需要完成相关任務");
}
}