/*
	����:	����Ͱ�����صĶ���
	�؈D:	��������
	����:	103000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("ʲ�N����ܽ^�҆᣿�ðɣ���Ҫ�ܽ^�;ܽ^�����Ҿ���#p1101002#һ��һʮ�Ĉ��ɡ�");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendAcceptDecline("�䌍�����治�����š��������f���Tʿ�F�T�Ǿ͛]�k���ˡ��֛]�������˿����{�顭�Ǿ��f���@�ε��΄հɡ�");
	if (status == 1){
		qm.forceStartQuest();
		qm.dispose();
}
}
