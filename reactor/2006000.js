/*
	名字:	秘密之地
	地圖:	雅典娜禁地&amp;lt;岔路&gt;
	描述:	920010000
*/

function act() {
	rm.mapMessage(5, "當燈光閃爍時，有人出現在燈光之外.");
	rm.spawnNpc(2013001);           //女神塔副本
	var em = rm.getEventManager("OrbisPQ");
	if (em != null) {
		rm.givePartyExp(6000);
		em.setProperty("pre", "1");
}
}