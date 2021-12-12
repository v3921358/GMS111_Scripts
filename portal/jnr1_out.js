/*
	名字:	秘密地图
	地圖:	实验室通道
	描述:	926110001
*/

function enter(pi) {
	if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
		pi.warp(926110100, 0);  //不悦的实验室
	} else {
		pi.playerMessage(-7,"[Portal]消滅地圖中所有怪物");
}
}