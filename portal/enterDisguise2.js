/*
	名字:	女皇之路
	地圖:	修炼森林1
	描述:	130010000
*/

function enter(pi) {
	if (pi.getQuestStatus(20303) == 1) {  //完成任务条件
	if (pi.haveItem(4032179, 1)) { 
		pi.resetMap(913002100);   //地图刷新
		pi.warp(913002100, 1);
		pi.spawnNpc(1104102, 3307, 88);
	} else {
		pi.playerMessage(-7,"[Portal]必需持有聖地蒐索證");
		}
	} else {
		pi.warp(130010020, "out00");  //提布之林
}
}