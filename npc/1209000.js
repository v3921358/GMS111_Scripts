/*
	����:	������
	�؈D:	����׼����
	����:	914000100
*/

var status = -1;

function action(mode, type, selection) {
	if (cm.getQuestStatus(21002) == 0) {
	if (mode == 1) {
	status++;
	} else {
	status--;
	}
	if (status == 0)
		cm.sendNext("�����ˣ�#b������ʿ#k �܂��Ă���߀�Æ᣿��ʲ�N�����f�F����r�᣿");
	if (status == 1)
		cm.sendNextPrev("���y�Ĝʂ�׺��������ˡ����Դ��d����ȫ���������˷����ˡ��������w�����g������F���o���]��ʲ�N�Ó��ĵġ��F��ֻҪ��ʰ�þ͕�����ǰ���S�������ۡ�");
	if (status == 2)
		cm.sendPrev("������ʿ��ͬ���...? ����... ȥ�Һ�ħ�����ˡ� ���҂����y�����g����ֹ�ڷ���. ʲ�N? �B��ҲҪȥ�Һ�ħ������ ���У� �㲻�����˂��᣿ ���҂�һ�������ɣ�");
	if (status == 3){
		cm.forceStartQuest(21002, "1");
		cm.showWZEffect("Effect/Direction1.img/aranTutorial/Trio");
		cm.dispose();
		}
	} else {
	if (mode == 1) {
	status++;
	} else {
	status--;
	}
	if (status == 0)
		cm.sendSimple("��r�ܾo��������֪��ʲ�N�� \r #b#L0#��ħ������#l \r #b#L1#���y�ʂ䣿#l \r #b#L2#ͬ�邃��#l");
	if (status == 1){
	switch (selection) {
		case 0:
			cm.sendOk(" �f��ħ�������ڲ��h̎�����ɞ��ħ�������µ���Ⱥ����������o��ͨ�^ɭ�֡������҂����������������F��ֻ���w���S�������u���y...");
			break;
		case 1:
			cm.sendOk("���y�׺��������ˡ����Դ��d����ȫ�����Ϸ����ˡ��F��ֻʣ�ׂ��˴����Ϳ��Գ��lǰ���S�������u����F�����������w�е����g������еĹ���...�]���˕��������o�@�e...");
			break;
		case 2:
			cm.sendOk("���ͬ��... �����ѽ�ȥ�Һ�ħ�����ˡ� �����fҪ���҂�ȥ���y�����g��ֹ��ħ����...߀�f������܂��ˣ����Բ�����ȥ���Ⱥ��Ӷ��ȳ����ᣬ��Ҳ���҂�һ�����߰ɣ� ������ʿ��");
			break;
			}
		cm.dispose();
}
}
}