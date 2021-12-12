/*
	名字:	女皇之路
	地圖:	演武场入口
	描述:	第四演武场入口
*/

function enter(pi) {
	if (pi.getQuestStatus(20611) == 1 || pi.getQuestStatus(20612) == 1 || pi.getQuestStatus(20613) == 1 || pi.getQuestStatus(20614) == 1 || pi.getQuestStatus(20615) == 1) {
	if (pi.getPlayerCount(913020300) == 0) {
		var map = pi.getMap(913020300);
		map.killAllMonsters(false);
		map.respawn(true);
		pi.warp(913020300, 1);
	} else {
		pi.playerMessage(-7,"[Portal]任務正在執行中，請嘗試其它頻道");
		}
	} else {
		pi.playerMessage(-7,"[Portal]第四演武場僅適用於正在接受110級技能培訓的騎士。");
}
}