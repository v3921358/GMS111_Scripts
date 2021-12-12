/*
	名字:	组队任务
	地圖:	凝聚力测试
	描述:	610030500
*/

function enter(pi) {
	var em = pi.getEventManager("CWKPQ");
	if (em != null) {
	if (!em.getProperty("glpq5").equals("5")){
		pi.playerMessage(-7,"[Portal]需要完成相关任務");
	} else {
		pi.removeAll(4001256);
		pi.removeAll(4001257);
		pi.removeAll(4001258);
		pi.removeAll(4001259);
		pi.removeAll(4001260);
		pi.warp(610030600, 0);
	}
}
}