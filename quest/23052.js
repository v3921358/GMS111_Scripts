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
		qm.sendNext("��ѽ�����@�����҂���Ӣ��#h0#�᣿ �Ǻǣ����ڴ��eҊ���㣬��׌�˸��d�� �mȻ�҂��屻��ɫ֮����I�ˣ����҂���߀�������ġ� ���ǆ᣿");
	if (status == 1)
		qm.sendNextPrevS("#b���w�F�ڛ]���˰ɣ�");
	if (status == 2)
		qm.sendNextPrev("�ţ�#p2151003#�ı��ºܺã����ѽ��]���ˡ� �F���ѽ���ȫ�֏͵����^ȥ�Ġ�B�� ���^߀��һ�����}��");
	if (status == 3)
		qm.sendNextPrevS("#b����ʲ�N���}�� �y����ɫ֮�����ڲ߄�ʲ�N��\��");
	if (status == 4)
		qm.sendAcceptDecline("�����@�εĆ��}���ǡ��㣡 ��׃��̫ǿ���ˣ���Ȼ�������B�Ҷ������������顣 �@��̫׌�������ˣ� ������Ҫ�o��һ�����y���n�}�� �������܆᣿\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142245#   #t1142245#");
	if (status == 5){
		qm.forceCompleteQuest();
		qm.changeJob(3212);
		qm.gainItem(1142245, 1);
		qm.sendNext("���ѽ�׌���D�ˡ� ͬ�r�Ұ���֪���ģ����֟o���쾚���յ�������ߵļ��܂��ڽo���㡣 �mȻ�қ]����ȫ��������������������һ������������ �����҂��������е���ǿ�ߣ� ߀��ʲ�N���������أ�");
		}
	if (status == 6)
		qm.sendNext("�@���ҵ�����һ��n���ˆᡭ�����������ܡ� �ҿ��Ǻ��������ķ����ߡ� �F�������ǿ������߀���ܸ��ҌW���İɣ� ���ԡ������n��Ҋ�ɡ� �mȻ��֪��ʲ�N�r�����_ʼ��");
	if (status == 7)
		qm.sendPrev("����֮ǰ��ϣ�������Է����ߵ���ݣ��^�mŬ����");
	if (status == 8){
		qm.dispose();
}
}
