/*
	����:	������е�ħ����ʿ
	�؈D:	ħ����ʿ�ķ���
	����:	270020211
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
	if (qm.getQuestStatus(3514) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(3514) == 1) {
		qm.sendOk("ʲ�N������ ֻҪ׌�w�������½��������ˣ� �Ǻǣ��l�f�ģ� һ�ɺ��ԡ��������N���ܣ� ����������\r\n\r\n#fUI/UIWindow2.img/QuestIcon/11/0# ��־ 50\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 916000 exp");
		}
		}
	if (status == 1){
		qm.forceCompleteQuest();
		qm.gainExp(916000);
		qm.dispose();
}
}