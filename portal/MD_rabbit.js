/*
	����:	��߳�
	�؈D:	�����71��~90��
	����:	221022200
*/

var baseid = 221022200;
var dungeonid = 221023401;  //������ӵ����ص�
var dungeons = 10;

function enter(pi) {
	if (pi.getMapId() == baseid) {
		for (var i = 0; i < dungeons; i++) {
	if (pi.getPlayerCount(dungeonid + i) == 0) {
	if (pi.getPlayer().getLevel() <= 200) {
	if (pi.haveItem(4032055)) {
		pi.gainItem(4032055, -1);
		pi.warp(dungeonid + i, 0);
	} else {
		pi.playerMessage(-7,"[Portal]�]�г��З�֮����������ȯ���o���M��ԓ�؈D");
		}
	} else {
		pi.playerMessage(-7,"[Portal]�ȼ����^��200�����o���M��ԓ�؈D");
		}
		return true;
		}
		}
		pi.playerMessage(-7,"[Portal]������³����ڷ����У�Ո�Lԇ�����l��");
	} else
		pi.warp(baseid, "MD00");
		return true;
}