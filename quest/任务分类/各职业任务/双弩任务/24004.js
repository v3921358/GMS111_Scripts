/*
	����:	��ŷ�׵Ľ��
	�؈D:	��ŷ��
	����:	910150001
*/

var status = -1;

function start(mode, type, selection) {
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
		qm.sendAcceptDecline("#b(�������������ħ�����ԡ������������Ϊ��ŷ�����ý�硣������100��֮��˭Ҳ�޷����ִ��ӵ�ǿ����硭��Ҫ���ý����)");
	if (status == 1)
		qm.sendPrev("#b(�����˽�硣���´���Ӧ�ð�ȫ�ˡ���)");
	if (status == 2){
		qm.forceStartQuest();
		qm.dispose();
}
}