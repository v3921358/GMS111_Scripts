/*
	����:	����Ĺ���
	�؈D:
	����:	����
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
		qm.sendNext("���ˣ� �ҷǳ��Єӣ� �������ǂ��������ˣ� �����㽛�������ǂ���o�ܴ���ˣ��ҾͺܸЄӣ� �҂������횎�����Щ�������y���ˣ� �����҂���ʹ����");
	if (status == 1)
		qm.sendNextPrevS("#b�ţ� ���NͻȻ�@�N�f�� ʹ����");
	if (status == 2)
		qm.sendNextPrev("�ţ� ���˺��ҬF�ړ�����ǿ������������ǆ᣿ �҂�֮�����ܹ������ǷN�������Ǟ��ˎ��������ˣ� �����@�N��ġ� ���������@�������������飡");
	if (status == 3)
		qm.sendNextPrevS("#b�����������������飿");
	if (status == 4)
		qm.sendAcceptDecline("�ǵģ� ׌�҂�ȥ������Щ�����y���˰ɣ� ��ʲ�N�ط���һ���������ڴ��õ����˵Ď�����");
	if (status == 5)
		qm.sendPrevS("#b����������������ȥ�����e�ˡ��š������X�Լ��܎����õģ�ȥ#m100000000#�����Л]�������ڞ�o�����������������ɡ��F���ґ�ԓ����ȥ�����e���ˡ�",3);
	if (status == 6){
		qm.forceStartQuest();
		qm.dispose();
}
}
