/*
	名字:	组队任务
	地圖:	智力测试
	描述:	610030400
*/

function enter(pi) {
	var em = pi.getEventManager("CWKPQ");
	if (em != null) {
	if (!em.getProperty("glpq4").equals("5")){
		pi.playerMessage(-7,"[Portal]需要完成相关任務");
	} else {
		pi.warp(610030500, 0);
}
}
}