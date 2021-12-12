/*
	名字:	秘密地图
	地圖:	红茶的陷阱
	描述:	922030100
*/

function enter(pi) {
	if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
		pi.warp(220040100,0);  //时间之路&amp;lt;2&gt;
		pi.forceCompleteQuest(24084);
	} else{
		pi.playerMessage(-7,"[Portal]消滅地圖中所有怪物");
}
}
