/*
	����:	��������
	�؈D:	��������&amp;lt;��4�׶�&gt;
	����:	922010700
*/

function start() {
	var eim = cm.getEventInstance();
	var stage4status = eim.getProperty("stage4status");

	if (stage4status == null) {
		if (cm.isLeader()) { // Leader
		var stage4leader = eim.getProperty("stage4leader");
	if (stage4leader == "done") {

		if (cm.haveItem(4001022, 4)) { // Clear stage
			cm.sendOk("����^�P��ͨ��<�����A��>���T�ѽ��_����");
			cm.removeAll(4001022);
			clear(4, eim, cm);
			cm.givePartyExp(3360);
			cm.dispose();
		} else { // Not done yet
			cm.sendOk("�^�PҪ�󣺼��R4��#v4001022:##r#t4001022##k��");
			}
			cm.dispose();
		} else {
			cm.sendOk("#b�z��֮��#k<�����A��> ���^�PҪ�󣺼��R4��#v4001022:##r#t4001022##k �ɽM�L���o�Ҽ����^�P��");
			eim.setProperty("stage4leader", "done");
			cm.dispose();
			}
		} else { // Members
			cm.sendOk("#b�z��֮��#k<�����A��> ���^�PҪ�󣺼��R4��#v4001022:##r#t4001022##k �ɽM�L���o�Ҽ����^�P��");
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