/*
	����:	���ֵķ�Ӧ
	�؈D:
	����:	����
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
		qm.sendNext("���ˣ� �҂�����ĽM����#m310000000#���P�S����ܿ��ɣ����ǆ᣿ �҂������������΄գ���ɫ֮��ɆT����ݺ�����u�_�����ˡ����@����Ǻ��᣿");
	if (status == 1)
		qm.sendNextPrev("�ɞ��ɫ֮��ĳɆT֮�ᣬ���񌦺�ɫ֮���@���M���sԽ��Խ�������ˡ�#m310000000#���˂������ӑ����ɫ֮�� ��ɫ֮������Ǻ��ˆ᣿");
	if (status == 2)
		qm.sendNextPrevS("#b��Ҳ��֪���� ��֮�҂��F�������ģ�����ֻ��ȥ�t���ɫ֮����΄ա� ���ǆ᣿");
	if (status == 3)
		qm.sendPrev("����Խ��Խ�㲻�����ˡ� ��ɫ֮�����ǺýM����߀�ǉĽM����");
	if (status == 4){
		qm.forceStartQuest();
		qm.dispose();
}
}