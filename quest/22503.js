/*
	����:	һ����
	�؈D:
	����:	����
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.sendOk("���������@���I�����أ���ֻ�ǂ����ӡ��@���e�`�ģ�");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("�������������@��������Ҫ�ġ�����Ҫ���РI�B�Ė|�������ˣ�");
	if (status == 1)
		qm.sendNextPrevS("#bHm.�����Ԋ�����ʳ�݄����������ʳ������������Ҽ�l�����i������ӣ�#k");
	if (status == 2)
		qm.sendAcceptDecline("�i����ʲ�᣿�ā�]�� �f�^����������óԣ��ҽ��ܣ��o�ҳ��c�óԵġ�����ֲ��ʲ�ᶼ�]�У�");
	if (status == 3)
		qm.sendPrevS("#b(ԇԇ�o�נ�ҼЩ�i�⡣��������r���Y�C�����^�i��ʮ��ԓ�ǳ���ġ�)#k",3);
	if (status == 4){
		qm.forceStartQuest();
		qm.dispose();
}
}