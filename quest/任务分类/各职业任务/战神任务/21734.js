/*
	����:	��żʦ�ĺۼ�
	�؈D:	��³���鱨�̵�
	����:	104000004
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.sendOk("�ţ�ιι�����N�@�ӣ�������������˵õ���������Ϣ���������ŵġ�");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("æ�ᣬӢ�۴��ˣ��@�����g���������еķ����� �˾S�������u���У��ҵ�����Ȥ����󡣾����P�#o9300346#�ġ�");
	if (status == 1)
		qm.sendNextPrev("��֪��? Ӣ�۽�Ӗ#b#o9300346##k����#m102010100#�e����ڲ����\���� ? #o9300346#��� ,���X�ڄe�ĵط��ʂ��ס�ĵط���");
	if (status == 2)
		qm.sendAcceptDecline("���˿�Ҋ#o9300346#���M��#b����ɭ��#k��#b#m101040310##k�Y��#b��ż���Ĳ���̎#k�� ���ܿɿ��� ��ȥ��߅����#r#o9300346##k�ɡ�");
	if (status == 3){
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
		qm.sendSimple("�������#o9300346#�����N�ǲ����d�ı��鰡���l��ʲ�N���ˣ�#b#L0#(���V�˸����͛]���P�#t4032323#�����)#l\n#k");
	if (status == 1)
		qm.sendPrev("���������ǂ����������������ǂ���Ԓ���Ó��ġ�\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#s21100005#  #q21100005#  \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 7500 exp");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.teachSkill(21100005, qm.getPlayer().getSkillLevel(21100000), 20);
		qm.gainExp(7500);
		qm.dispose();
}
}