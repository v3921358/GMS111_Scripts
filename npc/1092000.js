/*
	����:	����
	�؈D:	����
	����:	120000103
*/

function start() {
	if (cm.getQuestStatus(2905) == 1) {
		cm.warp(912000100, 0);
	} else {
		cm.sendOk("����������������");
		}
	cm.dispose();
}
