/*
	����:	������ĵ�
	�؈D:	ȼ�յ���ľ��5
	����:	272000500
*/

function start() {
	if (cm.isQuestActive(31173) && !cm.haveItem(4033081)) {
		cm.sendOk("#b(������]�¡� Ո�ú��տ�����Ҫ׌���܂���)#k");
	} else {
		cm.sendOk("#b����������ĵ�#k");
		cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.gainItem(4033081, 1);
		}
	cm.dispose();
}