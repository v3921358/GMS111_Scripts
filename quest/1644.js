/*
	����:	�ƺ� - ��ϰʮ������
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
		qm.sendAcceptDecline("�mȻ����Ҫ�M��Ҋ������߀��ף�R��ɞ齵ħʮ���ÈF�ĳɆT�� ������#b<Ҋ��ʮ�֫C��>#k�ķQ̖��");
	if (status == 1)
		qm.sendPrev("ף�R��ɞ齵ħʮ���ÈF�ĳɆT������#h0#��#b<Ҋ��ʮ�֫C��>#k�ķQ̖��\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142351:#   #t1142351#");
	if (status == 2){
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.gainItem(1142351,1);
		qm.dispose();
}
}