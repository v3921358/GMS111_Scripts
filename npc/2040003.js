/*
	����:	���� ��
	�؈D:	��߹���&amp;lt;��1����&gt;��1����
	����:	220020000
*/

function start() {
	if (cm.getPlayer().getMapId() == 220020000) {
		cm.sendYesNo("�F���Ҿ͎����^ȥ��4�؅^��");
	} else {
		cm.sendYesNo("��Ҫ��ȥ��1�؅^��?");
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		if (cm.getPlayer().getMapId() == 220020000) {
			cm.warp(922000000);
		} else {
			cm.warp(220020000);
			}
			}
		cm.dispose();
}