/*
	����:	���װ��
	�؈D:	�ɿɵ��԰�
	����:	3000500
*/

function start() {
	if (cm.isQuestActive(2566) && !cm.haveItem(4032985,1)) {
		cm.gainItem(4032985,1);
		cm.sendOk("���ҵ��˵��װ�á�");
	} else {
		cm.sendOk("���װ�á���");
		}
	cm.dispose();
}
