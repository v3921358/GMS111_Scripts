/*
	����:	�µĿ�ʼ
	�؈D:	���
	����:	140000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 5) {
		qm.sendOk("��ѽ�� ��Ҫ�ܽ^�����X���Լ�һ��Ҳ�����޾�����˼�᣿ �����Լ�һ���ˣ����������˵Ď�����ԓ���Եõ����õĽY�������F��Ҳԓ�W�W����������̎�ķ����ˡ�");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("һ����������ʲ�N��Ę����Ȼ�K�O֮ì�J����Ę��ӡ����N�����#bʹ���^�K�O֮ì��Ӣ�ۣ�������ʿ#k�]�e���@����߀�]������ʲ�N�أ� �����c�K�O֮ì���P�ļ���...");
	if (status == 1)
		qm.sendNextPrevS("#b(���V���ˎׂ�ӛ�õļ���.)#k");
	if (status == 2)
		qm.sendNextPrev("�mȻ���൫Ҳ���շ��ˡ� ���N�ĬF����Ҫ�ñMȫ���һ���ǰ�������ˡ��mȻ��ʧӛ�������������������^���£�һ�����Ժܿ���һ������ġ�");
	if (status == 3)
		qm.sendNextPrevS("#bҪ���N�һ������أ�");
	if (status == 4)
		qm.sendNextPrev("�@����... ֻ��һ���k��. �޾�! �޾�! �޾�! �޾����޾���Ԓ������һ�����w�����һ��ǂ����z���ĸ��X��");
	if (status == 5)
		qm.sendAcceptDecline("���ʹ�ø���Ϥ��������ԓ�����ã��o��һ��#b#v1442077:##k�������ǂ�����ȥ#b#m140010100##kҊ#b���Z�ώ�#p1202006##k����������޾��ṩ�����ġ�");
	if (status == 6){
		if(!qm.canHold(1442077, 1)) {
		qm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
		qm.dispose();
		return;
		}
		qm.forceStartQuest();
		if(!qm.haveItem(1442077, 1)) qm.gainItem(1442077, 1);
		qm.dispose();
}
}