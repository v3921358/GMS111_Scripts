/*
	����:	Ģ����
	�؈D:	Ħ��¥3
	����:	106021000
*/

var baseid = 106021000;
var dungeonid = 106021001;   //������
var dungeons = 10;

function enter(pi) {
	if (pi.getPlayer().getMapId() == baseid) {
		for(var i = 0; i < dungeons; i++) {
	if (pi.getMap(dungeonid + i).getCharactersSize() == 0) {
		pi.warp(dungeonid + i, 0);
		return true;
		}
		}
		pi.playerMessage(5, "����������³ǬF�ڶ���ʹ���У�Ո������ԇ��");
		return false;
	} else {
		pi.warp(baseid, "in00");
}
}
