/*
	����:	�ƺ� - ʮ�����˴�ʦ
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
		qm.sendAcceptDecline("ʮ�ָ��x�������ֹ��ɫ������˽�ħʮ���ÈF���΄ա� �������ڃȵĽ�ħʮ���ÈF�ɆT��������#h0#��Ļ��S�� ������������#b<ʮ�֫C�˴�>#k��");
	if (status == 1)
		qm.sendPrev("����#h0#��#b<ʮ�֫C�˴�>#k�ķQ̖�� �ڴ���������ӻ��S�ı�F��\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142354:#   #t1142354#");
	if (status == 2){
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.gainItem(1142354,1);
		qm.dispose();
}
}