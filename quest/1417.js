/*
	����:	��ʦ֮·
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
		qm.sendNext("�����x������֮·�᣿ ����������ϵ�е�ħ���������΢���c�؄e�� ���кܶ�#b�֏�#k��#b�o��#kϵ�еļ��ܡ�");
	if (status == 1)
		qm.sendNextPrev("��Ȼ���������߀��ħ������ �������Ք���ħ����#bħ������#k���ɰl�]��ǿ��ħ���Ļ�������#b���Z��ͨ#k��#b�ǻۼ��l#k�ȣ���������ʹ�á� ����߀����ͨ�^#b��֮���o#k���܁�����Լ����ܵĂ�����");
	if (status == 2)
		qm.sendNextPrev("������ߴ����Եļ����ǻ֏�ħ��#bȺ�w�ΰK#k�� ���ǿ���ʹ�����Լ��ڃ��܇�����꠆T��Ѫ���֏͵��@��ħ���� ���H��ˣ�߀����ͨ�^#bף��#k���꠆T������ֵ���ڽM꠵ĕr������ܚgӭ��");
	if (status == 3)
		qm.sendNextPrev("����߀�й���ħ���ء� �������#b�}���g#k���������Ĕ��ˡ� �@��ħ���������c���ǿ��Խo��ħϵ���߲���ϵ�Ĺ���ʩ�ӘO��������K��߀���Ի֏�꠆T���w����");
	if (status == 4)
		qm.sendNextPrev("�f���@�Ӿ͉��˰ɡ����� ħ��Ҫֱ��ʹ�òŕ��w�������еĘ�Ȥ�� �����x������֮·�᣿ �x���Ԓ���Ҿ́������Л]�гɞ��������Y��");
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
		qm.sendYesNo("#t4031013#ȫ���L������������֪����һ�����p����ͨ�^�� �õģ��K춡����ҁ�׌��׃�������� �ʂ���ˆᡭ����\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142108:#   #t1142108#");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.changeJob(230);
		qm.removeAll(4031013);
		qm.gainItem(1142108,1);
		qm.sendNext("�õġ����ĬF���_ʼ�������#b����#k�ˡ�����������һ�w��\���ģ����f��ע�������������ˡ���ϣ�����܈Զ��Լ�������������");
		}
	if (status == 2)
		qm.sendOk("����������f�������ǳ���Ҫ�� ������׷�S��������չʾ�����Č��ꡭ��ֻҪŬ�����Ϳ��ԫ@�ø�ǿ�����}���ˡ�..");
	if (status == 3){
		qm.dispose();
}
}