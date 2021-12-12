/*
	名字:	秘密地图
	地圖:	雅典娜禁地&amp;lt;中央塔&gt;
	描述:	920010600
*/

function enter(pi) {
	if (pi.getPlayer().getParty() != null && pi.isLeader()) {
		pi.warpParty(920010200,13); //雅典娜禁地&amp;lt;散步路&gt;
		pi.playPortalSE();
	} else {
		pi.playerMessage(-7,"[Portal]必須由組長帶隊才能進入此傳送點");
}
}