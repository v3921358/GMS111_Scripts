/*
	����:	����֮·
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
		qm.sendNext("�����x��b��֮·�᣿ �b������Ҫʹ�ȫ����w�b�� ���ڽ����x���ٹ������ˣ����ߔ������ϵĖ|�����I��");
	if (status == 1)
		qm.sendNextPrev("�����L��ͨ�^#b��׼�̵�#k��#b���ٶ̵�#k��߶̄����쾚�Ⱥ͹����ٶ��ᣬ��#b��ͨ�g#k�����������ˣ����Z��Ʒ������ʹ��#bޒ����#k���˰l���B�m������");
	if (status == 2)
		qm.sendNextPrev("#b���X�o��#k��#b�ܷ���ͨ#k����ʹ�����x���Y��Σ�U������͡� ͨ�^#b���\#k����������Լ��Ĺ�������");
	if (status == 3)
		qm.sendNextPrev("�š��������f̫���ˡ� �����x��b��֮·�᣿ �Ǿͅ��ӿ�ԇ�ɡ� ����ʲ�N�}�s�Ŀ�ԇ�� ֻҪ�M��ʂ�õĿ������������L��#r30�����кڰ�����������#k�Ϳ����ˡ� ���ݷǳ����Σ����ǡ������e�Ĺ������ͨ�����ǿ���������І��}�أ�");
	if (status == 4)
		qm.sendAcceptDecline("��ԇ�ĕr��ˎˮ�ù��˵�Ԓ���ͱ��#b�����΄������_ʼ#k�� ���Ա�횜ʂ��֮�����Mȥ�� �õģ���ԇ�R���_ʼ�� �ʂ���˵�Ԓ���ҾͰ����͵���ԇ�ӝ�ȥ��");
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
		qm.sendYesNo("#t4031013#ȫ���Á����� ���܎�� ׌��ɞ�b�ͣ������e�� ���N�������R��׌��׃�ɂb�͡� �ʂ���ˆ᣿\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142108:#   #t1142108#");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.changeJob(420);
		qm.removeAll(4031013);
		qm.gainItem(1142108,1);
		qm.sendNext("�õģ��ĬF���_ʼ�����#b�b��#k�� �b�����Կ����ЄӺͼ��ɉ��Ɣ��˵��ˡ�ϣ�����ܸ���Ŭ���ޟ�");
		}
	if (status == 2)
		qm.sendOk("�̿ͱ��׃�ø����� ���Ǿ����ܰ��ǷN���������������ϡ� ���Լ��������������_�������ϣ���׃ǿ�������y��");
	if (status == 3){
		qm.dispose();
}
}