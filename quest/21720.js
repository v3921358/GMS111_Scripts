/*
	����:	��żʦ�ľ���
	�؈D:	��³���鱨�̵�
	����:	104000004
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
	if (qm.getQuestStatus(21720) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(21720) == 1) {
		qm.sendNext("��ʲ�N�᣿ �㲻��һֱ�ڽ��y�u���ޟ��᣿ ��������߀�������f����˴�æ�ˡ����� ʲ�N�� ��ɫ֮��");
		}
		}
	if (status == 1)
		qm.sendNextPrevS("#b���v�����P��ż������ɫ֮���Լ���ɫ֮���Ŀ�����顣��#k");
	if (status == 2)
		qm.sendNextPrev("ԭ�����@�ӡ����к�ɫ֮���� ��Ȼ߀���@�Nһ���ˡ�����֪��Σ�UҲҪ��ð�U�u�����Y�ͻ��ħ������̫����Ԓ�ˡ� ");
	if (status == 3)
		qm.sendNextPrevS("�ǣ��ǰ�����#b�������Z��ͻȻ׃�úܛQ�࣬�ÿ��¡���#k");
	if (status == 4)
		qm.sendNextPrev("�A���Yֻ�f��Ӣ�ە��K�ѣ��c��ħ�������Y�� ����߀һֱ���Ű��ɣ��@���Ҳ����׺�ħ��������Ĵ��ڵġ�");
	if (status == 5)
		qm.sendNextPrevS("#b�ǲ��Ǻܿ��£�");
	if (status == 6)
		qm.sendNextPrev("��ʲ�N���µģ� ������ʲ�N��ħ����߀��ʲ�N�e�ģ��㶼��������һһ�򵹵ģ�߀��ʲ�N�Ó��ĵ��أ� �҂�ֻ���X���Y־���Ӹߝq�� �������ˣ��Ұl�F���@��#b����#k#s21001003#  #q21001003#������һ�ۆ᣿");
	if (status == 7)
		qm.sendNextPrev("�����ڝu�u��׃��ǿ������ �ҕ���׌��ǿ��������A�Mȫ��������ġ� ��ʲ�N�ú��µ��أ� ǧ�f�����˿s�� �҂����˴򔡺�ħ���������ѽ��ȴ��˔������ˆ᣿ �@��һ����ȡ�Ä����ġ�");
	if (status == 8)
		qm.sendPrev("�ţ������@��Ŀ�˱���^�m�ޟ��� �ޟ����׆᣿ ǰ�����y�u�^�m�ޟ��ɡ� һ��Ҫ�����ܴ򔡺�ħ�����ĳ̶Ȳ��У�\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#s21001003#  #q21001003#  \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 1700 exp");
	if (status == 9){
		qm.forceCompleteQuest();
		qm.teachSkill(21001003, qm.getPlayer().getSkillLevel(21001003), 20);
		qm.gainExp(1700);
		qm.dispose();
}
}