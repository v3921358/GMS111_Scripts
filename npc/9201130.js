/*
	����:	ħ�����
	�؈D:	����̶
	����:	103030200
*/

function start() {
	if (cm.getPlayer().getLevel() < 40 && cm.haveItem(4032493)) {
		cm.sendYesNo("��ʂ���M��#b#m677000008##k�᣿");
	} else {
		cm.sendOk("����#b#m677000008##k��ҪЯ��#v4032493:##b#t4032493##k���ҵȼ�������40����");
		cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(677000008,0);  //���ո�����С��
		}
	cm.dispose();
}
