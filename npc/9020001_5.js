/*
	����:	��³��
	�؈D:	��һ��ͬ��&amp;lt;1����&g
	����:	910340100
*/

var status = -1;

function action(mode, type, selection) {
	var eim = cm.getEventInstance();
	var stage3status = eim.getProperty("stage3status");

	if (stage3status == null) {
		if (cm.isLeader()) { // Leader
		var stage3leader = eim.getProperty("stage3leader");
	if (stage3leader == "done") {

	if (cm.getMap().getAllMonstersThreadsafe().size() == 0) {
		clear(1, eim, cm);
		cm.warpParty(910340600, 0);
		cm.givePartyExp(2100, eim.getPlayers());
		cm.dispose();
	} else { // Not done yet
		cm.sendNext("Ո�z��؈D���Ƿ�߀���ڹ����t�o��ͨ�^��");
		}
		cm.dispose();
	} else {
		cm.sendOk("��һ��ͬ��<5̖�T>�A�Σ�����BOSS��Ȼ��M��L�ٺ����vԒ���Ϳ������ͨ�P��");
		eim.setProperty("stage3leader","done");
		cm.dispose();
		}
	} else { // Members
		cm.sendNext("��һ��ͬ��<5̖�T>�A�Σ�����BOSS��Ȼ��M��L�ٺ����vԒ���Ϳ������ͨ�P��");
		cm.dispose();
		}
	} else {
		cm.sendNext("ͨ����һ�A�ε��T���_����");
		cm.dispose();
}
}

function clear(stage, eim, cm) {
	eim.setProperty("stage" + stage.toString() + "status","clear");
	cm.showEffect(true, "quest/party/clear");
	cm.playSound(true, "Party1/Clear");
	cm.environmentChange(true, "gate");
}