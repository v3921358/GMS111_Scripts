/*
	����:	ħ�����
	�؈D:	�ӽ���ĵط�
	����:	101020200
*/

function start() {
	if (cm.getPlayer().getLevel() < 40 && cm.haveItem(4032495)) {
		cm.sendYesNo("��ʂ���M��#b#m677000000##k�᣿");
	} else {
		cm.sendOk("����#b#m677000000##k��ҪЯ��#v4032495:##b#t4032495##k���ҵȼ�������40����");
		cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(677000000,0);
		}
	cm.dispose();
}





