/*
	����:	���ı���
	�؈D:	ʱ���ѷ�
	����:	272000000
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
		qm.sendNext("#b#h0##k�������ڵ��㡣 �@�Εr�g����һֱ���{�����֮������������T�Л]���ܵ��������յ�Ӱ푡� ߀�����������T�]�¡� �^ȥ��������N���ˣ�");
	if (status == 1)
		qm.sendNextPrevS("#b߀�ü��r�����˰������յķ������v�V��֮ǰ�l����һ�У���");
	if (status == 2)
		qm.sendNextPrev("�@������� ������õ���Ϣ֮һ�� ���N���������յ���\�ѽ�ȫ�������ˆ᣿");
	if (status == 3)
		qm.sendNextPrevS("#b���f�������յķ�����Ȼ���ڡ� �����f����ͨ�^�r�g�ѿp���_�����ڵĴ�Ԫ�p϶��");
	if (status == 4)
		qm.sendAcceptDecline("�@�α����İ����򔡲��С� Ҫ�ǿ��Ե�Ԓ���Һ���׌#b#h0##k����Ϣһ�£����ǬF�ڲ��Ǖr�򣬷ǳ���Ǹ��");
	if (status == 5){
		qm.forceStartQuest();
		qm.dispose();
}
}