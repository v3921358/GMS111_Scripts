/*
	名字:	玩具塔
	地圖:	废弃的塔&amp;lt;第1阶段&gt;
	描述:	922010100
*/

function enter(pi) {
	var eim = pi.getPlayer().getEventInstance();
	if (eim.getProperty("stage1status") == null) { // do nothing; send message to player
		pi.playerMessage(-7,"[Portal]需要完成相关任務");
	} else {
		pi.warpParty(pi.getMapId() + 300, 0);
}
}