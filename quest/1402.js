/*
	����:	���Ϊ��ʦ�Ļ�
	�؈D:	ħ������ͼ���
	����:	101000003
*/

var status = -1;

function start(mode, type, selection) {
	if (mode != 1 && status == 2)
	status++;
	status++;
	if (status == 0)
		qm.sendNext("��ã�#h0#Ŷ������������f���ǂ��˰��� ��ã�  �f�㌦ħ����֮·���dȤ�� ���N����ħ�����D�ٝh˹���Ԏ����㡣");
	if (status == 1)
		qm.sendNextPrev("�����㑪ԓ�ѽ���ħ���������t���ˡ� �������^�ߵ���������A��ʹ��ħ�����I�� �mȻ�h���x�ͽ����x���Y���ܳ�ɫ�����w����΢���c����������ħ����������˺ܶ�ħ����˷��@һȱ�c����Ҫ̫���ġ�");
	if (status == 2)
		qm.sendAcceptDecline("�㿴��ȥ�����־߂�ɞ�ħ������ؠ�ء�������ɞ�ħ�����᣿ ���ܵ�Ԓ���Ҿ�ʹ���D�ٵ��ؙ࣬��Ո�㵽#bħ�����ֵ�ħ���D���^#kȥ�� ����Ҋ���棬Ȼ������D��#r���Ǿ���ܽ^��Ҳ���Ǜ]�Єe��·���ߡ� �ܽ^��Ԓ���ҿ��Ԟ����Bħ����������I��#k��");
	if (status == 3){
		qm.forceStartQuest();
		qm.warp(101000003);
		qm.dispose();
		}
	if (status == 4)
		qm.sendSimple("�㲻ϲ�għ����֮·�᣿ ���z���� ��������������x�� ���������ėl��·�أ�\r\n#b#L1#��ʿ#l \r\n#b#L3#������#l \r\n#b#L4#�w�b#l \r\n#b#L5#���I#l");
	if (status == 5){
		if (selection == 1)
			qm.sendOk("�����x���ʿ�᣿ �mȻ���z����������������x�� #b���g�̾�#k��ϵ��ġ� ���������#b��ȵ��΄���ʾ#k��");
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
		qm.sendOk("�ţ� ߀���ٿ��]һ�᣿");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendAcceptDecline("������� �ܸ��d�����@�eҊ���㡭����һ�����Գɞ�һ����ħ������ ���R�Ͼ�׌��ɞ�ħ������\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1142107:#   #t1142107# \r\n#i1372043:#   #t1372043#");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.forceStartQuest(2790,"1");
		qm.changeJob(200);
		qm.resetStats(4, 4, 25, 4);
		qm.gainItem(1142107, 1);
		qm.gainItem(1372043, 1);
		qm.sendNext("���ˣ����ѽ��ܹ�ʹ�ø��Nħ�������ˡ� �ҽo����һЩ#bSP#k���ǾͲ������_#bSkill#k��W���Լ�����еļ��ܰɡ� ��ÌWһЩ#b����ħ��#kŶ��");
		}
	if (status == 2)
		qm.sendNext("�H������߀������ �y���㲻����Լ�������Ҳ����ɷ���ħ���������Ԇ᣿ ħ������҇�����ݞ�INT���a�����ݞ�LUK�� �����X�ø������ݺ��韩������ʹ��#b�Ԅӷ���#k��");
	if (status == 3)
		qm.sendNextPrev("���ˣ���߀Ҫ�o���@��׃��ħ��������Щ�������Եı������C������һ���Ҹ档 ׃��ħ����֮��һ�������r�����п�����ȫ��ʧ���@���g���۷e�Ľ��ֵŶ�� �l׌ħ�������w�������^���أ�����ǧ�fҪС�İ���");
	if (status == 4)
		qm.sendPrev("���ѽ����ܽ����ȫ�����̽o���ˡ� ��������ޟ�����߀���ͽo��һ�����ȣ����Ҫ�ú�ʹ��Ŷ�� �Ǿ�ף����\�ɡ�");
	if (status == 5){
		qm.dispose();
}
}