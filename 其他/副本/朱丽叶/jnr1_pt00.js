/*
	����:	���ص�ͼ
	�؈D:	���ɵ��о���
	����:	926110000
*/

function enter(pi) {
	var em = pi.getEventManager("Juliet");
	if (em != null && em.getProperty("stage1").equals("1")) {
		pi.warp(926110001, 0);  //ʵ����ͨ��
	} else {
		pi.playerMessage(-7,"[Portal]��Ҫ�������΄�");
}
}