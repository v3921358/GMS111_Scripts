/*
	名字:	秘密地图
	地圖:	废弃的塔&amp;lt;第2阶段&gt;
	描述:	922010400
*/

function enter(pi) {
	var eim = pi.getPlayer().getEventInstance();
	if (eim.getProperty("stage2status") == null) { // do nothing; send message to player
		pi.playerMessage(-7,"[Portal]需要完成相关任務");
	} else {
		pi.warpParty(pi.getMapId() + 200, 0);
}
}
