/*
	����:	���Ϊ���ֵĻ�
	�؈D:	��������ѵ����
	����:	100000201
*/

var status = -1;

function start(mode, type, selection) {
	if (mode != 1 && status == 2)
	status++;
	status++;
	if (status == 0)
		qm.sendNext("��ã�#h0#�����ҽ��� ��������������֡�  �f�㌦�����ֺܸ��dȤ�� ���ǹ������D�ٺ����ȡ� Ҋ����ܸ��d����");
	if (status == 1)
		qm.sendNextPrev("�㌦�����ֵĲt���ж����أ� ��������ʹ�ù��������h���x�������˵��I�����mȻ�Ƅ��ٶ������^�������J���ļ�ʸ�ā�����ƫ��ÿһ�l���ǳ��������{��");
	if (status == 2)
		qm.sendAcceptDecline("����������ɞ鹭���֣��Ҿ����D�ٵ��ؙ࣬��Ո�㵽#b���ִ�Ĺ�������Ӗ����#k��#r��������x�������I�����Ծܽ^�� �ҕ�����������������·��#k��������ɞ鹭���ֆ᣿");
	if (status == 3){
		qm.forceStartQuest();
		qm.warp(100000201);
		qm.dispose();
		}
	if (status == 4)
		qm.sendSimple("�����x�������I�������mȻ���o�z�������@�����Լ����x�񡭡����ڹ�����֮�⣬�����x���ėl��·�أ�\r\n#b#L1#��ʿ#l \r\n#b#L2#ħ����#l \r\n#b#L4#�w�b#l \r\n#b#L5#���I#l");
	if (status == 5){
		if (selection == 1)
			qm.sendOk("�����x���ʿ�᣿ �mȻ���z�������Ǜ]�k���� #b���g�̾�#k��ϵ��ġ� ���������#b��ȵ��΄���ʾ#k��");
		if (selection == 2)
			qm.sendOk("������ħ����֮·�᣿ �mȻ���z����������������x��#b�h˹#k�R�ϕ�ϵ��ġ� ��ֻҪ��һ��#b��ȵ��΄���ʾ#k���С�");
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
		qm.sendOk("�����ڪqԥ�ˣ������@������õ��x��");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendAcceptDecline("�gӭ����������Ӗ���ġ� ��ֱ��Ҋ���㣬�Ҹе��ܸ��d�����õģ��ҁ�׌��׃�ɹ����֡�\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1142107:#   #t1142107# \r\n#i1452051:#   #t1452051# \r\n#i2060000:# 500  #t2060000#");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.forceStartQuest(2708,"1");
		qm.changeJob(300);
		qm.resetStats(4, 25, 4, 4);
		qm.gainItem(1142107, 1);
		qm.gainItem(1452051, 1);
		qm.gainItem(2060000, 500);
		qm.sendNext("�F�����ѽ��ǹ������ˡ� �������W�������ֵ��¼��ܣ�Ո���_���ܴ��� �ҽo����һЩ#bSP#k��������������������ܡ�");
		}
	if (status == 2)
		qm.sendNext("���Ǽ���߀������ ����Ҳ��횰��չ����ֵ���Ҫ�M���{���� �����ֵ��������������ݣ��o�������������� �����֪������ԓ���N�����Ԓ��Ոʹ��#b�Ԅӷ���#k��");
	if (status == 3)
		qm.sendNextPrev("���������ˡ����ҽo��ʂ���һ��С�Y� ������������b������ĵ��߱����䔵���� ���b�c�Ö|�����Ԃ䲻�r֮��ɡ� ");
	if (status == 4)
		qm.sendNextPrev("߀�У���һ�c���ע�⡣ �ɞ鹭����֮�ᣬ�ڑ��Y�оͱ�횸���ע�⡣ ���˵�Ԓ��֮ǰ�e�۵Ľ��ֵ�͕��ܵ��pʧ�� �@һ�c�����֕r�ڲ�ͬ����Ո��Ҫ��ӛ����");
	if (status == 5)
		qm.sendPrev("���ܽ���ľ�ֻ���@Щ�� ��������һ�������ֵ�������Ո��һ߅�ڸ��ش�C��һ߅呟��Լ���");
	if (status == 6){
		qm.dispose();
}
}