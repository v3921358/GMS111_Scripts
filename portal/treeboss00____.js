/*
	����:	�¼���
	�؈D:	���������ż� I
	����:	541020700
*/

function enter(pi) {
	if (pi.getPlayerCount(541020800) <= 0) { // krex. Map
	var krexMap = pi.getMap(541020800);  //ǧ���������ż���
		krexMap.resetFully();
		pi.playPortalSE();
		pi.warp(541020800, "sp");
		return true;
	} else {
	if (pi.getMap(541020800).getSpeedRunStart() == 0 && (pi.getMonsterCount(541020800) <= 0 || pi.getMap(541020800).isDisconnected(pi.getPlayer().getId()))) {
		pi.playPortalSE();
		pi.warp(541020800, "sp");
		return true;
	} else {
		pi.playerMessage(-7,"[Portal]�΄����ڈ����У�Ո�Lԇ�����l��");
		return false;
}
}
}