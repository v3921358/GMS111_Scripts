/*
	����:	��Ȼ�ɰ���������ǡ���
	�؈D:	���ܹ㳡
	����:	310010000
*/

var status = -1;

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
	if (status == 0) {
	if (qm.getQuestStatus(23263) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(23263) == 1) {
		qm.sendSimple("�@���� ֪����һ�������ҵ���\r\n#L0##b�ҁK�]���J��ȥ�ң�ֻ�ǲ�С���ҵ��˶��ѡ�#l\n#k");
		}
		}
	if (status == 1)
		qm.sendSimple("�a�^�����x�x. �@�ӑ�ԓ�Ϳ����һ�ԭ��Ę�ò��. �F��ֻʣ��ժ���@��...... �������N���l���@�N����!!!\r\n#L0##b!? ��������, ʲ�N������?#l\n#k");
	if (status == 2)
		qm.sendSimple("�F���@������, ���˟o����؈����_����Y! ��, ���N�k? #h0#! �����َ���һ�Ά�?\r\n#L0##b...... (���������Ñ��������עҕ��. �]���k����ֻ�����Ҵ���Y��.)#l\n#k");
	if (status == 3)
		qm.sendPrev("�ǳ����x, #h0#!\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 30000 exp");
	if (status == 4){
		qm.forceCompleteQuest();
		qm.gainItem(4032971, -1);
		qm.gainExp(30000);
		qm.dispose();
}
}
