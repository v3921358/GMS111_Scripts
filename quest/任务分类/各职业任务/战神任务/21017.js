/*
	����:	��������ѵ��3
	�؈D:	���
	����:	140000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 5) {
		qm.sendOkS("#b(�ú��µ����鰴�¾ܽ^�������ֲ����@������..悶���������Մ����.)#k",3);
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("�F�ڽ�Ǒ�ԓ����_�˰ɣ��˕r��������倣����ܓ��������Ļ��A�w�����ã����N�҂��^�m�M�л��A�w��呟���");
	if (status == 1)
		qm.sendNextPrev("�F��ǰ�� #b#m140020200##k ���� #r#o0100133##k ֻҪ����....#r20�b#k ���ң��͕�呟��w���кܴ�Ď������ã���ȥ��...�ף�����Ԓ���f��?");
	if (status == 2)
		qm.sendNextPrevS("#b........��ʲ�N������������.....?");
	if (status == 3)
		qm.sendNextPrev("��Ȼ�����ӡ���ѽ�����X�� 20�b̫�ن᣿ ���Nȥ����100�b���N�Ӱ�������������ȻҪ�ޟ������N��Ч����ô��ĳ��Ҫ��ȥץ 999�b����..");
	if (status == 4)
		qm.sendNextPrevS("#b�������������@�Ӿ͉���");
	if (status == 5)
		qm.sendAcceptDecline("��ѽ��ѽ���]�б�Ҫ���o�����꣡ȫ���ģ��˽�Ӣ������c׃�������顣Ӣ�����̫������...");
	if (status == 6)
		qm.sendNextS("#b(�� һ�κ������Ҫ��ȥ���� 999�b��Ǭ�������.)#k",3);
	if (status == 7)
		qm.sendPrev("���NՈǰ�� #b#m140020200##k���� #o0100133# 20�b�ɡ�");
	if (status == 8){
		qm.forceStartQuest();
		qm.dispose();
}
}