/*
	����:	��ħŮ
	�؈D:	ʥ��
	����:	913030000
*/

function start() {
	cm.sendNext("Ŷ~����~��~���Ђ����������^������ �]���ǂ��������Ͳ�Ҫ�䮔Ӣ�ۣ� ���������ʰ���むɵ�ϣ�");
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.removeNpc(cm.getMapId(), cm.getNpc());
		cm.spawnMonster(9001010,1); // Transforming
		}
	cm.dispose();
}