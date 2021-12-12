/*
	名字:	组队任务
	地圖:	敏捷测试
	描述:	610030300
*/

function enter(pi) {
	var em = pi.getEventManager("CWKPQ");
	if (em != null) {
	if (!em.getProperty("glpq3").equals("10")){
		pi.playerMessage(-7,"[Portal]需要完成相关任務");
	} else {
		pi.warp(610030400, 0);
}
}
}