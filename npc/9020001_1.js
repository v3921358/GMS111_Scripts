/*
	����:	��³��
	�؈D:	��һ��ͬ��&amp;lt;1����&g
	����:	910340100
*/

var status; = -1;

function action(mode, type, selection) {
	var eim = cm.getEventInstance();
	var stage1status = eim.getProperty("stage1status");

	if (stage1status == null) {
	if (cm.isLeader()) { // Leader
	var stage1leader = eim.getProperty("stage1leader");
	if (stage1leader == "done") {


	if (cm.haveItem(4001007, 30)) { // Clear stage
		cm.sendNext("ͨ����һ�A�ε��T���_����");
		eim.setProperty("1stageclear",1);
		cm.removeAll(4001007);
		clear(1, eim, cm);
		cm.givePartyExp(2100, eim.getPlayers());
		cm.dispose();
	} else { // Not done yet
		cm.sendOk("�ܱ�Ǹ������Ҫ30��#v4001007:##b#t4001007##k:  �F�r���Д���#r#c4001007#��");
		}
		cm.dispose();
	} else {
		cm.sendOk("��һ��ͬ��<1̖�T>�������ゃ�Ŀ��˹٣�Ո������������o����΄գ���t���o��ͨ�^��򞣬���@�e�ゃ���ܕ���Ҋ�ܶ����ݵ��{�~��Ո�򵹃��ݵ��{�~���K�ռ�#v4001007:##b#t4001007##k���������ֻ���ɽM�L���o��30�����Ϳ����M����һ�A�Ρ�");
		eim.setProperty("stage1leader", "done");
		cm.dispose();
		}
	} else { // Members
		cm.sendOk("��һ��ͬ��<1̖�T>�������ゃ�Ŀ��˹٣�Ո������������o����΄գ���t���o��ͨ�^��򞣬���@�e�ゃ���ܕ���Ҋ�ܶ����ݵ��{�~��Ո�򵹃��ݵ��{�~���K�ռ�#v4001007:##b#t4001007##k���������ֻ���ɽM�L���o��30�����Ϳ����M����һ�A�Ρ�");
		cm.dispose();
		}
	} else {
		cm.sendOk("ͨ����һ�A�ε��T���_����");
		cm.dispose();
}
}

function clear(stage, eim, cm) {
	eim.setProperty("stage" + stage.toString() + "status", "clear");

	cm.showEffect(true, "quest/party/clear");
	cm.playSound(true, "Party1/Clear");
	cm.environmentChange(true, "gate");
}