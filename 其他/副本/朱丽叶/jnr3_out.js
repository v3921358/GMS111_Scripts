/*
	名字:	秘密地图
	地圖:	特殊实验室
	描述:	926110200
*/

function enter(pi) {
	var em = pi.getEventManager("Juliet");
	if (em != null && em.getProperty("stage4").equals("2")) {
		pi.warp(926110203, 0);  //犹泰的办公室
	} else {
		pi.playerMessage(-7,"[Portal]需要完成相关任務");
}
}