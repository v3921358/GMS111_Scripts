/*
	����:	���ﰲ����լ������
	�؈D:	��լ��
	����:	260000203
*/

function start() {
	if (cm.getQuestStatus(3926) == 1) {
		cm.gainItem(4031579, -1);
		cm.sendOk("�Ѿ��ź�#v4031579:#��");
		cm.getPlayer().updateQuestCustomData(3926,"3333");
	} else {
		cm.sendOk("���񡣡�����");
		}
	cm.dispose();
}