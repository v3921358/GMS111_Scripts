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
		qm.sendNext("��ѽ�����@�����҂���Ӣ��#h0#�᣿ �Ǻǣ����ڴ��eҊ���㣬��׌�˸��d�� �mȻ���ɺͺ�ƽ���Z���ˣ����@�e߀�������ĵط���");
	if (status == 1)
		qm.sendNextPrevS("#b�F�����w��һ�c�ˆ᣿");
	if (status == 2)
		qm.sendNextPrev("�ǵģ�#p2151003#��ˎ�ܹ��ã����ѽ��ö��ˡ� �׺��ѽ���ȫ�֏͵���ǰ�Ġ�B�ˡ� ���^��һ���ܴ�Ć��}��");
	if (status == 3)
		qm.sendNextPrevS("#b����ʲ�N���}�� �y����ɫ֮�����ڲ߄�ʲ�N��\��");
	if (status == 4)
		qm.sendAcceptDecline("�@�εĆ��}���Ǆe�ġ��������㣡 ��̫ǿ���ҵ����ö�׃���ˡ� ���^�ҿ��ǽ��ڷ����ߙCе���ώ�����Ȼ��ͽ��߀������������Ҫ�o����y���n�}�� �������܆᣿\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142245#   #t1142245#");
	if (status == 5){
		qm.forceCompleteQuest();
		qm.changeJob(3512);
		qm.gainItem(1142245, 1);
		qm.sendNext("���ѽ�׌���D�ˡ� ͬ�r���ҿ����u������ǿ�ęC�����ͽo���㡣 ��Щ�|���B�Ҷ��o����ȫ���ƣ��o����ȫ�l�]�������������������^������һ������������ ������Ƿ�������ǿ�ęCе����");
		}
	if (status == 6)
		qm.sendNext("�F���ҵ��n�̡����ѽ���Ҫ�Y���ˡ� ���ǬF��߀�����Y���� �mȻ��_������ǿ�ˣ�������߀�кܶ�Ҫ���ҌW���ĵط��� �҂��´��n����Ҋ�ɡ� �mȻ��֪���´��n��ʲ�N�r����_ʼ������");
	if (status == 7)
		qm.sendPrev("����֮ǰ��ϣ�������Է����ߵ���ݣ��^�mŬ����");
	if (status == 8){
		qm.dispose();
}
}
