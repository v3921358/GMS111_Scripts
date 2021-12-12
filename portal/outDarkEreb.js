/*
	名字:	隐藏地图
	地圖:	圣地
	描述:	913030000
*/

function enter(pi) {
	if (pi.isQuestFinished(20407)) {
		pi.warp(924010200,0); //黑魔女的洞穴
	} else {
		pi.playerMessage(-7,"[Portal]必須先打敗黑巫婆！");
}
}