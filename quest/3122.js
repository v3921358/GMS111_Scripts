/*
	����:	��ӡ��ȷ��
	�؈D:	���Ϲ���
	����:	211000001
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0 || status == 1) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendSimple("ʲ�N�� ����X���ǲ����І��}�� ��Ȼ����аĦ˹��Ԓ��Ҫֱ��ȥ�_�J��\r\n#L0##b�����������š���ֻ���X����̫�ɑz�ˡ�������������ܣ���һ�������������ĥ�������ġ�#l\n#k");
	if (status == 1)
		qm.sendAcceptDecline("�ɑz���� �㣡 һ�c�����t��аĦ˹����\ r\n�����ȵȡ� �mȻ�Ҟ�����аĦ˹�������M�r�g���е��z���������^�����Գ�Ҫȥ��ȥ����Ҳ���ԡ� ���ǽ^����������ӡ��֪���ˆ᣿");
	if (status == 2){
		qm.forceStartQuest();
		qm.dispose();
}
}

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendOk("�҄������^ȥ#b#m921121000##kȥ����һ��#p2022008#���������߀����Ȼ����ӡ�����e��\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 7000 exp");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.gainExp(7000);
		qm.dispose();
}
}
