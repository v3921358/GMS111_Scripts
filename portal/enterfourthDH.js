/*
	����:	Ů��֮·
	�؈D:	���䳡���
	����:	�������䳡���
*/

function enter(pi) {
	if (pi.getQuestStatus(20611) == 1 || pi.getQuestStatus(20612) == 1 || pi.getQuestStatus(20613) == 1 || pi.getQuestStatus(20614) == 1 || pi.getQuestStatus(20615) == 1) {
	if (pi.getPlayerCount(913020300) == 0) {
		var map = pi.getMap(913020300);
		map.killAllMonsters(false);
		map.respawn(true);
		pi.warp(913020300, 1);
	} else {
		pi.playerMessage(-7,"[Portal]�΄����ڈ����У�Ո�Lԇ�����l��");
		}
	} else {
		pi.playerMessage(-7,"[Portal]����������H�m������ڽ���110��������Ӗ���Tʿ��");
}
}