/*
	名字:	秘密走廊
	地圖:	狮子王之城
	描述:	921140000
*/

function enter(pi) {
	if (pi.getMap().getAllMonstersThreadsafe().size() == 1) {
		pi.warp(921140001, 3);  //第四座塔
	} else {
		pi.playerMessage(-7,"[Portal]消滅地圖中所有怪物");
}
}