/*
	����:	���
	�؈D:	�ƽ���Ժ
	����:	950100000
*/

function start() {
	var chat = "��ã��gӭ����R��ڡ�����ȥ���e�� #b�@�e��Ҫһ�����ȯ�����M�롣\r\n#b";
	chat += "\r\n#L0#Monkey Temple 1 - Wild Monkey(250 HP/52 EXP)";
	chat += "\r\n#L1#Monkey Temple 2 - Mama Monkey(350 HP/70 EXP)";
	chat += "\r\n#L2#Monkey Temple 3 - White Baby Monkey(650 HP/120 EXP)";
	chat += "\r\n#L3#Monkey Temple 4 - White Mama Monkey(1040 HP/200 EXP)";
	cm.sendSimple(chat);
}

function action(mode, type, selection) {
	if (mode == 1) {
		if (!cm.haveItem(4001431) && !cm.haveItem(4001432)) {
			cm.sendOk("����Ҫһ��#v4001431:##b#t4001431##k���ܽ��룬Ո�����[ُ̎�I��");
		} else if (cm.getMap(cm.getMapId() + 100 + (selection * 100)).getCharactersSize() > 0) {
			cm.sendOk("�؈D���ѽ������ˡ�");
		} else {
			if (cm.haveItem(4001431) && !cm.haveItem(4001432)) {
			cm.gainItem(4001431, -1);
			}
			cm.warp(cm.getMapId() + 100 + (selection * 100),0);
			}
		cm.dispose();
}
}