/*
	����:	ѩ�˵ķ�ŭ-��������
	�؈D:	ѩ�������Ϣ��
	����:	211040102
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNextS("����ɢ�l��ҫ�۵������� ����K��һ��͸�����������ֲ��Ǳ��K���� �ҵ������܇��м�����һ�¡�",3);
	if (status == 1)
		qm.sendPrevS("�����һ������ˡ� �܇�Ҳ�ܿ����ׂ����ӡ��",3);
	if (status == 2){
		qm.forceStartQuest();
		qm.dispose();
}
}