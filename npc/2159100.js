/*
	����:	ϯ��
	�؈D:	2��תְ
	����:	931000100
*/

function start() {
	cm.sendYesNo("�Ҷ����@�e��Ȼ���ܱ���l�F������ֻ���ú�ɫ֮��ķ�ʽ�������㣡");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("������ֻ�����Ǹ�Сë����");
	} else {
		cm.playerMessage(-1, "����ϯ�գ��ѱ������õ��֣�");
		cm.playerMessage(5, "����ϯ�գ��ѱ������õ��֣�");
		cm.removeNpc(cm.getMapId(), cm.getNpc());
		cm.spawnMonster(9001031,1); // Transforming
		}
	cm.dispose();
}