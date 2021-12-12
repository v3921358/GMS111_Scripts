/*
	名字:	潘姆之家
	地圖:	农场中心
	描述:	100030300
*/

function enter(pi) {
	if (pi.isQuestActive(22005)) {
		pi.warp(900020100,0);  //茂密的森林
	} else{
		pi.warp(100030301,0);  //阴郁殿堂
}
}
