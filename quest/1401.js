/*
	����:	���Ϊսʿ�Ļ�
	�؈D:	սʿʥ��
	����:	102000003
*/

var status = -1;

function start(mode, type, selection) {
	if (mode != 1 && status == 2)
	status++;
	status++;
	if (status == 0)
		qm.sendNext("������������]���ǂ��˰���  �f�����D�ɑ�ʿ�������᣿ �Ҿ��Ǒ�ʿ�D�����g�̾��� �ҿ��Ԟ���Ҫ�ԑ�ʿ���ð�U�����ṩ������");
	if (status == 1)
		qm.sendNextPrev("�㌦��ʿ�t������أ� ��ʿ����ǿ����������w������A���]����������򵹔��˵��I�� ����ӽ����˵ĵط����Y�ğoη���ˡ� �ǲ��Ǻ���������");
	if (status == 2)
		qm.sendAcceptDecline("������֓������Y�� �����@�ӵ�����ɞ��ʿ�����S�r��ʾ�gӭ�� ����ɞ��ʿ�᣿ ���ܵ�Ԓ���Ҿ�ʹ���D�ٵ��ؙ࣬��Ո�㵽#b��ʿ����đ�ʿ�}��#kȥ��#r���Ǿ���ܽ^��Ҳ���Ǜ]�Єe��·���ߡ� �ܽ^��Ԓ���ҿ����������������I�ĵ�·#k��");
	if (status == 3){
		qm.forceStartQuest();
		qm.warp(102000003);
		qm.dispose();
		}
	if (status == 4)
		qm.sendSimple("�㲻���ߑ�ʿ֮·�᣿ ������Ԓ���ҾͲ�����ǿ�� �����ȥ�x��������·�ɡ� ���ˑ�ʿ֮�⣬߀���ėl��·�ɹ��x��\r\n#b#L2#ħ����#l \r\n#b#L3#������#l \r\n#b#L4#�w�b#l \r\n#b#L5#���I#l");
	if (status == 5){
		if (selection == 2)
			qm.sendOk("������ħ����֮·�᣿ �mȻ���z����������������x��#b�h˹#k��ϵ��ġ� �����ͨ�^#b��ȵ��΄���ʾ#k�鿴��");
		if (selection == 3)
			qm.sendOk("�����߹�����֮·�᣿ �mȻ���z����������������x��#b������#k��ϵ��ġ� �����ͨ�^#b��ȵ��΄���ʾ#k�鿴��");
		if (selection == 4)
			qm.sendOk("�������w�b֮·�᣿ �mȻ���z����������������x��#b�_����#k��ϵ��ġ� �����ͨ�^#b��ȵ��΄���ʾ#k�鿴��");
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
		qm.sendOk("��ѽ�����]�뵽���@�NđС�� �y����ʧȥ�ɞ��ʿ�������ˆ᣿");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendAcceptDecline("�ܸ��d�����@�eҊ���㡭���ҁ����׃�ɑ�ʿ�ɡ� ��������׼���ˆ᣿ �R��˿s���ˣ�����ɞ��ʿ��\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1142107:#   #t1142107# \r\n#i1302077:#   #t1302077#");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.forceStartQuest(2849,"1");
		qm.changeJob(100);
		qm.resetStats(25, 4, 4, 4);
		qm.gainItem(1142107, 1);
		qm.gainItem(1302077, 1);
		qm.sendNext("�ɞ��ʿ������Ȼ׃�ø����� �K����Ҳ���������ʿ��ʹ�õļ��ܣ��Ǿ��s�o�ó���ԇһԇ�ɡ�");
		}
	if (status == 2)
		qm.sendNext("���⣬�������ֵҲ���M���m���޸ģ��Ա�����m�ϑ�ʿ�����c�� �@Ȼ��춑�ʿ���ԣ�STR����҇�����ݣ���DEX���a�����ݡ� ���������Ԓ������ʹ��#b�Ԅӷ���#kҲ�á�");
	if (status == 3)
		qm.sendNextPrev("���˼o�����ѳɞ��ʿ����߀���m���o�������������g�� ������ռ�����������ͷ��ߣ�׌�Լ�׃�ø���ǿ��");
	if (status == 4)
		qm.sendNextPrev("���ˣ���һ�c��Ҫע�⡣ �mȻ���ֵĕr��]�P�S�����ǳɞ��ʿ��˲�g�_ʼ�����С�Ĳ�Ҫ���������fһ���˵�Ԓ��֮ǰ�e�۵Ľ��ֵ���ܕ��ܵ��pʧ����");
	if (status == 5)
		qm.sendPrev("���ܽ����ֻ���@Щ������������һ��#b��#k���F����ȥ呟��Լ���׌�Լ�׃�ø����ɡ�");
	if (status == 6){
		qm.dispose();
}
}

