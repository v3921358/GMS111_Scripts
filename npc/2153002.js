/*
	����:	������
	�؈D:	��ɽ���
	����:	310040200
*/

function start() {
	if (cm.haveItem(1003134,1,true,true) || cm.isQuestFinished(23947) || cm.isQuestFinished(24087)) {
		cm.warp(310050000,1);  //��վ����
		cm.dispose();
	} else {
		cm.sendOk("�������Ҳ���ʶ�㣬�����M�� ��");
		}
	cm.dispose();
}