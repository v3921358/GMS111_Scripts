/*
	����:	��ɫ֮���������
	�؈D:	���壡ʵ���Ҽ���
	����:	931000310
*/

var status = -1;

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (qm.getQuestStatus(23049) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(23049) == 1) {
		qm.sendNext("��ɹ����Ɖĵ��˺�ɫ֮����������� ���������治�����ţ� �B�Ҷ��]�����������飬�㾹Ȼ�����ˣ� �����ǂ��˲���Ă� �����@�ӵķ����ߣ��Ҟ���е��Ժ���");
		}
		}
	if (status == 1)
		qm.sendPrevS("���� �����F�ڲ����f�@Щ�ĕr�򡭡��l�F���������Ɖ�֮�ᣬ#p2154009#�ܿ�͕��������µ��@�e�� �҂�������@֮ǰ�ӳ�ȥ�� ��Ҫ�R��ʹ�õ��±���#v4032740:##t4032740#�ˣ� ���ˣ�һ��������������",3);
	if (status == 2){
		qm.forceCompleteQuest();
		qm.warp(310010000, 0);
		qm.dispose();
}
}