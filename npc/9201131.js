/*
	����:	ħ�����
	�؈D:	����Ģ��ɭ��
	����:	100020400
*/

function start() {
	if (cm.getPlayer().getLevel() < 40 && cm.haveItem(4032492)) {
		cm.sendYesNo("��ʂ���M��#b#m677000002##k�᣿");
	} else {
		cm.sendOk("����#b#m677000002##k��ҪЯ��#i4032492:##b#t4032492##k���ҵȼ�������40����");
		cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(677000002,0);  //���ո�����С��
		}
	cm.dispose();
}
