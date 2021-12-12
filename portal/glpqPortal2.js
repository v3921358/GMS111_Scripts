/*
	名字:	组队任务
	地圖:	敏捷测试
	描述:	610030400
*/

function enter(pi) {
	var em = pi.getEventManager("CWKPQ");
	if (em != null) {
		pi.warpS(610030300, 0);
	if (!em.getProperty("glpq3").equals("10")){
	em.setProperty("glpq3", parseInt(em.getProperty("glpq3")) + 1);
		pi.mapMessage(6, "[Expedition]一個冒險家經過!");
		if (em.getProperty("glpq3").equals("10")) {
		pi.mapMessage(6, "[Expedition]通往下一階段的門已開啟。");
		pi.getMap().changeEnvironment("3pt", 2);
	}
}
}
}