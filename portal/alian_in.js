/*
	名字:	马莱尼西亚岛
	地圖:	克兰卡丛林盆地
	描述:	600010200
*/

function enter(pi) {
	if (pi.getQuestStatus(28746) == 1) {
		pi.getPlayer().updateQuestCustomData(28746,"1");
		pi.warp(600010300,1);   //丛林山谷
		pi.playerMessage(-7,"[Portal]这里是造成地震的原因吗？");
	} else if (pi.isQuestFinished(28746)) { 
		pi.warp(600010300,1);   //丛林山谷
	} else {
		pi.playerMessage(-7,"[Portal]需要接受相关任务");
}
}