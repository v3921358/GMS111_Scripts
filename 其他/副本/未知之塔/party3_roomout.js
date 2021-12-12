/*
	名字:	隐秘之地
	地圖:	雅典娜禁地&amp;lt;休息室&gt;
	描述:	920010400
*/

function enter(pi) {
	if (pi.getPlayer().getParty() != null && pi.isLeader()) {
		pi.warpParty(920010100,3); //雅典娜禁地&amp;lt;中央塔&gt;
		pi.playPortalSE();
	} else {
		pi.playerMessage(-7,"[Portal]必須由組長帶隊才能進入此傳送點");
}
}