/*
	名字:	可可岛
	地圖:	火箭出发
	描述:	912060200
*/

function enter(pi) {
	if (!pi.isQuestFinished(2568)) {
		pi.showInstruction("I should go and get into the cannon.", 150, 5);
		pi.forceCompleteQuest(2568);
		pi.DisableUI(true);
		pi.EnableUI(1);
		pi.sendDirectionStatus(3,2);
		pi.sendDirectionStatus(4,0);
}
}