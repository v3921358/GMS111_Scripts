/*
	名字:	黑暗领主
	地圖:	燃烧森林2
	描述:	914000210
*/

function enter(pi) {
	pi.teachSkill(20000016, 0, -1);
	pi.teachSkill(20000016, 1, 0);
	pi.playPortalSE();
	pi.warp(914000220, 1); //燃烧森林3
	return true;
}