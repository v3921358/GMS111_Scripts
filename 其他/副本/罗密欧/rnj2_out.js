/*
	����:	���ص�ͼ
	�؈D:	���õ�ʵ����
	����:	926100100
*/

function enter(pi) {
	var em = pi.getEventManager("Romeo");
	if (em != null && em.getProperty("stage3").equals("3")) {
		pi.warp(926100200, 0);  //����ʵ����
	} else {
		pi.playerMessage(-7,"[Portal]��Ҫ�������΄�");
}
}