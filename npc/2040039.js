/*
	����:	�̻�����
	�؈D:	��������&amp;lt;��2�׶�&gt;
	����:	922010200
*/

function start() {
	var eim = cm.getEventInstance();
	var stage2status = eim.getProperty("stage2status");

	if (stage2status == null) {
		if (cm.isLeader()) { // Leader
		var stage2leader = eim.getProperty("stage2leader");
	if (stage2leader == "done") {

		if (cm.haveItem(4001022, 14)) { // Clear stage
			cm.sendOk("����^�P��ͨ��<�����A��>���T�ѽ��_����");
			cm.removeAll(4001022);
			clear(2, eim, cm);
			cm.givePartyExp(2520);
			cm.dispose();
		} else { // Not done yet
			cm.sendOk("�^�PҪ��14��#v4001022:##r#t4001022##k��");
			}
			cm.dispose();
		} else {
			cm.sendOk("#b�z��֮��#k<�ڶ��A��> ���^�PҪ��Ո���R14��#v4001022:##r#t4001022##k �ɽM�L���o�Ҽ����^�P��");
			eim.setProperty("stage2leader", "done");
			cm.dispose();
			}
		} else { // Members
			cm.sendOk("#b�z��֮��#k<�ڶ��A��> ���^�PҪ��Ո���R14��#v4001022:##r#t4001022##k �ɽM�L���o�Ҽ����^�P��");
			cm.dispose();
			}
		} else {
			cm.sendOk("����^�P��ͨ��<�����A��>���T�ѽ��_����");
			cm.dispose();
}
}

function clear(stage, eim, cm) {
	eim.setProperty("stage" + stage.toString() + "status", "clear");

	cm.showEffect(true, "quest/party/clear");
	cm.playSound(true, "Party1/Clear");
	cm.environmentChange(true, "gate");
}