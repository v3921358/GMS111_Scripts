/*
	����:	��ȫ���˵Ĺ���
	�؈D:	��������¥
	����:	211061001
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
		qm.sendYesNo("����õ�廨԰���ҵ��˺����װ����ҵļ���Ļ��ס������������ն�����ô�ã����ò��Ǻܺÿ��������������ʱ��������ĺܿ��ġ����õģ�������Ұ��������װ���");
	if (status == 1)
		qm.sendPrev("�������ǹ�ȥһ��������#v4032837:##t4032837#����������װ��������������ұ�������飬��������������ǾͰ������ˡ������ٵ�#b�Ӽ���#kȥһ�ˡ���");
	if (status == 2){
		if(!qm.canHold(4032837, 1)) {
		qm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
		qm.dispose();
		return;
		}
		qm.forceStartQuest();
		qm.gainItem(4032837, 1);
		qm.warp(211070200, 1);
		qm.dispose();
}
}