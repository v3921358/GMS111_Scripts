/*
	����:	��ɫ����
	�؈D:	ʱ���ѷ�
	����:	922010900
*/

var status = -1;

function action(mode, type, selection) {
	if (status == -1 && cm.isLeader()) {
	var eim = cm.getEventInstance();

		if (eim.getProperty("crackLeaderPreamble") == null) {
			eim.setProperty("crackLeaderPreamble", "done");
			cm.sendOk("#b�z��֮��#k<��K�A��>  �^�PҪ��Ո����#b���͑��Y�C#k ��#v4001023:##t4001023#���o�ҡ�");
			cm.dispose();
		} else {
			if (cm.haveItem(4001023)) {
			status = 0;
			cm.sendOk("����^�P���F���Ƿ�ǰ��<�C��֮��>");
		} else {
			cm.sendOk("#b�z��֮��#k<��K�A��>  �^�PҪ��Ո����#b���͑��Y�C#k ��#v4001023:##t4001023#���o�ҡ�");
			cm.dispose();
			}
			}
	} else if (status == -1 && !cm.isLeader()) {
		cm.sendOk("#b�z��֮��#k<��K�A��>  �^�PҪ��Ո����#b���͑��Y�C#k ��#v4001023:##t4001023#���o�ҡ�");
		cm.dispose();
	} else if (status == 0 && cm.isLeader()) {
		var eim = cm.getEventInstance();
		clear(9, eim, cm);
		cm.gainItem(4001023, -1);

		var players = eim.getPlayers();
		cm.givePartyExp(5950);
		eim.setProperty("cleared", "true"); //set determine
		eim.restartEventTimer(60000);
		var bonusmap = cm.getMap(922011000);
		for (var i = 0; i < players.size(); i++) {
		players.get(i).changeMap(bonusmap, bonusmap.getPortal(0));
		}
		cm.dispose();
	} else {
		cm.dispose();
}
}

function clear(stage, eim) {
	eim.setProperty("stage" + stage.toString() + "status", "clear");

	cm.showEffect(true, "quest/party/clear");
	cm.playSound(true, "Party1/Clear");
}