/*
	����:	���ϵĵ�����������
	�؈D:	���֮�ǹ�԰
	����:	200000200
*/

var status = -1;

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.sendOk("��߀�]���Üʂ�᣿ ������׃�����⣬�����ف����ҡ�");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (qm.getQuestStatus(31000) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(31000) == 1) {
		qm.sendNext("���N�F�ڲŁ� �㲻֪���ҵ��˶�á�");
		}
		}
	if (status == 1)
		qm.sendNextPrev("�����֮�ǵ��Ͽգ���һ�����п��Y���Ŀ���֮�u�� ���e�������w�;޴󣬵����Ը������ľ����塣���ǏĲ���ǰ�_ʼ�����Y���_ʼ׃��Խ��Խ�h���jҲ�Д��ˡ�һ���ǰl����ʲ�N�¡���Ҫ�ǿ��Ե�Ԓ���������R���^ȥ������ ������Ҳ֪�����ҟo���x�_�@�e��");
	if (status == 2)
		qm.sendAcceptDecline("���܎���ȥ�_�Jһ�¿��Y�����װl����ʲ�N����᣿�Ұ����͵����Y��ȥ�� �؁�֮�ᣬһ��Ҫ���V�Ұl����ʲ�N���顣");
	if (status == 3)
		qm.sendPrev("�҂��F�ھ��_ʼ���l���@������һ�κ��L���ó̡�\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 3000 exp");
	if (status == 4){
		qm.forceCompleteQuest();
		qm.gainExp(3000);
		qm.warp(200100001);
		qm.dispose();
}
}
