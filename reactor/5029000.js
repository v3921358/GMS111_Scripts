/*
	名字:	外星基地
	地圖:	502023000
	描述:	502023000
*/

function act() {
	var eim = rm.getPlayer().getEventInstance();
	if (eim != null && eim.getProperty("stage5") != null) {
	var e = parseInt(eim.getProperty("stage5"));
	if (e == 1) {
		rm.mapMessage("門已經打開了.");
	} else if (e > 1) {
		rm.spawnMonster(9420024 + (parseInt(eim.getProperty("mode")) * 6));
		rm.spawnMonster(9420027 + (parseInt(eim.getProperty("mode")) * 6));
		rm.spawnMonster(9420029 + (parseInt(eim.getProperty("mode")) * 6));
		rm.mapMessage("怪物被召喚了.");
	} else if (e <= 0) {
		return;
		}
		eim.setProperty("stage5", "" + (e-1));
}
}