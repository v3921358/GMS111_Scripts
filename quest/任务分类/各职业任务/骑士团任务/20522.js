/*
	����:	ѱ�����ᰢ��
	�؈D:	������
	����:	130010220
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
		qm.sendNext("�Tʿ�����T������ͨ���T�����в�ͬ�� �������L�ڍu�ϵ������һ�N����#b���ᰢ�{#k�� �Tʿ�����T�����ᰢ�{����������ͨ��� ߀��һ�c����֪����");
	if (status == 1)
		qm.sendPrev("�T���K��ֻ�����T��������X����ֻ���Ƅ��ֶξ��e�ˡ� �T�������ѡ�ͬ�顢���ѡ����������@���е�һ�С� ż����Ҳ���Ծ�������� �����}�ص��Tʿ�����Լ��Z�B�T����");
	if (status == 2){
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.dispose();
}
}