/*
	����:	���ǻ���
	�؈D:	502023000
	����:	502023000
*/

function act() {
	var eim = rm.getPlayer().getEventInstance();
	if (eim != null && eim.getProperty("stage5") != null) {
	var e = parseInt(eim.getProperty("stage5"));
	if (e == 1) {
		rm.mapMessage("�T�ѽ����_��.");
	} else if (e > 1) {
		rm.spawnMonster(9420024 + (parseInt(eim.getProperty("mode")) * 6));
		rm.spawnMonster(9420027 + (parseInt(eim.getProperty("mode")) * 6));
		rm.spawnMonster(9420029 + (parseInt(eim.getProperty("mode")) * 6));
		rm.mapMessage("���ﱻ�ن���.");
	} else if (e <= 0) {
		return;
		}
		eim.setProperty("stage5", "" + (e-1));
}
}