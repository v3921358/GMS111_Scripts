/*
	名字:	卡帕莱特研究所
	地圖:	研究所B-3 地区
	描述:	261020600
*/

function enter(pi) {
	if (pi.getQuestStatus(3309) == 1) {
		pi.warp(926120000);  //研究所A-3 地区
	} else {
		pi.warp(261020700,1);  //研究所A-3 地区
}
}
