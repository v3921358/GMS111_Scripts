/*
	����:	����
	�؈D:	����ɭ��ʱ����
	����:	240070000
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
		qm.sendAcceptDecline("�þò�Ҋ�����ҵ�ԭ���ǡ�������Ȼ֪����������ҵ�ԭ��ֻ��һ������ #e���#n�������ม���������]�кܺ� ��������ҵ�ӛ������̫�ã���֪���ᣬ�����Ҫ�@�ӣ�����������Ȼ�ҵ�ӛ�������ã����� #b5000����#k��Ԓ�����ԕ�������õ��鵽��");
	if (status == 1){
		qm.forceStartQuest();
		qm.gainMeso(-5000);
		qm.dispose();
}
}