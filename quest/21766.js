/*
	����:	��ֵ�Լ��
	�؈D:	�����
	����:	104000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("�@�������Ҳ�����ȥ��������Ո������ҡ�");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendAcceptDecline("�٣����� ���܎��҂�æ�᣿#b#p20000##k�����ƺ����c��֡�");
	if (status == 1)
		qm.sendNext("ֱ���������߀�������Լ����P���׳�ü��Ę���l���}������ͻȻ׃�÷ǳ����d���MĘЦ�ݡ�");
	if (status == 2)
		qm.sendNextPrev("�Ҹ��X�ǂ�#p1204033#�����Ђ����ܡ� ����͵͵�ؿ�����߅��ľ���#b#p1204033#��");
	if (status == 3)
		qm.sendPrev("��֪��#p1204033#�����e�����᣿ ������߅�� һֱ��ǰ�ߣ�ֱ���㿴��#p20000#�����e��Ȼ�ᴩ�^�Ғ�����~�����~����͕�����#b#p1002103##k��#b#p1204033##k��ԓ��������߅��");
	if (status == 4){
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
		qm.sendOkS("#b�����e��ֻ��һЩ��ͨ��Ʒ����Ҳ���ش��@С�ֵģ���\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 100 exp",3);
	if (status == 1){
		qm.forceCompleteQuest();
		qm.gainExp(100);
		qm.dispose();
}
}