/*
	����:	�������
	�؈D:	����������
	����:	610030500
*/

function enter(pi) {
	if (java.lang.Math.floor(((pi.getPlayer().getJob() % 1000) / 100) * 100 - (pi.getPlayer().getJob() % 100)) == 400) {
		pi.warp(610030530,0);
	} else {
		pi.playerMessage(-7,"[Portal]ֻ��С͵�����M���@�����");
}
}