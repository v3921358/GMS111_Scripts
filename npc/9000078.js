/*
	����:	��˹
	�؈D:	�ƽ���Ժ
	����:	950100000
*/

function start() {
	var chat = "�gӭ�������Ƿ��ѳ��Ѕ��^�����@�e�����ṩ���ݵăr��#b";
	chat += "\r\n#L0##v4001431:##t4001431##k#b3000000����";
	chat += "\r\n#L1##v4001432:##t4001432##k#b5000000���ţ�1С�r�ȟo���������";
	cm.sendSimple(chat);
}

function action(mode, type, selection) {
	switch (selection) {
	case 0:
		if (!cm.canHold(4001431,1)) {
			cm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
		} else if (cm.getMeso() > 3000000) {
			cm.gainMeso(-3000000);
			cm.gainItem(4001431, 1);
			cm.sendOk("Thank you.");
		} else {
			cm.sendOk("��]���㹻�ė��š�");
			}
			break;
	case 1:
		if (!cm.canHold(4001432,1)) {
			cm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
		} else if (cm.getMeso() > 5000000) {
			cm.gainMeso(-50000000);
			cm.gainItem(4001432, 1);
			cm.sendOk("�x�x���");
		} else {
			cm.sendOk("��]���㹻�ė��š�");
			}
			}
		cm.dispose();
}
