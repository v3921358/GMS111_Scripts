/*
	����:	���������
	�؈D:	ȼ�յķ���
	����:	272000310
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 8) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("�ڸ��������{�䌦���еĬ�������a����Ӱ푡� ������@Ƭ�����ϵĬ����������u��ȥ�� �@����ȥ��Ԓ���҂���Ҫ��^�ˡ�");
	if (status == 1)
		qm.sendNextPrevS("#b���N���l���@�N�£�");
	if (status == 2)
		qm.sendNextPrev("�҂��ǺڏV�������Č��֡� ��ħ����ƴ���������҂��������҂��ܽ^���������h��վ����ͺ�ħ���������� ֮������һֱ���҂���������ᔣ����д̡� ���������{��K�������� ����Ҳ��ܰ������ҵ����Ѹ��e��ʩ�ӵ��{���D�Ƶ��ҵ����ϡ�");
	if (status == 3)
		qm.sendNextPrevS("#b��ʲ�N�أ�");
	if (status == 4)
		qm.sendNextPrev("ʧȥ�N�����߀�����@�������ώ�ʲ�N�أ� �c���@�ӣ�߀����׌�Լ������ѻ���ȥ�� ��Ȼ����Ҳ������Ҫ��ȥ����");
	if (status == 5)
		qm.sendNextPrevS("#b���܆�����ʲ�N����᣿");
	if (status == 6)
		qm.sendNextPrev("�]�P�S�� ԭ���҂��N����н����o�޵�������������s�ǳ�ϡ�١� ����@�Α𠎣�ԭ���锵��������ˎ׺�ȫ�����ˣ�ʣ�µĺ��ӂ�Ҳ�ܵ����{�䡣 ��߀�ò���ǰ������һ���ܵ�ף������������ �ǂ�����߀�]�ĵ��з�������˲��ܔ[Ó��ħ�������{�䡣");
	if (status == 7)
		qm.sendNextPrev("�����ںͺ�ħ����չ�_����Q��ĕr���Ұ�����������ľ���ʲ�N�ط��� �����������и��Y�»ص���ľ��ȥ�����ǂ������D�Ƶ���ȫ�ĵط��� ���Ǜ]�뵽���e�����@���L�ĕr�g�Y���]���с�");
	if (status == 8)
		qm.sendAcceptDecline("���������Ӛ�㣬 Ո���ҵ��҂�����ĺ��ӣ����Ҏ��؁�");
	if (status == 9){
		qm.forceStartQuest();
		qm.dispose();
}
}

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("�x�x��������҂��@һ���֌��_ʼ���µ�δ��");
	if (status == 1)
		qm.sendPrev("�ȸ��e���с�֮�ᣬ�ҕ�׌������������ȫ�ĵط�ȥ�� �mȻ�����e�·ǳ���Ǹ�����@�����ѵ�ίӚ����һ������һ��ȥ���o���ġ� �@�ӣ��҂���ϣ���������m��δ��\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 540000 exp ");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.gainExp(540000);
		qm.dispose();
}
}