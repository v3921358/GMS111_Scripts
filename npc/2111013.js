/*
	����:	����
	�؈D:	ʧ��������ʿ�ļ�
	����:	261000001
*/

function start() {
	if (cm.isQuestActive(3311)) {
		cm.sendOk("#�@�ǵ��ʲ�ʿ��һ����Ƭ�� �������������ð��������Z�WԺ�Ļ����b��һ��С�У����ǰ��������Z�W����һ�����T��");
		cm.getPlayer().updateQuestCustomData(3311,"5");
	} else {
		cm.sendOk("���ʲ�ʿ����Ƭ��");
		}
	cm.dispose();
}
