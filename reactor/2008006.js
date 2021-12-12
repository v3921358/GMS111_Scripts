/*
	名字:	隐秘之地
	地圖:	雅典娜禁地&amp;lt;休息室&gt;
	描述:	920010400
*/

function act() {
	rm.mapMessage(6, "音樂的聲音再次迴響在女神之塔");
	var em = rm.getEventManager("OrbisPQ");
	if (em != null) {
		em.setProperty("stage3", "1");
}
}