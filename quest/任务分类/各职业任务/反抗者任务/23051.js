/*
	����:	��ɫ֮���������
	�؈D:	���壡ʵ���Ҽ���
	����:	931000312
*/

var status = -1;

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
	if (qm.getQuestStatus(23051) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(23051) == 1) {
		qm.sendNext("��ɫ֮��������������ɹ����Ɖĵ��ˆ᣿ ���治�������Լ����۾��� ���׃��δ�� ��ģ���ĺ��˲��� ���ܼ��뷴���ߣ�����̫���ˣ� ��ģ� ��ġ���̫���ˣ�");
		}
		}
	if (status == 1)
		qm.sendPrevS("��������һ�r���ӣ�������Ҫ�o�¡�#p2154009#֪�������������ᣬһ�������I���¹��� �ڴ�֮ǰ�s�����ܰɡ� ���@��ʹ�õ��¿���#v4032740:##t4032740#�� һ��������������",3);
	if (status == 2){
		qm.forceCompleteQuest();
		qm.warp(310010000, 0);
		qm.dispose();
}
}