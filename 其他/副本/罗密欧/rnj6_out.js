/*
	����:	���ص�ͼ
	�؈D:	��̩�İ칫��
	����:	926100300
*/

function enter(pi) {
	var em = pi.getEventManager("Romeo");
	if (em != null && em.getProperty("stage5").equals("2")) {
		pi.warp(926100300, 0);  //��̩�İ칫��
	} else {
		pi.playerMessage(-7,"[Portal]��Ҫ�������΄�");
}
}