/*
	����:	�͸�Ӣ�۵�����
	�؈D:	����ɭ��4
	����:	140090400
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.dispose();
	}
	if (status == 1) {
		qm.sendOk("��Ӣ�ۺ��Ў����ĶY�Ո��Ҫ�ܽ^��");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendSimple("����Ӣ��...�Һ�����ร�  \r\n#b#L0#(���ߵĘ���)#l");
	if (status == 1)
		qm.sendAcceptDecline("�ҏ���ǰ�͛Q����ҊӢ��Ҫ����һ���Y��...��֪����æ���ش��f������...�����������\�ĵĶY���?");
	if (status == 2)
		qm.sendOk("�Y��Ĳ��Ͼͷ����@�����������e�档�mȻ���c�韩������Ո�������Ӵ����ᣬ�e��Ĳ��� #b#v4032309:##t4032309##k �� #b#v4032310:##t4032310##k���؁��Ҿ͕����̎����M�b��");
	if (status == 3){
		qm.forceStartQuest();
		qm.summonMsg(18);
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
		qm.sendNext("���϶����؁��ˆ᣿���NՈ����һ�£�ֻҪ�@�ӽM�bһ��.....");
	if (status == 1)
		qm.sendNextPrev("���ˣ����������ˣ��ٺ٣�������Ӣ��Ҳ��ƣ�ڵĕr������ҏĺ�����ǰ������Ӣ��һ������#v3010062:#�����Y�");
	if (status == 2)
		qm.sendPrev("������Ӣ��Ҳ���������h���܏���Ӣ�ۑ�ԓҲ��ƣ�ڳ����ĕr���ЕrҲ���е������������܉�˷���Щ���˲��䮔Ӣ�۲��ǆ�?\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i3010062# 1 #t3010062# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 95 exp");
	if (status == 3){
		qm.forceCompleteQuest();
		qm.gainItem(4032309,-1);
		qm.gainItem(4032310,-1);
		qm.gainItem(3010062, 1);
		qm.summonMsg(19);
		qm.gainExp(95);
		qm.dispose();
}
}