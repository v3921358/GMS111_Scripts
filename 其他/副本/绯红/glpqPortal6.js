/*
	名字:	组队任务
	地圖:	宗师议会大厅
	描述:	610030600
*/

function enter(pi) {
try {
	var em = pi.getEventManager("CWKPQ");
	if (em != null) {
	if (em.getProperty("glpq6") == null || !em.getProperty("glpq6").equals("3") || pi.getPlayer().getEventInstance() == null || !pi.getPlayer().getEventInstance().getName().startsWith("CWKPQ")){
		pi.playerMessage(-7,"[Portal]需要完成相关任務");
	} else {
		pi.warp(610030700, 0);
		}
		}
	} catch(e) {
		pi.playerMessage("Error: " + e);
}
}