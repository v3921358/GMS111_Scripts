/*
	����:	���ﰲ����լ��
	�؈D:	��լ��
	����:	260000205
*/

function start() {
	if (cm.getQuestStatus(3929) == 1) {
		cm.gainItem(4031580, -1);
		cm.sendOk("�Ѿ��źð�װ�õ�ʳ�");
		cm.getPlayer().updateQuestCustomData(3929,"3333");
	} else {
		cm.sendOk("����û������");
		}
	cm.dispose();
}