/*
	名字:	神殿入口
	地圖:	时间裂缝
	描述:	272000000
*/

function enter(pi) {
	if (pi.isQuestFinished(31179)) {  //完成任务
		pi.warp(272020000, 0); //扭曲时间神殿1
	} else {
		pi.warp(272000100, 1);  //燃烧的神木村1
}
}