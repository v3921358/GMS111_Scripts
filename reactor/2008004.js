/*
	名字:	隐密之地
	地圖:	雅典娜禁地&amp;lt;中央塔&gt
	描述:	920010100
*/

function act() {
	rm.mapMessage(6, "女神像的第三塊已經放回原位.");    //女神像的第三块碎片 4001048
	var em = rm.getEventManager("OrbisPQ");
	if (em != null) {
		em.setProperty("stage", parseInt(em.getProperty("stage")) + 1);
		var r = rm.getMap().getReactorByName("minerva");
		r.forceHitReactor(r.getState() + 1);
}
}