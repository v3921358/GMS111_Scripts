/*
	����:	�ƽ���Ժ
	�؈D:	950101000
	����:	950101000
*/

function enter(pi) {
	if (pi.getPlayerCount(809061010) == 0 && pi.getPlayerCount(950101010) == 0 ) {
		pi.openNpc(9000082,"9000082_1");
	} else {
		pi.playerMessage(-7,"[Portal]�΄����ڈ����У�Ո�Lԇ�����l��");
}
}
