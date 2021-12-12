/*
	名字:	结婚小镇
	地圖:	670010600
	描述:	670010600
*/

function enter(pi) {
try {
	var reactorName = "";
	var gateBase = "";
	switch(pi.getPortal().getId()) {
	case 18:
		reactorName = "gate00";
		gateBase = "gt00PI";
		break;
	case 19:
		reactorName = "gate01";
		gateBase = "gt01PI";
		break;
	case 20:
		reactorName = "gate02";
		gateBase = "gt02PI";
		break;
	case 21:
		reactorName = "gate03";
		gateBase = "gt03PI";
		break;
	case 22:
		reactorName = "gate04";
		gateBase = "gt04PI";
		break;
	case 23:
		reactorName = "gate05";
		gateBase = "gt05PI";
		break;
	case 24:
		reactorName = "gate06";
		gateBase = "gt06PI";
		break;
		}
	// if (pi.getMap().getReactorByName(reactorName).getState() >= 4) {
	if (pi.getPlayer().getLevel() < 250) { //自己添加
		pi.warp(670010600, gateBase + "A");
	//} else {
		//pi.warp(670010600, gateBase + "B");
		}
	}catch(e) {
		pi.playerMessage(5, "Error: " + e);
}
}