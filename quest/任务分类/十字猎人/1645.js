/*
	����:	�ƺ� - ��ʽʮ������
	�؈D:	���¶�˹̹
	����:	310000000
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
		qm.sendAcceptDecline("�_���ѽ������f�^�ˡ�  �f���ɫ��������΄գ�#h0#���F��������ѽ��㹻ǿ�󣬿�������#b<��ʽʮ�֫C��>#k�Q̖�ˡ�");
	if (status == 1)
		qm.sendPrev("ף�R��ɞ�#b<��ʽʮ�֫C��>#k�� ϣ�����ܞ�����һ���΄ն�׃�ø���ǿ��\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142352:#   #t1142352#");
	if (status == 2){
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.gainItem(1142352,1);
		qm.dispose();
}
}