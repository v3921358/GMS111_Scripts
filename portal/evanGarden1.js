/*
	����:	������
	�؈D:	ǰԺ
	����:	100030102
*/

function enter(pi) {
	if (pi.isQuestActive(22008)) {
		pi.warp(100030103, "west00");  //��Ժ
	} else {
		pi.playerMessage(-7,"[Portal]��Ҫ�����������");
}
}