/*
	����:	���ܵ�ͼ
	�؈D:	����ʵ����
	����:	926110200
*/

function enter(pi) {
	var em = pi.getEventManager("Juliet");
	if (em != null && em.getProperty("stage4").equals("2")) {
		pi.warp(926110203, 0);  //��̩�İ칫��
	} else {
		pi.playerMessage(-7,"[Portal]��Ҫ�������΄�");
}
}