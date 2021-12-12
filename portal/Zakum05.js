/*
	名字:	神秘岛
	地圖:	扎昆入口
	描述:	211042300
*/

function enter(pi) {
	if (pi.getQuestStatus(100200) != 2) {
		pi.playerMessage(-7,"[Portal]你還未完成挑戰紮昆的相關任務。");
		return false;
		} 
	if (!pi.haveItem(4001017)) {
		pi.playerMessage(-7,"[Portal]由於你沒有火焰之眼，所以不能挑戰紮昆。");
		return false;
		}
		pi.playPortalSE();
		pi.warp(pi.getPlayer().getMapId() + 100, "west00");
		return true;
}