/*
	名字:	莱班矿山
	地圖:	电站大厅
	描述:	310050000
*/

function enter(pi) {
	if (pi.getQuestStatus(24088) == 1) {
		pi.warp(931040000,1);  //人偶师的房间
		pi.resetMap(931040000);   //地图刷新
	} else if (pi.getQuestStatus(23268) == 1) {
		pi.warp(931050220, 1);   //弗朗西斯的房间
	} else{
		pi.warp(931020010,1);  //弗朗西斯的房间
}
}
