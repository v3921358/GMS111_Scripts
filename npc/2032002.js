/*
	����:	����
	�؈D:	δ֪�Ͽ���I
	����:	280010000
*/

var status = -1;

var selectedType;
var scrolls;

function action(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		cm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		cm.sendSimple("���N�ӣ����Ѽ����ˆ᣿#b\r\n#L0#���V�ґ�ԓ��ʲ�N��#l\r\n#L1#�ѽ��Ѽ�������Ʒ��#l\r\n#L2#��Ҫ�x�_�@�e��#l");
	if (status == 1){
	selectedType = selection;
		if (selection == 0) {
			cm.sendOk("���˽��������ħ��ǰ�ã������ռ�����Ҫ�ĺ��Ĳ��ϡ�");
			cm.safeDispose();
			}
		if (selection == 1) {
			if (!cm.haveItem(4001018)) { //documents
			cm.sendOk("Ո�o��#b#t4001018##k�x�x��");
			cm.safeDispose();
		} else {
			if (!cm.haveItem(4001015, 30)) { //documents
			cm.sendYesNo("����������??\r\n���˴_�������õ����Ո�ȿճ����g��");
			scrolls = false;
		} else {
			cm.sendYesNo("����������??\r\n���˴_�������õ����Ո�ȿճ����g��");
			scrolls = true;
			}
			}
			}
		if (selection ==2) {
			cm.sendYesNo("��_��Ҫ�˳���������ǽM��L��һ�����x�_�Mꠣ����N�@��΄վ͟o���^�m��ȥ���Ƿ�Q���˳���");
			}
			}
	if (status == 2){
		var eim = cm.getEventInstance();
		if (selectedType == 1) {

			cm.gainItem(4001018, -1);
			if (scrolls) {
			cm.gainItem(4001015, -30);
			}
			cm.givePartyItems(4031061, 1);
			if (scrolls) {
			cm.givePartyItems(2030007, 5);
			cm.givePartyExp(20000);
		} else {
			cm.givePartyExp(12000);
			}

			if (eim != null) {
			eim.finishPQ();
			}
			cm.dispose();
			}
		if (selectedType == 2) {
			if (eim != null) {
			if (cm.isLeader())
			eim.disbandParty();
		else
			eim.leftParty(cm.getChar());
		} else {
			cm.warp(280090000, 0);
			}
		cm.dispose();
}
}
}