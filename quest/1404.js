/*
	����:	���Ϊ�����Ļ�
	�؈D:	�϶���ʿ�ư�
	����:	103000003
*/

var status = -1;

function start(mode, type, selection) {
	if (mode != 1 && status == 3)
	status++;
	status++;
	if (status == 0)
		qm.sendNext("�����f���ǂ��˾����㣿#h0#�����ţ������f�����ǂ��������x��С������ι������ɞ��w�b�᣿ ��֪���w�b�᣿");
	if (status == 1)
		qm.sendNextPrev("��Щ���X���w�b��Щ͵͵������С͵�����䌍�����@�ӵġ� ð�U�u������w�b���ںڰ������h���Ķ̵����w�S���Y���ˡ� ������һ�c�������N���������������@�����w�b�ı��|���]�б�Ҫ�񶨡�");
	if (status == 2)
		qm.sendNextPrev("�w�b�ǿ����ÿ���ǿ�����ܹ������˵��I�� �mȻ���w���^����������Єӿ��٣����Կ����p�ض�ܹ�� ����\���ǿ���������L������");
	if (status == 3)
		qm.sendAcceptDecline("���N�ӣ� ����һ��̤���w�b֮·�᣿ ���������x���w�b֮·���Ҿ�ʹ���D�ٵ��ؙ࣬��Ո�㵽#b�U���ďU���ư�#kȥ�������ǂ��[�صĵط����㑪ԓ�е��s�ҡ�#r���������ϲ�g�����I��Ԓ������Ծܽ^�� �ҕ��������]�w�b֮���������·#k��");
	if (status == 4){
		qm.forceStartQuest();
		qm.warp(103000003);
		qm.dispose();
		}
	if (status == 5)
		qm.sendSimple("�㲻ϲ�g�w�b֮·�᣿ ��ϲ�g��Ԓ����Ҳ������ǿ�� �������x��ʲ�N�I�أ�\r\n#b#L1#��ʿ#l \r\n#b#L2#ħ����#l \r\n#b#L3#������#l \r\n#b#L5#���I#l");
	if (status == 6){
		if (selection == 1)
			qm.sendOk("�����ߑ�ʿ֮·�᣿ �mȻ���z����������������x��#b���g�̾�#k��ϵ��ġ� �����ͨ�^#b��ȵ��΄���ʾ#k�鿴��");
		if (selection == 2)
			qm.sendOk("������ħ����֮·�᣿ �mȻ���z����������������x��#b�h˹#k��ϵ��ġ� �����ͨ�^#b��ȵ��΄���ʾ#k�鿴��");
		if (selection == 3)
			qm.sendOk("�����߹�����֮·�᣿ �mȻ���z����������������x��#b������#k��ϵ��ġ� �����ͨ�^#b��ȵ��΄���ʾ#k�鿴��");
		if (selection == 5){
			qm.sendOk("�����ߺ��I֮·�᣿ �mȻ���z����������������x��#b�P��#k��ϵ��ġ� �����ͨ�^#b��ȵ��΄���ʾ#k�鿴��");
		}
		if (selection > 0 && selection < 6)
		qm.forceStartQuest(1406, selection);
		qm.dispose();
}
}

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("�ţ� ߀���ٿ��]һ�᣿");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendAcceptDecline("�gӭ���U���ưɡ��� �Ǻǣ����ˣ����óɞ��w�b�Ĝʂ��ˆ᣿\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1142107:#   #t1142107# \r\n#i1472061:#   #t1472061# \r\n#i1332063:#   #t1332063# \r\n#i2070015:# 500  #t2070015#");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.forceStartQuest(2899,"1");
		qm.changeJob(400);
		qm.resetStats(4, 4, 4, 25);
		qm.gainItem(1142107, 1);
		qm.gainItem(1472061, 1);
		qm.gainItem(1332063, 1);
		qm.gainItem(2070015, 500);
		qm.sendNext("�F��������w�b�ˡ� ���ѽ�����ʹ���w�b�����ˣ����_���ܴ������ɡ� �ȼ�����֮�ᣬ���܌W������ļ��ܡ�");
		}
	if (status == 2)
		qm.sendNext("���Ǽ���߀������ ����Ҳ��횷����w�b����Ҫ�������f���������w�b�� �w�b����Ҫ�������\�⣬�o�����������ݡ� ��֪��������ݵķ�����Ԓ����ʹ��#b�Ԅӷ���#k��");
	if (status == 3)
		qm.sendNextPrev("�ҁ�����һ���Y� ���ѽ������������b�䡢�����ڵĸ񔵡� �����Ŀ��g����Խ��Խ�á� �Ǻǡ�����");
	if (status == 4)
		qm.sendNextPrev("�ҁ���V��һ�c��Ҫע��ĵط��� �����mȻ�]�P�S�����ǲ������ֵ���������ˣ�֮ǰ�e�۵Ľ��ֵ�͕��ܵ��pʧ�� С��һ�c�� Ҫ������e�۵��Ľ��ֵ�ܵ��pʧ���M���Ǻ�ԩ����");
	if (status == 5)
		qm.sendPrev("���ܽ����ֻ���@Щ�����ҽo����һ���m�����õ�������ϣ������һ߅���У�һ߅�ޟ���");
	if (status == 6){
		qm.dispose();
}
}