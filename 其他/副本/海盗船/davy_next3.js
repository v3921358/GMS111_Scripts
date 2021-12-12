/*
	名字:	百草堂
	地圖:	925100300
	描述:	925100300
*/

function enter(pi) {
	if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
		pi.warp(925100400,0); //击退海盗！
	} else {
		pi.playerMessage(-7,"[Portal]消滅地圖中所有怪物");
}
}