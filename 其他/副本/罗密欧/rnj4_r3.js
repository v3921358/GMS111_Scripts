/*
	名字:	隐藏地图
	地圖:	犹泰的办公室
	描述:	926110300
*/

function enter(pi) {
	var em = pi.getEventManager("Romeo");
	if (em != null && em.getProperty("stage6_2").equals("0")) {
		pi.warp(926100303, 0);  //实验室通道3
		em.setProperty("stage6_2", "1");
	} else {
		pi.playerMessage(-7,"[Portal]此傳送點只允許一名組員進入");
}
}