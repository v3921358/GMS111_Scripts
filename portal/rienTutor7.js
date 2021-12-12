/*
	名字:	冰雪岛
	地圖:	里恩西部地区
	描述:	140010000
*/

function enter(pi) {
	if (pi.getQuestStatus(21014) == 2 || pi.getPlayer().getJob() != 2000) {
		pi.warp(140010100, 2);  //里恩修炼场入口
	} else {
		pi.playerMessage(-7,"[Portal]裡恩鎮在右邊，走右邊的入口，進城去見莉莉");
}
}