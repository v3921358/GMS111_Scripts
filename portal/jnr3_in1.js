/*
	����:	���ܵ�ͼ
	�؈D:	����ʵ����
	����:	926110200
*/

function enter(pi) {
	if (pi.getMap().getReactorByName("jnr3_out2").getState() > 0) {
		pi.warp(926110202, 1);  //�Ұ����о���2
	} else {
		pi.playerMessage(-7,"[Portal]��Ҫ�������΄�");
}
}