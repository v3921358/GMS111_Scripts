/*
	名字:	百草堂
	地圖:	抵达海盗船的路
	描述:	925100000
*/

function enter(pi) {
	if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
		pi.warp(925100100,0); //突破船头！
	} else {
		pi.playerMessage(-7,"[Portal]消滅地圖中所有怪物");
}
}