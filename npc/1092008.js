/*
	����:	���ִ�
	�؈D:	ѵ����
	����:	120000104
*/

function start() {
	if (cm.getQuestStatus(2915) == 1) {
		cm.warp(912040100, 0);   //���ִĵĵ�һ������
	} else if (cm.getQuestStatus(2916) == 1) {
		cm.warp(912040200, 0);   //���ִĵĵڶ�������
	} else {
		cm.sendOk("��ã����Ǻ���ѵ��Ա��");
		}
	cm.dispose();
}
