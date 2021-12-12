/*
	名字:	组队任务
	地圖:	凝聚力测试
	描述:	610030500
*/

function act() {
	var em = rm.getEventManager("CWKPQ");
	if (em != null) {
		rm.mapMessage(6, "魔力法杖被還原為大師的遺物.");
		em.setProperty("glpq5", parseInt(em.getProperty("glpq5")) + 1);
	if (em.getProperty("glpq5").equals("5")) { //all 5 done
		rm.mapMessage(6, "The Antellion grants you access to the next portal! Proceed!");
		rm.getMap().changeEnvironment("5pt", 2);
}
}
}