/*
	����:	�����
	�؈D:	��������&amp;lt;��1�׶�&gt;
	����:	922010100
*/

function enter(pi) {
	var eim = pi.getPlayer().getEventInstance();
	if (eim.getProperty("stage1status") == null) { // do nothing; send message to player
		pi.playerMessage(-7,"[Portal]��Ҫ�������΄�");
	} else {
		pi.warpParty(pi.getMapId() + 300, 0);
}
}