/*
	����:	���޵�����
	�؈D:	ʥ��
	����:	130000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("���#b׃����ʿ#k���e���صČ�ʯ�����B���ۜI���@���������ĽY����������׎��������@һ�c�����N���҂������ˁ��f���Ƕ��\��");
	if (status == 1)
		qm.sendAcceptDecline("���˱������ڷ�ֹǱ�ڵć��؞��y������������Ŭ����#b#p1101000##k�n����һ���µ���ʿ�^㕡� �����ý��ܵĜʂ��ˆ᣿\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142068#  #t1142068#");
	if (status == 2){
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.getPlayer().changeJob(1111);
		qm.gainItem(4032179,-1);
		qm.gainItem(4032101,-1);
		qm.gainItem(1142068,1);
		qm.sendOk("�ĬF���������#b�߼���ʿ#k��������Tʿ�F�ĸ߼���ʿ��Ո�����h���l���@�ݘsҫ�� �����Ժ������������F��һ���財�");
		}
	if (status == 3){
		qm.dispose();
}
}