/*
	����:	�𶾷�ʦ֮·
	�؈D:	ħ������ͼ���
	����:	101000003
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 5) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("�𶾷��������������f���Ƿ��������ߵȼ��ķQ���׎��� ������ʹ�õ�ħ���֞�����ݺͶ����ݣ����Բű��Q��𶾷�����");
	if (status == 1)
		qm.sendNextPrev("߀�U��ħ�����Ę��ӵ��N��߀��ʹ���^�ߵȼ���ħ���� ������Ք���ħ����#bħ������#k���߿����꠆Tħ����#b������#k��߀�п�ʹ�ø�ǿ��֮ħ���Ļ�������#b���Z��ͨ#k��#b�ǻۼ��l#k�ȵȡ�");
	if (status == 2)
		qm.sendNextPrev("���ǻ�ϵ���������c�o�ɮ������ǿ���������#b����ד��#k�c�������ˮ���Bͬ�܇��Ĕ���ȫ���ж���#b���F�g#k�ˡ� ���߶��Ƿǳ�ǿ��Ĺ������ܡ�");
	if (status == 3)
		qm.sendNextPrev("�ܵĂ�����������o�蔳�˳��m�����Ĕ�����#bԪ������#k�c���ɻ��栝��#b��ԭ֮��#k��Ҳ�Ƿǳ����õļ��ܡ�");
	if (status == 4)
		qm.sendNextPrev("��B���ҵ��˞�ֹ��Ρ�����Ҫ���ǣ�ħ��߀���H���w����������˼�ġ� ���N����Ҫ�x��𶾷���֮·�᣿ ����ˣ���Ҫ���һ�����Ƿ���гɞ鷨�����Y��");
	if (status == 5)
		qm.sendAcceptDecline("��ԇ�ܺ��Ρ���ֻҪ�ڜʂ�õĿ������������L��#r30�����кڰ�����������#k���С��������R�υ��ӿ�ԇ�᣿ ���ܵ�Ԓ���ҾͰ����͵���ԇ֮��ȥ��");
	if (status == 6){
		qm.forceStartQuest();
		qm.warp(910140000,0);
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
		qm.sendYesNo("#t4031013#ȫ���L������������֪����һ�����p����ͨ�^�� �õģ��K춡����ҁ�׌��׃�ɻ𶾷����� �ʂ���ˆᡭ����\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142108:#   #t1142108#");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.changeJob(210);
		qm.removeAll(4031013);
		qm.gainItem(1142108,1);
		qm.sendNext("�õġ����ĬF���_ʼ�������#b�𶾷���#k�ˡ������������^�ߵ���������A��ʹ����Ȼ�������Ɣ��˵��ˡ���ϣ����һ��ҪŬ�������W�R��..");
		}
	if (status == 2)
		qm.sendOk("�������׃�ø��������Ǿ����ܰ��ǷN���������������ϡ� ���Լ��������������_�ĵ�·�ϡ����h��׃ǿ�y�ö࡭..");
	if (status == 3){
		qm.dispose();
}
}