/*
	����:	���﹫԰���ճ�
	�؈D:	������
	����:	���﹫԰����
*/

function start() {
	if (cm.getMapId() == 951000000) {
		cm.sendYesNo("Welcome to  #b#m951000000##k������ص����eȥ�᣿");
	} else {
		cm.sendYesNo("�H�۵�ͣ����뵽��M�˚g�����ݱ˵���#b#m951000000##kȥ�᣿");
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		if (cm.getMapId() == 951000000) {
		cm.warp(100000000);
	} else {
		cm.warp(951000000);
		}
		}
	cm.dispose();
}