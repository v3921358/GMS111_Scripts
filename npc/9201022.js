/*
	����:	����˹
	�؈D:	������
	����:	100000000
*/

var status = -1;

function action(mode, type, selection) {
	if (mode == 1) {
	status++;
	} else {
	if (status == 0) {
		cm.sendOk("�õģ�������ʲ�N��Ҫ�ĕr�򣬚gӭ�S�r�����ң�");
		cm.dispose();
		return;
	}
	status--;
	}
	if (status == 0) {
		if (cm.getMapId() == 100000000) {
			cm.sendYesNo("���벻��ȥ�Y��С�?");
		} else if (cm.getMapId() == 680000500 || cm.getMapId() == 680000501 || cm.getMapId() == 680000502) {
			cm.setQuestRecord(cm.getPlayer(), 160002, "0");
			cm.warp(680000000, 0);
			cm.dispose();
		} else {
			cm.sendYesNo("�����ȥԭ���ĵط�?");
			}
			}
	if (status == 1) {
		if (cm.getMapId() == 100000000) {
			cm.warp(680000000, 0);
		} else {
			cm.warp(100000000, 5);
			}
		cm.dispose();
}
}