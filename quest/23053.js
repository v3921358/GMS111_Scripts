/*
	����:	��Խ�ҵ���
	�؈D:	�����߱���
	����:	310010000
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
		qm.sendNext("��ѽ�����@�����҂���Ӣ��#h0#�ᣡ ���������ڴ��eҊ���㣬�㿴��ȥ�����ˡ� �mȻ�҂��屻��ɫ֮����I�ˣ����@�e߀�������ġ� ���ǆ᣿");
	if (status == 1)
		qm.sendNextPrevS("#b�F�����w��һ�c�ˆ᣿");
	if (status == 2)
		qm.sendNextPrev("�mȻ߀���c�ۣ����^#p2151003#����ˇ����õġ� ���ѽ��׺��֏͵��^ȥ�Ġ�B�ˡ� ���^��һ�����}��");
	if (status == 3)
		qm.sendNextPrevS("#b����ʲ�N���}�� �y����ɫ֮�����ڲ߄�ʲ�N��\��");
	if (status == 4)
		qm.sendAcceptDecline("�@�εĆ��}���Ǆe�ġ��������㣡 ��̫ǿ��������׃�ò��ó����ˣ� ���^�ҿ��Ƿ���������ı����[�b���F�ڶ����ܽ����ˣ� ������Ҫ�o����y���n�}�� �������܆᣿\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142245#   #t1142245#");
	if (status == 5){
		qm.forceCompleteQuest();
		qm.changeJob(3312);
		qm.gainItem(1142245, 1);
		qm.sendNext("���ѽ�׌���D�ˡ� ͬ�r����֪���ģ����֟o�����ɲٿص���ߵļ��܂��ڽo���㡣 �mȻ�B�Ҷ��o����������������һ������������ �@��������Ȼ�����飬���ǆ᣿ ��������҂�����������ǿ���ˣ�");
		}
	if (status == 6)
		qm.sendNext("�@���ҵ�����һ��n�̡����Ź֡� �ҿ��Ǻ��������ġ� �mȻ�����ǿ������߀���ܸ��ҌW���İɣ� ���ԡ������n��Ҋ�ɡ� �mȻ��֪��ʲ�N�r�����_ʼ��");
	if (status == 7)
		qm.sendPrev("����֮ǰ��ϣ�������Է����ߵ���ݣ��^�mŬ����");
	if (status == 8){
		qm.dispose();
}
}
