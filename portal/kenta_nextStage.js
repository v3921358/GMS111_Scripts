/*
	名字:	秘密地图
	地圖:	危海1
	描述:	923040100
*/

function enter(pi) {
	if (pi.getPlayer().getParty() != null) {
		var cleared = false;
		switch(pi.getMapId() / 10) {
		case 92304010:
			cleared = pi.getMap().getAllMonstersThreadsafe().size() == 0;
			break;
		case 92304020:
			cleared = pi.haveItem(2430364, 20);
			break;
		case 92304030:
			cleared = pi.getPlayer().getEventInstance() != null && pi.getPlayer().getEventInstance().getProperty("kentaSaving") != null && pi.getPlayer().getEventInstance().getProperty("kentaSaving").equals("0");
			break;
			}
		if (cleared) {
			pi.removeAll(2430364);
			pi.warpParty(pi.getMapId() + 100);
			pi.playPortalSE();
		} else {
			pi.playerMessage(-7,"[Portal]需要完成相关任務");
			}
		} else {
			pi.playerMessage(-7,"[Portal]需要完成相关任務");
}
}