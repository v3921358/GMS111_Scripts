/*
	����:	��һ������Ľ��
	�؈D:	���֮��
	����:	200000000
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
		qm.sendNext("�ţ� ��������ʲ�N�᣿ �ǷN���ѵı��顭���ţ�#m200000000#��ֲ���Л]��Ѹ�����L�� �ף� �������N֪���ģ� ���Ǐ����e ���Ć᣿");
	if (status == 1)
		qm.sendNextPrev("�ǵģ��l���^�ǷN�¡�#b���#o4230105#ͻȻ׃���҂������˺ܴ���韩#k�� ߀���Ђ�·�^��ð�U�ң���������߀���X��һ�N�Ƿ��������������{��K������@���£��F���ѽ��]�І��}�ˡ�");
	if (status == 2)
		qm.sendPrev("�����N�@�����飿 �����ѽ�����ˣ��ò��������ˡ���\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 28135 exp");
	if (status == 3){
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.gainExp(28135);
		qm.dispose();
}
}