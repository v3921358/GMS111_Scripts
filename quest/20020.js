/*
	����:	5����·
	�؈D:	ʥ��
	����:	130000000
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
		qm.sendNext("���ѽ��_����10�����f�����Ŭ���� �ܺá� ��F���ѽ������˳����ߵľ��磬���J��������ʽ�ɞ��ޟ��Tʿ���Y�� �����@֮ǰ�������Ȇ���һ�����}�� �����x���ėl�Tʿ֮·�أ�");
	if (status == 1)
		qm.sendNextPrev("�Tʿ֮·��ֹһ�l�� ��ǰ��ȴ�����ģ�һ������l·�����x���ėl·��������ɡ� �����ٲ�Ҫ׌�Լ���ڡ�");
	if (status == 2)
		qm.sendAcceptDecline("�ҬF��׌���ٲt��һ��ÿ���I����ɫ��ʹ������_�x���Լ�����Ҫ�lչ�ĵ�·�������֮�ᣬ��ȥ�x���ăx��#b�Tʿ����#k�ɣ�");
	if (status == 3){
		qm.forceStartQuest();
		qm.forceCompleteQuest(20100);
		qm.warp(913040100, 0);
		qm.dispose();
}
}