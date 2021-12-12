/*
	名字:	隐藏地图
	地圖:	和玛玛哈的对决
	描述:	914020000
*/

function enter(pi) {
	if (pi.getMap().getAllMonstersThreadsafe().size() != 0) {
		pi.playerMessage(-7,"[Portal]消滅地圖中所有怪物");
		return false;
	} else {
		pi.warp(140000000, 0);  //里恩
}
}