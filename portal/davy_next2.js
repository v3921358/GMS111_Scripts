/*
	名字:	百草堂
	地圖:	925100200
	描述:	925100200
*/

function enter(pi) {
	if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
		pi.warp(925100300,0); //next
	} else {
		pi.playerMessage(-7,"[Portal]消滅地圖中所有怪物");
}
}