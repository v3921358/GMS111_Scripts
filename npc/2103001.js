/*
	����:	����֮ǽ
	�؈D:	���ﰲ����լ
	����:	260000200
*/

function start() {
	if (cm.getQuestStatus(3927) == 1) {
		cm.sendOk("#b�@�N���ܵĠ��ڶ��ܱ���l�F�������� �����D�҄�����͵ �����]�¾̈́e�����fԒ�ˣ�");
		cm.getPlayer().updateQuestCustomData(3927,"1");
	} else {
		cm.sendOk("ֻ��һ����ͨ�Ġ���");
		}
	cm.dispose();
}
