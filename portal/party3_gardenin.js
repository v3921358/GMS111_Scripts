/*
	名字:	隐密之地
	地圖:	雅典娜禁地&amp;lt;庭园&gt;
	描述:	920010800
*/

function enter(pi) {
	if (pi.getPlayer().getParty() != null && pi.isLeader() && pi.haveItem(4001055,1)) {
		pi.warpParty(920010100,3); //雅典娜禁地&amp;lt;中央塔&gt;
	} else {
		pi.playerMessage(-7,"[Portal]必須由組長持有生命草才能進入開啟此傳送點");
}
}