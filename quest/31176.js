/*
	����:	�������յĺۼ�
	�؈D:	ȼ�յ���ľ��4
	����:	272000410
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
		qm.sendNext("ԭ�����@�e���� ׌�����˺þá� �ҏĿ�������e�յ��ˈ�棬�f#b#h0##k������x������ ");
	if (status == 1)
		qm.sendNextPrevS("#b���Ǳ��Ҫ�������顣 ���ˣ��������պ��񵽷�ӡ��ħ�������^ȥ�ĕr�g���ȥ�ˡ�");
	if (status == 2)
		qm.sendNextPrev("�ǆ᣿���� �ѽ��ҵ��������յĺۼ��ˆ�?���������A���߀Ҫ�졣");
	if (status == 3)
		qm.sendNextPrevS("#b�������R�أ�");
	if (status == 4)
		qm.sendPrev("�Ǻǣ��Ҳ���׌���@�ӱ��v�Ė|�����ڰ����������档 �@�e������ĉ�Ĺ����..");
	if (status == 5){
		qm.forceStartQuest();
		qm.spawnMob(9300487, 345, 2);
		qm.dispose();
}
}