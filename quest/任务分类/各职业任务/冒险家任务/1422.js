/*
	����:	�̿�֮·
	�؈D:	�϶���ʿ�ư�
	����:	103000003
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 4) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("�����x��̿�֮·�᣿ �������@�ɲ���һ�l�����ߵ�·�� �̿�����Ҫʹ���w�S���w�b�����L�h���x���ٹ������ˡ� �Ƅ��ٶȷǳ��죬��������ǿ�����Q��1:1����ǿ�ߡ�");
	if (status == 1)
		qm.sendNextPrev("�����쾚ʹ��Ͷ�S��������Ҫ�W��#b��׼����#k��#b���ٰ���#k�� ͨ�^#bǿ��Ͷ�S#k����׼���˵����c�l������һ�����@Ҳ�Ǵ̿͵����c֮һ��");
	if (status == 2)
		qm.sendNextPrev("�Л]���µĹ������ܣ� ��Ȼ�С� ���ن�ǿ����L֮�o�������˔��˵�#b�L֮�o��#k��߀���w������ը���w�S���oĿ�˼����܇��Ĕ�����ɂ�����#b�����w�S#k���ܡ�");
	if (status == 3)
		qm.sendNextPrev("�����f��̫���ˡ�������ɞ�̿͆᣿ �ǘӵ�Ԓ�����ͨ�^һ�����εĿ�ԇ��������ʲ�N�}�s�Ŀ�ԇ��ֻҪ�M��ʂ�õĿ������������L��#r30���ڰ�֮��#k���С�");
	if (status == 4)
		qm.sendAcceptDecline("��ԇ�ĕr�����ˎˮ�ù��ˣ����#b�����΄������_ʼ#k�� ����һ��Ҫ���ó�֜ʂ�֮�����Mȥ����ԇ�R���_ʼ�� ���ܵ�Ԓ���ҾͰ����͵���ԇ�ӝ�ȥ��");
	if (status == 5){
		qm.forceStartQuest();
		qm.warp(910370000,0);
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
		qm.sendYesNo("#t4031013#ȫ���Á����� ���܎�� ׌��ɞ�̿ͣ������e�� ���N�������R��׌��׃�ɴ̿͡� �ʂ���ˆ᣿\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142108:#   #t1142108#");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.changeJob(410);
		qm.removeAll(4031013);
		qm.gainItem(1142108,1);
		qm.sendNext("�õģ��ĬF���_ʼ�����#b�̿�#k�ˡ� �̿��Ƕ�����Ӱ֮�У�ɲ���g���������딳�����K���ˡ� ϣ�����ܸ���Ŭ���ޟ���");
		}
	if (status == 2)
		qm.sendOk("�̿ͱ��׃�ø����� ���Ǿ����ܰ��ǷN���������������ϡ����Լ��������������_�������ϣ���׃ǿ�������y��");
	if (status == 3){
		qm.dispose();
}
}