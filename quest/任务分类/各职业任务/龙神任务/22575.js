/*
	����:	��������ĵڶ�������
	�؈D:
	����:	��ɫӰ��
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("�Ҿ������ܽM�������T���ܱ�Ǹ�����@�ӵĹܵ������㣬�҂��ӵ��ˁ���#b#m211000000#��#p2022003#Ո��");
	if (status == 1)
		qm.sendNextPrev("�@�ε�����Ҫ��֮ǰ�y�ö࣬��������һ���������� ֻҪ������ѩ�������֮������ȱ�����ƣ��L��#b#v4000593:##t4000593##k���o#b#p2022003#��");
	if (status == 2)
		qm.sendAcceptDecline("ֻҪ���������@���΄գ��ҿ������������^ȥ��߀�У� ��������D���|���o�㣬�ҕ����j��ġ�");
	if (status == 3){
		qm.forceStartQuest();
		qm.warp(211000001, 0);
		qm.dispose();
}
}