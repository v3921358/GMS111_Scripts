/*
	����:	���ص�ͼ
	�؈D:	��̩�İ칫��
	����:	926110300
*/

function enter(pi) {
	var em = pi.getEventManager("Romeo");
	if (em != null && em.getProperty("stage6_0").equals("0")) {
		pi.warp(926100301, 0);  //ʵ����ͨ��1
		em.setProperty("stage6_0", "1");
	} else {
		pi.playerMessage(-7,"[Portal]�˂����cֻ���Sһ���M�T�M��");
}
}