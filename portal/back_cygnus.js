/*
	名字:	骑士团要塞
	地圖:	破烂的庭院
	描述:	271040110
*/

function enter(pi) {
	if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
		pi.warp(271040200,0); //希纳斯的后院
	} else {
		pi.playerMessage(-7,"[Portal]任務正在執行中，請嘗試其它頻道");
}
}