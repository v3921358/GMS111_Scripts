/*
	名字:	武陵道场
	地圖:	武陵道场1楼
	描述:	925020100
*/

function enter(pi) {
	if (!pi.haveMonster(9300216)) {
		pi.playerMessage(-7,"[Portal]消滅地圖中所有怪物");
	} else {
		pi.dojoAgent_NextMap(true, false);
}
}