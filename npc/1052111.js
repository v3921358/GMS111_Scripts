/*
	����:	��������Ͱ
	�؈D:	������
	����:	103020100
*/

function start() {
	if (cm.isQuestActive(20710) && !cm.haveItem(4032136)) {
		cm.sendOk("��������Ͱ�Y�ҵ���#b#t4032136#k��#i4032136:#");
		cm.gainItem(4032136, 1);
        } else {
		cm.sendOk("ֻ��һ����ͨ������Ͱ��");
		}
	cm.dispose();
}
