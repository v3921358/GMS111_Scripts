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
	if (qm.getQuestStatus(23024) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(23024) == 1) {
		qm.sendNext("#i4032738:##t4032738#��ȡ�؁����� �ֵúã� �Ҿ�֪����һ������������");
		}
		}
	if (status == 1)
		qm.sendNextPrev("�@���΄�������������������e���^���o��ġ� ��ɫ֮����ǂ�����ǰ׌����^���^�����ǆ᣿ �Ұ��΄ս��o�㣬������׌�������ͳ�");
	if (status == 2)
		qm.sendNextPrev("�뵽������ɵ��@�NǬ�Q���䡭�����˲��� �����@�N�̵ĕr�g�ȣ��@�����@�˵ĳ��L��");
	if (status == 3)
		qm.sendAcceptDecline("�ǘӵ�Ԓ���͛]�б�Ҫ�����ˣ� �ұ����X�����c�磬���^���������ȫ�ò��������ˡ� �ҿ���׌���M����һ���A���ˡ� ׌��׃�ɺ���ǰ��ȫ��ͬ�ġ����и�ǿ�����ı����[�b��\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142243#   #t1142243#");
	if (status == 4){
		qm.forceCompleteQuest();
		qm.changeJob(3310);
		qm.gainItem(4032738,-1);
		qm.gainItem(1142243,1);
		qm.sendNext("���ѽ�׌���D�ˣ�ͬ�rҲ���������ǿ�ļ��ܡ� �F�����ѽ�������ǰ�����ˡ� ���ѽ�׃���˸��졢�����g����ǿ��ı����[�b�ˡ� �M���������µ������ɡ�");
		}
	if (status == 5)
		qm.sendOk("�´��n����Ҋ��\n\n����֮ǰ��ϣ�������Է����ߵ���ݣ��^�mŬ���� ");
	if (status == 6){
		qm.dispose();
}
} 