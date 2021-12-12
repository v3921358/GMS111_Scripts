/*
	名字:	组队任务
	地圖:	智力测试
	描述:	610030400
*/

function act() {
	var em = rm.getEventManager("CWKPQ");
	if (em != null) {
		rm.mapMessage(6, "法師標誌已經被啟動.");
		em.setProperty("glpq4", parseInt(em.getProperty("glpq4")) + 1);
	if (em.getProperty("glpq4").equals("5")) { //all 5 done
		rm.mapMessage(6, "The Antellion grants you access to the next portal! Proceed!");
		rm.getMap().changeEnvironment("4pt", 2);
}
}
}