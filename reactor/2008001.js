/*
	����:	����֮��
	�؈D:	�ŵ��Ƚ���&amp;lt;������&gt
	����:	920010100
*/

function act() {
	rm.mapMessage(6, "Ů����ĵ��ĉK�ѽ��Ż�ԭλ.");  //Ů����ĵ��Ŀ���Ƭ 4001049
	var em = rm.getEventManager("OrbisPQ");
	if (em != null) {
		em.setProperty("stage", parseInt(em.getProperty("stage")) + 1);
		var r = rm.getMap().getReactorByName("minerva");
		r.forceHitReactor(r.getState() + 1);
}
}