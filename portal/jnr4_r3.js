/*
	����:	���ص�ͼ
	�؈D:	��̩�İ칫��
	����:	926110300
*/

function enter(pi) {
	var em = pi.getEventManager("Juliet");
	if (em != null && em.getProperty("stage6_2").equals("0")) {
		pi.warp(926110303, 0);  //ʵ����ͨ��3
		em.setProperty("stage6_2", "1");
	} else {
		pi.playerMessage(-7,"[Portal]�˂����cֻ���Sһ���M�T�M��");
}
}