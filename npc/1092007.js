/*
	����:	ľ����
	�؈D:	ŵ����˹�ڲ�
	����:	120000100
*/

function start() {
	if (cm.getQuestStatus(2925) == 1) {
		cm.warp(912040300, 0);   //ľ���صķ���
	} else {
		cm.sendOk("��Ҫ����ʲô������ò�Ҫ�����ң�");
		}
	cm.dispose();
}
