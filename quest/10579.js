/*
	����:	�¹��ܣ���Ѱ�����
	�؈D:	ð�յ���ӪԱ
	����:
*/

var status = -1;

function start(mode, type, selection) {
	qm.openUI(21);
	qm.sendOk("�µ�#b�������#k���ܽ��������������ѡ���Ա��̽�նӡ�������ͨ����P��������#b������ť#k���ҵ���\r\nף��������.");
	qm.forceStartQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	qm.forceCompleteQuest();
	qm.dispose();
}
