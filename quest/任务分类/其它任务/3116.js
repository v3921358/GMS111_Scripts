/*
	����:	аĦ˹�ľ���
	�؈D:	аĦ˹�ķ���
	����:	211000002
*/


var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("ι������#b#h0##k�ɣ� �ǺǺǣ�һ����֪���Ҟ�ʲ�N�����ɣ� �ҽ�#bаĦ˹#k�� �mȻ�ҬF�ڱ��������@�e���������м���Ҫ���������Ӛ�㣬���Բŕ������^�� ����ң���F��һ���кܶ��Ɇ��ɣ� �ǺǺǡ�");
	if (status == 1)
		qm.sendAcceptDecline("��Ҳ�����ˣ��Ҳ����������٪��֡� �ǵģ���Ҷ��@�N���ҡ� �����ҵ������l�� ��ʲ�N�����P���@�e�� ��ʲ�N��ӛ����С�r������飿 ��׌���d��������Î͎��ҡ� ���܎͎����@�����ҵ��ˆ᣿");
	if (status == 2)
		qm.sendPrev("Ո�R�ϵ����@�e�� ��֪��֪��֪�����Ҿ���#b����ѩ���L�Ϲ��^����#k������..");
	if (status == 3){
		qm.forceStartQuest();
		qm.dispose();
}
}