/*
	����:	���µ�ս��
	�؈D:	ȼ�յ���ľ��3
	����:	272000300
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 4) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("ι���@�e��");
	if (status == 1)
		qm.sendNextPrevS("#b�l����ʲ�N�£����� �ף��@�Ǒ��񡭡����� �����N׃���ˡ���");
	if (status == 2)
		qm.sendNextPrev("���J�R���ˆ᣿ �ҿ���������@��������ˡ����������Ӷ��]�P�S���F��ֻ�����܎����҂���");
	if (status == 3)
		qm.sendNextPrev("���Ǒ�֮��Ħ�~�� ��߅���ҵ����ˣ��Һ�����һ����˺�ħ�������������h�ط�ӡ������ ���Ǻ�ħ�����ڱ���ӡ��˲�g������������Y�oӢ�ۂ�����ǿ����{�䡣 ���ˇ��ʧȥ�����R�������ˡ� ");
	if (status == 4)
		qm.sendAcceptDecline("�@����ȥ��Ԓ�����������h��վ�������ˡ� ��횃�������ˎ�����ȫ�ĵط�ȥ���У�������Ҳ׃�����@�����ӣ�����ϣ�����܎͎��ҡ� ");
	if (status == 5){
		qm.forceStartQuest();
		qm.dispose();
}
}