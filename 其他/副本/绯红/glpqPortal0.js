/*
	名字:	组队任务
	地圖:	密室走廊
	描述:	610030100
*/

function enter(pi) {
	var em = pi.getEventManager("CWKPQ");
	if (em != null) {
	if (em.getProperty("glpq1").equals("1")) {
		em.setProperty("glpq1", "2");
		pi.warp(pi.getMapId(), 0);
		pi.mapMessage("[Expedition] 一個冒險家穿過了入口！");
	} else if (em.getProperty("glpq1").equals("2")){
		pi.warp(610030200, 0);
	} else {
		pi.playerMessage(-7,"[Portal]組長請先與傑克恩交談，瞭解情况");
}
}
}