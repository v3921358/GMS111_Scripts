/*
	名字:	女皇之路
	地圖:	演武场入口
	描述:	第三演武场
*/

function enter(pi) {
	if (pi.getQuestStatus(20601) == 1 || pi.getQuestStatus(20602) == 1 || pi.getQuestStatus(20603) == 1 || pi.getQuestStatus(20604) == 1 || pi.getQuestStatus(20605) == 1) {
	if (pi.getPlayerCount(913010200) == 0) {
		pi.resetMap(913010200);   //地图刷新
		pi.warp(913010200, 0);  //第三演武场
	} else {
		pi.playerMessage(-7,"[Portal]任務正在執行中，請嘗試其它頻道");
		}
	} else {
		pi.playerMessage(-7,"[Portal]進入第三演武場唯一途徑是接受100級技能培訓");
}
}