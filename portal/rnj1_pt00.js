/*
	����:	���ص�ͼ
	�؈D:	���ɵ��о���
	����:	926100000
*/

function enter(pi) {
	var em = pi.getEventManager("Romeo");
	if (em != null && em.getProperty("stage1").equals("1")) {
		pi.warp(926100001, 0);  //ʵ����ͨ��
	} else {
		pi.playerMessage(-7,"[Portal]��Ҫ�������΄�");
}
}