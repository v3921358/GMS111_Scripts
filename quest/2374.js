/*
	����:	����˵�����
	�؈D:	���Ϲ���
	����:	211000001
*/

var status = -1;

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 3) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (qm.getQuestStatus(2374) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(2374) == 1) {
		qm.sendNext("��һֱ���ڵȴ����������������ô���ˣ�");
		}
		}
	if (status == 1)
		qm.sendNextPrev("#v4032619:#Arec���ņ᣿ ������������");
	if (status == 2)
		qm.sendNextPrev("�҂��K춵õ���Arec�Ĺٷ��J�ɡ� �@���҂����f��һ����Ҫ�ĕr�̡� �@Ҳ���㽛�v��׃�ĕr���ˡ�");
	if (status == 3)
		qm.sendAcceptDecline("�������Ƿ�Ը���ٴν������µ�λ�ϣ�");
	if (status == 4){
		qm.forceCompleteQuest();
		qm.changeJob(432);
		qm.gainItem(4032619, -1);
		qm.gainItem(1132021, 1);
		qm.sendOk("�Ժ��ٮ������������r�������ȥҊArec���Ķ����ԫ@��ְҵ�ý��N�� ϣ������Ϊ�ɻ�԰�_�Vһ���µ�δ��");
		}
	if (status == 5){
		qm.dispose();
}
}