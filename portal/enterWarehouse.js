/*
	名字:	阿尔泰营地
	地圖:	营地会议室
	描述:	300000010
*/

function enter(pi) {
	if (pi.isQuestFinished(21752)) {//判断是否完成任务
		pi.warp(930010000,1);  //危险的图书馆
	} else {
		pi.warp(300000011,1);  //图书馆
}
}
