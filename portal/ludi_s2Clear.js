/*
	����:	���ܵ�ͼ
	�؈D:	��������&amp;lt;��2�׶�&gt;
	����:	922010400
*/

function enter(pi) {
	var eim = pi.getPlayer().getEventInstance();
	if (eim.getProperty("stage2status") == null) { // do nothing; send message to player
		pi.playerMessage(-7,"[Portal]��Ҫ�������΄�");
	} else {
		pi.warpParty(pi.getMapId() + 200, 0);
}
}
