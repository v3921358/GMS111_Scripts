/*
	名字:	组队任务
	地圖:	遗忘储藏间
	描述:	610030200
*/

function act() {
	var em = rm.getEventManager("CWKPQ");
	if (em != null) {
	if (rm.getMap().getId() == 610030200) {
		rm.mapMessage(6, "弓箭手標誌已經被啟動.");
		em.setProperty("glpq2", parseInt(em.getProperty("glpq2")) + 1);
	if (em.getProperty("glpq2").equals("5")) { //all 5 done
		rm.mapMessage(6, "The Antellion grants you access to the next portal! Proceed!");
		rm.getMap().changeEnvironment("2pt", 2);
		}
	} else if (rm.getMap().getId() == 610030300) {
		rm.mapMessage(6, "弓箭手標誌已經被啟動，你聽到齒輪轉動的聲音，Menhir防禦系統也已啟動.");
		em.setProperty("glpq3", parseInt(em.getProperty("glpq3")) + 1);
		rm.getMap().moveEnvironment("menhir1", 1);
		rm.getMap().moveEnvironment("menhir2", 1);
	if (em.getProperty("glpq3").equals("10")) {
		rm.mapMessage(6, "The Antellion grants you access to the next portal! Proceed!");
		rm.getMap().changeEnvironment("3pt", 2);
}
}
}
}