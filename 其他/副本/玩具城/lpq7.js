/*
	����:	���ܵ�ͼ
	�؈D:	��������&amp;lt;��4�׶�&gt;
	����:	922010700
*/

function enter(pi) {
	var eim = pi.getPlayer().getEventInstance();
	if (eim.getProperty("stage4status") == null) { // do nothing; send message to player
		pi.playerMessage(-7,"[Portal]��Ҫ�������΄�");
	} else {
		pi.warpParty(pi.getMapId() + 100, 0);  //��������&amp;lt;��5�׶�&gt;
}
}