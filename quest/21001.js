/*
	����:	�ȾȺ�����2
	�؈D:	ĩ��ɭ��
	����:	914000300
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("#b���� ������ʿ�ܽ^�ˣ�");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendAcceptDecline("...���c������...�죡���c����ȥ��#b#p1209000##k���ˣ�");
	if (status == 1){
		qm.forceStartQuest();
		qm.gainItem(4001271,1);
		qm.warp(914000300);
		qm.dispose();
}
}

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("�����أ� ������������Щ���ӣ��Ϳ��c׌�����ρ�ɣ�");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendYesNo("#b#h0##kƽ���o�w���ˣ������أ�������Щ���ӎ��؁��ˆ�?");
	if (status == 1)
		qm.sendNext("����̫����... ����̫����.....");
	if (status == 2)
		qm.sendNextPrev("�������ˣ��F�ڲ���Մ�@Щ����ĕr�C����ħ�����Ě�Ϣ�ѽ������ؿ����ˣ������ѽ����X���۵�λ���ˣ����s����l��Ԓ���͕�������������");
	if (status == 3)
		qm.sendNextPrevS("#b�Ҳ����ߵģ��ゃ���̳��l��");
	if (status == 4)
		qm.sendNextPrev("#b#h0##k����Ҳ���Ϸ��۰ɣ����mȻ�˽�������յ�����һ�̵�����...�����ѽ�̫�t�ˣ������@���΄վͽ��o����ͬ�飬���҂�һ��ǰ��#b#m104000000##k�ɣ�");
	if (status == 5)
		qm.sendNextPrevS("#b�^�����У�");
	if (status == 6)
		qm.sendPrevS("#b�����ȣ��ゃ��ȥ#b#m104000000##k�ɣ��ҽ^���������ĵģ��҂�������ڡ���Ҫ��ͬ�邃һ��ȥ������ħ������",3);
	if (status == 7){
		qm.forceCompleteQuest();
		qm.gainItem(4001271,-1);
		qm.warp(914090010);
		qm.dispose();
}
}