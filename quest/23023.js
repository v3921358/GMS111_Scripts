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
	if (qm.getQuestStatus(23023) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(23023) == 1) {
		qm.sendNext("#i4032737:##t4032737#��ȡ�؁����� �ֵúã� �Ҿ�֪����һ������������ ");
		}
		}
	if (status == 1)
		qm.sendNextPrev("�Ǻǡ����@���΄����ҹ��⽻�o��ġ� ��ɫ֮����ǂ����^ȥ��������׌����^���^�ɣ� �^ȥ���B�����½Ƕ����������F�ھ�Ȼ�@�N�p�׾ʹ�������");
	if (status == 2)
		qm.sendNextPrev("��_���ǂ��˲���Ă� �ό��f���Ҹ����]�뵽������@�N�̵ĕr�g�ȳ��L���F���@���̶ȡ� ��߀�Ԟ�����Mһ�������ء�");
	if (status == 3)
		qm.sendAcceptDecline("��춳��L�Ĵ_�J�@�Ӿ��㹻�ˣ� ��߀�Ԟ�������c�磬��������ȫ�ò��������ˡ� �҂��M����һ���A�ΰɣ� ���׃����ǰ�����o������ē��и�ǿ�����Ć��`�Y������\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142243#   #t1142243#");
	if (status == 4){
		qm.forceCompleteQuest();
		qm.changeJob(3210);
		qm.gainItem(4032737,-1);
		qm.gainItem(1142243,1);
		qm.sendNext("��׌���D����ͬ�r��������˱�֮ǰ�ļ��ܸ�ǿ�ļ��ܡ� �F�����ѽ����Ǐ�ǰ�����ˡ� ���ѽ�׃�ɸ�ǿ�����񱩵Ć��`�Y���� �Ǻǣ�����L���ٶ��@�N�죬�����ҵĽ��nˮ׼Ҳ���e�");
		}
	if (status == 5)
		qm.sendOk("�´��n����Ҋ��\n\n����֮ǰ��ϣ�������Է����ߵ���ݣ��^�mŬ���� ");
	if (status == 6){
		qm.dispose();
}
}