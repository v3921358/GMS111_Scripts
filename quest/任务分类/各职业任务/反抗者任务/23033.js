/*
	����:	�ƻ�����װ��
	�؈D:	�����߱���
	����:	310010000
*/

var status = -1;

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (qm.getQuestStatus(23033) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(23033) == 1) {
		qm.sendNext("���#o9001032#�Ɖĵ����� �ֵúã� �@�ӵ�Ԓ���҂������������F����ܾ���һЩ�ˣ� ���e���X�K축����ˣ� �˲��� ����҂������˴󹦣�");
		}
		}
	if (status == 1)
		qm.sendAcceptDecline("�����������@�Nǿ���������͛]�б�Ҫ�٪qԥ�ˡ� �������X��̫Σ�U�����^һ�Εr�g�ق��ڽo�㡭����Ҫ�Ѹ�ǿ�Ć��`�Y�����܂��ڽo�㣡 ������һ���������գ�\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142244#   #t1142244#");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.changeJob(3211);
		qm.gainItem(1142244,1);
		qm.sendNext("�F�����ѽ�������ǰ�����ˡ� ���Ư���ġ���Σ�U�ļ������猢��չ�F������ǰ�� ����Ҳ��׃�ø��y�����ǡ����Ǻǣ�����������NΣ�U���΄գ�������һ���������ա� ");
		}
	if (status == 3)
		qm.sendOk("׌�҂��´��n����Ҋ�ɡ�\n\n����֮ǰ��ϣ�������Է����ߵ���ݣ��^�mŬ���� ");
	if (status == 4){
		qm.dispose();
}
}
