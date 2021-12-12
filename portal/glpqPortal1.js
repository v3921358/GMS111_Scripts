/*
	名字:	组队任务
	地圖:	遗忘储蓄间
	描述:	610030200
*/

function enter(pi) {
	var em = pi.getEventManager("CWKPQ");
	if (em != null) {
	if (em.getProperty("glpq2").equals("5")){
		pi.warp(610030300, 0);
	} else {
		pi.playerMessage(-7,"[Portal]需要完成相关任務");
}
}
}