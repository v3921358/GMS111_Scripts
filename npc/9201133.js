/*
	����:	���������
	�؈D:	а��ɭ��1
	����:	101040310
*/

function start() {
	if (cm.getMapId() == 101040310) {
		cm.sendYesNo("����Ҫ����تz�󹫣����e�ǂ��O��Σ�U�ĵط�����_��Ҫ�Mȥ��");
	} else {
		cm.sendYesNo("���_��Ҫ��ȥ��");
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		if (cm.getMapId() == 101040310) {
			cm.warp(677000012,0);
		} else {
			cm.warp(101040310,0);
			}
			}
		cm.dispose();
}