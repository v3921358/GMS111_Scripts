/*
	名字:	诺特勒斯
	地圖:	寝室
	描述:	912060500
*/

function enter(pi) {
		pi.EnableUI(0);//关闭动画
		pi.DisableUI(false);
	if (pi.isQuestFinished(2568) && pi.getQuestStatus(2570) == 0) {
		pi.showInstruction("Where am I? My head hurts...", 150, 5);
}
}
