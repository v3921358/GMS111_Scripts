/*
	����:	��ɫ֮���������
	�؈D:	���壡ʵ���Ҽ���
	����:	931000311
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
	if (qm.getQuestStatus(23050) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(23050) == 1) {
		qm.sendNext("��ɹ����Ɖĵ��˺�ɫ֮����������� ���������� ���Ȼ�ǂ��˲���Ă� ���f�^�ҵ��۾��^�����e�� �]��ʲ�N�ȹ����ֵ��۾��������ˣ� �Ҿ�֪����һ������������ �������������@�ӵ��ˣ��Ҹе����Ժ���");
		}
		}
	if (status == 1)
		qm.sendPrevS("Ҫ�ǿ��Ե�Ԓ���Һ�����#p2154009#��ҫһ�¡������^Ҫ�������������Ԓ�����ߵĕr����ܕ����韩�� �҂��s�o�ص����±���ȥ�ɡ� ���R��ʹ��#v4032740:##t4032740#�� ���ˣ�һ��������������",3);
	if (status == 2){
		qm.forceCompleteQuest();
		qm.warp(310010000, 0);
		qm.dispose();
}
}