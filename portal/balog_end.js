/*
	名字:	蝙蝠怪神殿
	地圖:	蝙蝠怪的消失地
	描述:	105100401
*/

function enter(pi) {
	if (!pi.canHold(4001261,1)) {
		pi.playerMessage(-7,"[Portal]無法收納物品，請清理背包空間");
	} else {
		pi.gainExpR(pi.getPlayer().getMapId() == 105100301 ? 130000 : 260000);
		pi.gainNX(pi.getPlayer().getMapId() == 105100301 ? 2000 : 3000);
		pi.gainItem(4001261,1);
		pi.playPortalSE();
		pi.warp(105100100,0);
}
}