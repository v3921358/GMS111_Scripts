/*
	����:	���ص�ͼ
	�؈D:	��̩�İ칫��
	����:	926110300
*/

function enter(pi) {
	var em = pi.getEventManager("Romeo");
	if (em != null && em.getProperty("stage6_3").equals("0")) {
		pi.warp(926100304, 0);  //ʵ����ͨ��4
		em.setProperty("stage6_3", "1");
	} else {
		pi.playerMessage(-7,"[Portal]�˂����cֻ���Sһ���M�T�M��");
}
}