/*
	����:	���³
	�؈D:	�϶���ʿ�ư�
	����:	103000003
*/

function start() {
	if (cm.getQuestStatus(2351) == 1) {
		cm.sendOk("��Ҫ�D��Ϊһλ#r�I�\#k�������\ü���۵Ę��ӣ���Ӌ߀ͦ���m�㣡");
	} else {
		cm.sendOk("�u�� С�c�����ǱI�\�D�١�");
		cm.dispose();
}
}

function action(mode, type, selection) {
	cm.forceStartQuest(7635,"1");
	cm.changeJob(400);
	cm.sendOk("�������Ѿ���λ�I�\�ˡ�");
	cm.dispose();
}