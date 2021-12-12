/*
	名字:	女皇之路
	地圖:	修炼森林2
	描述:	130010100
*/

function enter(pi) {
	if (pi.getQuestStatus(20301) == 1) {  //完成任务条件
	if (pi.haveItem(4032179, 1)) { 
		pi.resetMap(913002200);   //地图刷新
		pi.warp(913002200, 1);
		pi.spawnNpc(1104100, 263, 88);
	} else {
		pi.playerMessage(-7,"[Portal]必需持有聖地蒐索證");
		}
	} else {
		pi.warp(130010110, "out00");  //提姆之林
}
}