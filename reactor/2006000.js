/*
	����:	����֮��
	�؈D:	�ŵ��Ƚ���&amp;lt;��·&gt;
	����:	920010000
*/

function act() {
	rm.mapMessage(5, "�������W�q�r�����˳��F�ڟ���֮��.");
	rm.spawnNpc(2013001);           //Ů��������
	var em = rm.getEventManager("OrbisPQ");
	if (em != null) {
		rm.givePartyExp(6000);
		em.setProperty("pre", "1");
}
}