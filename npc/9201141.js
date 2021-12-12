/*
	名字:	Mirror3
	地圖:	682010102
	描述:	682010102
*/

function start() {
	if (cm.getPlayer().getEventInstance() != null && cm.getPlayer().getEventInstance().getProperty("stage").equals("0")) {
		cm.spawnMonster(9400641 + parseInt(cm.getPlayer().getEventInstance().getProperty("mode")));
		cm.getPlayer().getEventInstance().setProperty("stage", "1");
		}
	cm.dispose();
}