/*
	����:	��³��
	�؈D:	��һ��ͬ��&amp;lt;1����&g
	����:	910340100
*/

var status	= -1;

function action(mode, type, selection) {
	var eim = cm.getEventInstance();
	var stage2status = eim.getProperty("stage2status");

	if (stage2status == null) {
		if (cm.isLeader()) { // Leader
		var stage2leader = eim.getProperty("stage2leader");
	if (stage2leader == "done") {

	if (cm.haveItem(4001008, 19)) { // Clear stage
		eim.setProperty("4stageclear",1);
		cm.sendNext("ͨ����һ�A�ε��T���_����");
		cm.removeAll(4001008);
		cm.resetMap(910340500);   //��ͼˢ��
		cm.spawnMobOnMap(9300003,1,-568, -443,910340500);
		cm.spawnMobOnMap(9300003,1,471, -439,910340500);
		cm.spawnMobOnMap(9300003,2,0, -430,910340600);
		clear(1, eim, cm);
		cm.givePartyExp(2100, eim.getPlayers());
		cm.dispose();
	} else { // Not done yet
		cm.sendNext("�ܱ�Ǹ������Ҫ19��#v4001008:##b#t4001008##k:  �F�r���Д���#r#c4001008#��");
		}
		cm.dispose();
	} else {
		cm.sendOk("��һ��ͬ��<4̖�T> ��Χ�кܶ����͵Ĺ��Ո�������й���K�ռ�#v4001008:##b#t4001008##k���������ֻ���ɽM�L���o��19�����Ϳ����M����һ�A�Ρ�");
		eim.setProperty("stage2leader","done");
		cm.dispose();
		}
	} else { // Members
		cm.sendNext("��һ��ͬ��<4̖�T> ��Χ�кܶ����͵Ĺ��Ո�������й���K�ռ�#v4001008:##b#t4001008##k���������ֻ���ɽM�L���o��19�����Ϳ����M����һ�A�Ρ�");
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