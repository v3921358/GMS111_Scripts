/*
	����:	�ƺ� - רҵʮ������
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
		qm.sendAcceptDecline("�����˳��@��#h0#�����@�N��ɫ������΄ա���������#h0#��#b<���Iʮ�֫C��>#k�Q̖��");
	if (status == 1)
		qm.sendPrev("ף�R��ɞ�#b<���Iʮ�֫C��>#k�� ϣ�����ܞ�����һ���΄ն�׃�ø���ǿ��\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142353:#   #t1142353#");
	if (status == 2){
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.gainItem(1142353,1);
		qm.dispose();
}
}