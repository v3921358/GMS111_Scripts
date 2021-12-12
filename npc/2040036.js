/*
	����:	��ɫ����
	�؈D:	��������&amp;lt;��1�׶�&gt;
	����:	922010100
*/

function start() {
	if (cm == null)
        	return;

	var eim = cm.getEventInstance();

	if (eim == null)
	return;

	var stage1status = eim.getProperty("stage1status");

	if (stage1status == null) {
		if (cm.isLeader()) { // Leader
		var stage1leader = eim.getProperty("stage1leader");
	if (stage1leader == "done") {

		if (cm.haveItem(4001022, 20)) { // Clear stage
			cm.sendOk("����^�P��ͨ��<�ڶ��A��>���T�ѽ��_����");
			cm.removeAll(4001022);
			clear(1, eim, cm);
			cm.givePartyExp(2100, eim.getPlayers());
			cm.dispose();
		} else { // Not done yet
			cm.sendOk("�^�PҪ��Ո���R20�� #v4001022:##r#t4001022##k ��");
			}
			cm.dispose();
		} else {
			cm.sendOk("#b�z��֮��#k<��һ�A��>  �^�PҪ��Ո���R20�� #v4001022:##r#t4001022##k �ɽM�L���o�Ҽ����^�P��");
			eim.setProperty("stage1leader", "done");
			cm.dispose();
			}
		} else { // Members
			cm.sendNext("#b�z��֮��#k<��һ�A��>   �^�PҪ��Ո���R20�� #v4001022:##r#t4001022##k  �ɽM�L���o�Ҽ����^�P��");
			cm.dispose();
			}
		} else {
			cm.sendOk("����^�P��ͨ��<�ڶ��A��>���T�ѽ��_����");
			cm.dispose();
}
}

function clear(stage, eim, cm) {
	eim.setProperty("stage" + stage.toString() + "status", "clear");

	cm.showEffect(true, "quest/party/clear");
	cm.playSound(true, "Party1/Clear");
	cm.environmentChange(true, "gate");
}