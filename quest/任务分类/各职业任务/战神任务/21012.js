/*
	����:	��ʧ������
	�؈D:	����ɭ��3
	����:	140090300
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.sendOk("��...���@������Ҳ���ܻ֏�ӛ���᣿���Ǜ]ԇ�^Ҳ���Եã����ٿ��]�����ɡ�");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("��Ӣ�ۣ����ã����f���N֪������Ӣ�ۆ᣿ǰ���������˴��Ľк�����Ȼ֪�������@���u���ѽ�������Ӣ�ۻ؁����Ϣ��");
	if (status == 1)
		qm.sendNextPrev("��֮��Ӣ�۵�Ęɫ���N���@�N�y���أ�����ʲ�N���y�᣿���f�����Ե��Լ��ǲ���������Ӣ�ۆ᣿ Ӣ�ۆ�ʧӛ���ˆ᣿���N���@��...��ԓ�ǔ����걻���ڱ�ѩ֮�еĸ����á�");
	if (status == 2)
		qm.sendAcceptDecline("���� ��Ȼ����Ӣ�� ��ֻҪ�]�]����ԓ������ʲ�N�ɣ����벻��ȥ#b�C������#k��?");
	if (status == 3)
		qm.sendNext("�����@�����кܶ� #b#o9300383##k Ո��ȥ���� #r3�b#k.	�㲻�Õ�����Щʲ�N��");
	if (status == 4)
		qm.sendPrev("����ԓ�����B����ʹ�÷����������˰ɣ� #b�����ܷ����ݙھͿ����p�ʹ��#k�� ��ֻ�Ǽ��ܣ��B���ĵ���Ҳ���Է��Mȥ��Ո������á�");
	if (status == 5){
		qm.forceStartQuest();
		qm.summonMsg(17);
		qm.dispose();
}
}

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("ʲ�N���㲻ϲ�gˎˮ?");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("��...�����ı��飬�ƺ�ʲ�N���]��������...����Ո��Ҫ���ġ�����һ���������ġ���Ո�������@Щˎˮ�������!\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i2000022# 10 #t2000022# \r\n#i2000023# 10 #t2000023# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 57 exp");
	if (status == 1)
		qm.sendOkS("#b(��������������Ӣ��...����ʲ�N�������]�е�Ӣ��߀����̎��?)#k",3);
	if (status == 2){		
		qm.forceCompleteQuest();
		qm.gainItem(2000022,10);
		qm.gainItem(2000023,10);
		qm.gainExp(57);
		qm.dispose();
}
}