/*
	����:	��ţ
	�؈D:	ŵ����˹��ţ��
	����:	912000100
*/

function start() {
	if (cm.haveItem(4033019)) {
		cm.gainItem(4033048, 1);
		cm.gainItem(4033019, -1);
	} else {
		cm.sendOk("�㲻ι��#v4033019:#��û��ţ�̡�");
		}
	cm.dispose();
}