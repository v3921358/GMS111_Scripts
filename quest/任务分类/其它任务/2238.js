/*
	����:	ֽ���������ǣ�
	�؈D:	��Ժ����
	����:	105100100
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
		qm.sendNextS("���ˣ�����#b#m105020000##k�l�F�ˏ�#b#p1063014##k�����ܸ��V�Ҽ��l���������l�᣿",3);
	if (status == 1)
		qm.sendPrev("�o�����ˣ���Ҫ����˯�X���@�N������߀���������ˆ����ɡ�");
	if (status == 2){
		qm.forceStartQuest();
		qm.dispose();
}
}
