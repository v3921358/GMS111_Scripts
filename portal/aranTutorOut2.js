/*
	名字:	黑暗领主
	地圖:	燃烧森林1
	描述:	914000200
*/

function enter(pi) {
	pi.teachSkill(20000014, 0, -1);
	pi.teachSkill(20000015, 0, -1);
	pi.teachSkill(20000014, 1, 0);
	pi.teachSkill(20000015, 1, 0);
	pi.playPortalSE();
	pi.warp(914000210, 1); //燃烧森林2
	return true;
}