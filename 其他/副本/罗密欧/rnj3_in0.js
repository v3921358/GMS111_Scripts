/*
	����:	���ص�ͼ
	�؈D:	����ʵ����
	����:	926100200
*/

function enter(pi) {
	if (pi.getMap().getReactorByName("rnj3_out1").getState() > 0) {
		pi.warp(926100201, 1);  //�Ұ����о���1
	} else {
		pi.playerMessage(-7,"[Portal]��Ҫ�������΄�");
}
}