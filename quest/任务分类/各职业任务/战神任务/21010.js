/*
	����:	Ӣ�۵Ĺ���
	�؈D:	����ɭ��1
	����:	140090100
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.dispose();
	}
	if (status == 3) {
		qm.sendOk("��ѽ�����ÿ͚�������Ӣ��һƿˎˮҲ����ʲ�N�˲�����¡���������׃�����ڸ��V�Ұɡ�");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendSimple("�ף�#b#p1201000##k���˵��@�e��ʲ�N����...�����@λ�ǲ���#b#p1201000##k�J�R�����أ�\r\n#b#L0# ʲ�N�����f�@λ��Ӣ�ۆ�?");
	if (status == 1)
		qm.sendNextPrev("     #i4001170#");
	if (status == 2)
		qm.sendNextPrev("�@λ����#b#p1201000##k���唵����ȴ���Ӣ�ۣ��ร��y�ֿ�������ʲ�Nƽ��������...");
	if (status == 3)
		qm.sendAcceptDecline("���ǣ�����ħ�������{����ھޱ��e��˯�������ԣ�����Ӣ�۵��w�������ĵ��˵Ę��ӡ�#b�ҽo��һ��#b#v2000022:##t2000022##k���s�o�Ⱥȿ�#k��");
	if (status == 4){
		if (!qm.haveItem(2000022))
		qm.gainItem(2000022,1);
		qm.sendNext("���ȴ�ں��£������^�m�f��ȥ~");
		}
	if (status == 5)
		qm.sendOkS("#b(ˎˮԓ���N���أ�...�벻������...)#k",3);
	if (status == 6){
		qm.forceStartQuest();
		qm.summonMsg(0xE);
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
		qm.sendNext("�L���ԁ팤��Ӣ�۵ĺ��E���ڱ�ѩ���ھ򣬹�Ȼ������Ӣ�۳��F�ˣ��A�Թ�������ģ�#b#p1201000##k�����������_���x��Ӣ�ۻ؁��ˣ��F�ڛ]�б�Ҫ��η�ֺ�ħ�����ˣ�");
	if (status == 1)
		qm.sendNextPrev("�������ǵģ��ҵ��`Ӣ��̫���ˡ�����ʰ��옷������...�������Z��ԓҲ��ͬ�ӵ��뷨����֪������æ�����^��ǰ�����f��·�� #bҲՈ�����������Z��ՄһՄ#k�����Ժ�Ӣ��ՄԒ����ґ�ԓ�����d�^!\r\n\r\n #fUI/UIWindow.img/QuestIcon/4/0# \r\n#i2000022# 5 #t2000022#\r\n#i2000023# 5 #t2000023#\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 16 exp");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.gainItem(2000022,5);
		qm.gainItem(2000023,5);
		qm.gainExp(16);
		qm.sendNext("��Ҫ�����᣿���Ե����Л]�Ы@�ü����c�����ڗ�֮�ȃ�͸�^�D֮��ÿ����1���͕��@��3�c�ļ����c�������� #bK�I#k ���ܙ�λ���ܴ_�J��");
		}
	if (status == 3)
		qm.sendOkS("#b(�@�N�H�е��f����������ʲ�N���벻�����������Ӣ�ۆ᣿���N�ȴ_�J���ܿ���...������ԓ���N�_�J��?)#k",3);
	if (status == 4){
		qm.summonMsg(0xF);
		qm.dispose();
}
}