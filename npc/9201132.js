/*
	����:	ħ�����
	�؈D:	��˿������
	����:	120020300
*/

function start() {
	if (cm.getPlayer().getLevel() < 40 && cm.haveItem(4032494)) {
		cm.sendYesNo("��ʂ���M��#b#m677000006##k�᣿");
	} else {
		cm.sendOk("����#b#m677000006##k��ҪЯ��#v4032494:##b#t4032494##k���ҵȼ�������40����");
		cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(677000006,0);
		}
	cm.dispose();
}
