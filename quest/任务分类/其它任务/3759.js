/*
	����:	��������
	�؈D:	���
	����:	240080000
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
	if (qm.getQuestStatus(3759) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(3759) == 1) {
		qm.sendYesNo("�ʂ���ˆ᣿ �ʂ���˵�Ԓ���Ҿ��R�ώ������u��ˎ��Ȼ�អ��������ϡ� �ǘ�������w�ˡ�");
		}
		}
	if (status == 1)
		qm.sendPrev("���ˣ��F�������������w�ˡ� ��һ�c��Ҫע�⣬�w�輼��ֻ������<���>���׵���յ؅^ʹ�á� ���ǧ�f�e���ˡ� ߀�����w���B�£������m����ħ���� Ոһ��Ҫע����ƺ�ħ�������� ף����\��\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   #s1026:#  #q1026# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 11000 exp");
	if (status == 2){
		if (qm.getJob() >= 3200 && qm.getJob() <= 3600 ) {
			qm.teachSkill(30001026, 1, 0); // ������
		} else if (qm.getJob() >= 3001 && qm.getJob() <= 3112 ) {
			qm.teachSkill(30011026, 1, 0); // ��ħ
		} else if (qm.getJob() == 2001 || qm.getJob() >= 2200) {
			qm.teachSkill(20011026, 1, 0); // ����
		} else if (qm.getJob() >= 2000) {
			qm.teachSkill(20001026, 1, 0); // ս��
		} else if (qm.getJob() >= 1000) {
			qm.teachSkill(10001026, 1, 0); // ��ʿ��
		} else {
			qm.teachSkill(1026, 1, 0); // Maker
		}
		qm.forceCompleteQuest();
		qm.gainExp(11000);
		qm.dispose();
}
}