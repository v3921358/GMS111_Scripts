/*
	����:	������ɳ�
	�؈D:	�����߱���
	����:	310010000
*/

var status = -1;

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 3) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (qm.getQuestStatus(23025) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(23025) == 1) {
		qm.sendNext("�@�����ǂ�#v4032739:##t4032739#���� ��Ȼ����ֻҪ�����@���n���Ϳ��Ԍ������߽���ķ��������{���ˣ� �ֵúã�");
		}
		}
	if (status == 1)
		qm.sendNextPrev("�@���΄�ԭ��������΄գ��������⽻�o��ġ� �ǂ���ɫ֮��ɆT������һ�������H�ְ���������ɣ� ����ϣ������ˏͳ𣬿��԰��΄���ɵø��á�");
	if (status == 2)
		qm.sendNextPrev("�����қ]�뵽������ɵ��@�NǬ�Q������ �����˲��� ��ĳ��L�ٶȿ��ǳ����ҵ��A�y�� ׌�Ҹ��X�Լ��ĸ����������x��");
	if (status == 3)
		qm.sendAcceptDecline("�ұ��Ԟ��Ǻܾ���������顭������������L���@�N�죬�Ҿ͛]�б�Ҫ�qԥ�ˡ� ���R��׌���M����һ�A�Ρ� ׌��׃�ɺ���ǰ��ȫ��ͬ�ġ��������ɵزٿv�����Cе��ǿ��ęCе����\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142243#   #t1142243#");
	if (status == 4){
		qm.forceCompleteQuest();
		qm.changeJob(3510);
		qm.gainItem(4032739,-1);
		qm.gainItem(1142243,1);
		qm.sendNext("���ѽ�׌���D�ˣ��c��ͬ�r����Ҳ���ҵ�֪�R�ͼ��ܶ����ڽo���ˡ� ���⣬��߀����֮ǰʹ�õ����֏������ˡ� ���ԬF�ڵ����ѽ������^ȥ�����ˡ� �ǂ������M���ęCе�����@�����㣬Ո��ú������«@�õ������ɡ�");
		}
	if (status == 5)
		qm.sendOk("�´��n����Ҋ��\n\nϣ�������ڴ����g�ú�չ�F�����ߵČ����� ");
	if (status == 6){
		qm.dispose();
}
} 