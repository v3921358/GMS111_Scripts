/*
	名字:	玩具城
	地圖:	时间塔的本源
	描述:	220080001
*/

function enter(pi) {
	if (pi.haveItem(4031172)) {  //完成任务条件
	if (pi.getPlayerCount(220080001) == 0) { 
		pi.warp(220080001, "st00");  //时间塔的本源
	} else {
		pi.playerMessage(-7,"[Portal]任務正在執行中，請嘗試其它頻道");
		}
	} else {
		pi.playerMessage(-7,"[Portal]需要攜帶玩具城獎牌");
}
}