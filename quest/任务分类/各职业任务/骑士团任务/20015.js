/*
	����:	������Ů������
	�؈D:	ʥ��
	����:	130000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.sendOk("��֪����qԥ�ˣ������ҿ��Կ�������⣬߀�]�бŰl����");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("��֪���᣿ ð�U�u���翴����ܺ�ƽ��������ĳЩ�ط��s��M�˺ڰ��������� ����ħ��������Щ����Ҫ�ͻ�İ���ħ���������{��ð�U�u���磡");
	if (status == 1)
		qm.sendNextPrev("�҂��������@�e���Դ������҂��Ĕ���Խ��Խ���ѡ� �҂���Ҫ����ǿ��");
	if (status == 2)
		qm.sendAcceptDecline("�����Ҳ���̫���ģ�#b#h0##k���_�����ܱ��oð�U�u����᣿ ����������Լ��ܳɞ�ð�U�u�Tʿ�F������������������@һ�У�");
	if (status == 3)
		qm.sendPrev("#p1101002#���ҵ��\�������������ҵ���߅������������ɞ�һ��ð�U�u�Tʿ�� ϣ����ɹ���\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142065# 1 #t1142065#");
	if (status == 4){
		qm.forceStartQuest();
		qm.gainItem(1142065, 1);
		qm.dispose();
}
}