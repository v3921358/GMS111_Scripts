/*
	名字:	隐密之地
	地圖:	雅典娜禁地&amp;lt;中央塔&gt
	描述:	920010100
*/

function act() {
	rm.spawnNpc(2013002);                  //生命草 4001055   引导
	var em = rm.getEventManager("OrbisPQ");
	if (em != null) {
		em.setProperty("finished", "1");
}
}