/*
	����:	ˮ��
	�؈D:	���ﰲ�ع���
	����:	260000300
*/

function start() {
	if (cm.getQuestStatus(3900) == 1) {
		cm.sendOk("#b���N�峺��ˮ����һ�ھ͑�ԓ���������@�e���ҬF�ڑ�ԓ�ǂ��ϸ�İ��e����������");
		cm.getPlayer().updateQuestCustomData(3900,"5");
	} else {
		cm.sendOk("�@�e��ˮ���܁y�ȣ�");
		}
	cm.dispose();
}
