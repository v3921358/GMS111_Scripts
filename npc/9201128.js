/*
	����:	ħ�����
	�؈D:	����ʯ·
	����:	102020300
*/

function start() {
	if (cm.getPlayer().getLevel() < 40 && cm.haveItem(4032491)) {
		cm.sendYesNo("��ʂ���M��#b#m677000004##k�᣿");
	} else {
		cm.sendOk("����#b#m677000004##k��ҪЯ��#v4032491:##b#t4032491##k���ҵȼ�������40����");
		cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(677000004,0);
		}
	cm.dispose();
}