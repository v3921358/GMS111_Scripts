/*
	����:	�������
	�؈D:	����������
	����:	610030500
*/

function enter(pi) {
	if (java.lang.Math.floor(((pi.getPlayer().getJob() % 1000) / 100) * 100 - (pi.getPlayer().getJob() % 100)) == 200 || java.lang.Math.floor(((pi.getPlayer().getJob() % 1000) / 100) * 100 - (pi.getPlayer().getJob() % 100)) == 199) {
		pi.warp(610030521,0);
	} else {
		pi.playerMessage(-7,"[Portal]ֻ�з��������M���@�����");
}
}