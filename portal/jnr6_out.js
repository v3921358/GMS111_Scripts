/*
	����:	���ص�ͼ
	�؈D:	��̩�İ칫��
	����:	926110203
*/

function enter(pi) {
	var em = pi.getEventManager("Juliet");
	if (em != null && em.getProperty("stage5").equals("2")) {
		pi.warp(926110300, 0);  //��̩�İ칫��
	} else {
		pi.playerMessage(-7,"[Portal]��Ҫ�������΄�");
}
}