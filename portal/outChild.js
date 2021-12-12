/*
	名字:	黑暗领主
	地圖:	末日森林
	描述:	914000300
*/

function enter(pi) {
	if (pi.getQuestStatus(21001) == 0) {
		pi.warp(914000220, 2);  //燃烧森林3
	} else {
		pi.warp(914000400, 2);  //燃烧森林3 
}
}