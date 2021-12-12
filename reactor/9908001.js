/*
	名字:	魔女塔
	地圖:	魔女塔1层
	描述:	980041000
*/

function act() {
	var eim = rm.getEventInstance();
	if (eim != null) {
	var keys = eim.getProperty("goldkey");
		keys++
		eim.setProperty("goldkey", keys);
		rm.playerMessage("Acquired key "+keys+".");
}
}
