/*
	����:	����
	�؈D:	����&amp;lt;�������֮��&gt;
	����:	220000111
*/

function start() {
	cm.sendYesNo("���S�r�������x�_�@�e�����^��Ҫ���M����Ҫ�����IƱ����߀���x�_�᣿");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("ף�㱾����;��죬Ո���ĵȴ����҂��R�Ͼ�Ҫ�ʂ䆢����");
		}
	if (mode == 1) {
		if (cm.getMapId() == 220000111) {
		cm.warp(220000110, 0);
	} else {
		cm.warp(200000121, 0);
		}
		}
	cm.dispose();
}