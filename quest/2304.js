/*
	����:	Σ���е�Ģ������
	�؈D:	������
	����:	120000101
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0  ||  status == 3) {
		qm.sendOk("����㿼�]���ˣ�Ո�S�r�����ҡ�");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendAcceptDecline("�F�����ǿ�����S�࣬����һ�������������æ�����Ƿ����  ��");
	if (status == 1)
		qm.sendNext("���°l����Ģ�����������w��������Ҳ��̫����� ���Ǻ���ܾo����");
	if (status == 2)
		qm.sendNextPrev("�Ҳ�֪������ļ���������������͎�æ������ܕ���ʡ����ĕr�g����Ģ��������������һ���ţ�Ո��������o�T�l�� \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v4032375# #t4032375#");
	if (status == 3)
		qm.sendYesNo("�����F����ȥĢ���Ǳ���Ԓ���ҿ�������ȥ�� ��_��Ҫȥ�᣿");
	if (status == 4){
		qm.forceStartQuest();
		qm.gainItem(4032375, 1);
		qm.warp(106020000, 0);
		qm.dispose();
}
}

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
	if (status == 0)
		qm.sendNext("�š����@�����D�̹����e�Á��#v4032375:#�᣿");
	if (status == 1)
		qm.sendPrev("�ðɣ���Ȼ�����D�̹ٵ����]�ţ���������һ���ܰ����ˣ��ܱ�Ǹ�қ]�����ҽ�B�����ǰ���Ģ���Ǳ����l�����������������ģ��@�e���҂����r�Ĳ���֮�أ��҂����������⣬������ˣ��gӭ���Ģ��������");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.forceStartQuest(2311,"1");
		qm.gainItem(4032375, -1);
		qm.dispose();
}
}