/*
	����:	���ص�ͼ
	�؈D:	����ʵ����
	����:	926100200
*/

function enter(pi) {
	if (pi.getMap().getReactorByName("rnj3_out2").getState() > 0) {
		pi.warp(926100202, 1);  //�Ұ����о���2
	} else {
		pi.playerMessage(-7,"[Portal]��Ҫ�������΄�");
}
}