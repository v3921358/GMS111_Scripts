/*
	名字:	隐藏地图
	地圖:	犹泰的办公室
	描述:	926110300
*/

function enter(pi) {
	var em = pi.getEventManager("Juliet");
	if (em != null && em.getProperty("stage6_3").equals("0")) {
		pi.warp(926110304, 0);  //实验室通道4
		em.setProperty("stage6_3", "1");
	} else {
		pi.playerMessage(-7,"[Portal]此傳送點只允許一名組員進入");
}
}