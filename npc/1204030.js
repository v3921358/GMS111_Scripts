/*
	����:	�ֿ�����
	�؈D:	Σ�յ�ͼ���
	����:	930010000
*/

function start() {
	if (cm.isQuestFinished(21752) && cm.getQuestStatus(21764) != 1) {//�ж��Ƿ��������
		cm.forceStartQuest(21764, '1');
		cm.sendOk("��ӡʯ��ԓ�����@���������ף����N�]�У� �y���ѽ�����ɫ֮������ ��ӡʯ�����R��܊�����ˣ� ȥҊҊ�����ȣ�");
	} else {
		cm.sendOk("�}������ӡ�������.");
		}
	cm.dispose();
}