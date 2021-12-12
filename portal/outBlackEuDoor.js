/*
	名字:	妖精森林
	地圖:	遭到攻击的发光洞穴路
	描述:	910150220
*/

function enter(pi) {
	if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
		pi.warp(101050000, 9);  //埃欧雷
	} else{
		pi.playerMessage(-7,"[Portal]消滅地圖中所有袭击者");
}
}
