/*
	����:	ץסӰ����ʿ
	�؈D:	�����������
	����:	925040000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 3) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("�]�뵽�ڔ�����Ěq��֮�ᣬӢ�۵����������³��F�ˡ���Ҳ��֪����ð�U�u�����Ǹ�߀�ǵ��������Ӷ��o���^�ˡ� �ðɡ����Ҹ��V�����P�����ӡʯ�����顣");
	if (status == 1)
		qm.sendNextPrev("����ķ�ӡʯ���ڵĵط�������ӡ����Ժ�� ���e����ڱ��[����������Ժ�ȡ� ��ȥ�м��^��������Ժ���̎è�������ğ��K�� ����܏����ҳ�#b��������֘ӵğ��K#k���Ϳ����M���ӡ����Ժ�ˡ� ��̖��#b���ɵ��ǳ���#k");
	if (status == 2)
		qm.sendNextPrev("�f�����ǂ���Ӱ����ʿ�����ѽ����˷�ӡ����Ժ�� ���^������ԓ߀�]�аі|��͵�ߡ� ��֪���ǲ����ڵ��ҡ������^������Ҷ��ԣ�Ӣ�۵�����ȥ����Ӱ����ʿ���ܸ����m�ء�");
	if (status == 3)
		qm.sendAcceptDecline("ϣ�����ܽ߱Mȫ������Ӱ����ʿ�� Ӣ�۵����ᰡ�����^��Ӣ���^ȥ�Ĺ��x�I�ɡ�");
	if (status == 4)
		qm.sendPrevS("#b�����ƺ��`�Ԟ�����Ӣ�۵������ˡ����f׌���^��Ӣ���^ȥ�Ĺ��x�I������ʲ�N��˼�أ��ȷ���Ӱ����ʿ��Ȼ���ن������ˡ���#k",3);
	if (status == 5){
		qm.forceStartQuest();
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
		qm.sendNext("�ɹ�����#o9300351#�᣿ �������N�@�N���ء����y���f��ʧ���ˡ���");
	if (status == 1)
		qm.sendNextPrevS("#b���������c#o9300351#���Y�Ľ��^��#k");
	if (status == 2)
		qm.sendNextPrev("ԭ�����@�ӣ�#m250000000#�ķ�ӡʯ��K߀�Ǳ������ˡ������z�������^Ҳ�]�k���� �ҬF��Ҳ������Ӣ�ۂ���ʲ�NҪ�ѷ�ӡʯ���o#m250000000#��");
	if (status == 3)
		qm.sendNextPrevS("#b���fӢ�۰ѷ�ӡʯ���o��#m250000000#��");
	if (status == 4)
		qm.sendNextPrev("�ǵġ�����߀��֪���᣿#b�ܾúܾ���ǰ��Ӣ�ۂ��ѷ�ӡʯ���o��#m250000000#�� �L���u����#m925040100#�K���ؿ�������#k��");
	if (status == 5)
		qm.sendNextPrevS("#b����Ӣ�ۡ���");
	if (status == 6)
		qm.sendNextPrev("�@Щ���飬�F�ں�������֪���ˡ� ���ϣ�#b��ӡʯ�]���ˣ���#m250000000#���Ե����Л]��Ӱ푣��lҲ��֪��#k�� ֻ���^�����Ӣ�۽��o�҂����ܵĖ|���������҂��ſ��ú��ء�");
	if (status == 7)
		qm.sendNextPrevS("#b��Ӣ�۰ѷ�ӡʯ���o��#m250000000#������#k");
	if (status == 8)
		qm.sendNextPrev("��Ӣ�۽��o�҂��Ė|���oŪ�G�ˣ��m�f�ܿ�ϧ������Ӣ�۵������ڣ��҂�Ҳ�X�����e̤��һЩ�� Ո�^�m���Ӣ��δ�M���I��");
	if (status == 9)
		qm.sendPrevS("#b��#m250000000#��ӡʯҲ�������ˡ�������#p1002104#��������#k\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 16000 exp",3);
	if (status == 10){
		qm.forceCompleteQuest();
		qm.gainExp(16000);
		qm.dispose();
}
}