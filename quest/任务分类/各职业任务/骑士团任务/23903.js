/*
	����:	�ܹ��������¶�˹̹��
	�؈D:	���¶�˹̹
	����:	310000000
*/

var status = -1;

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.sendOk("#p1101000#�Tʿ�F���㣬�]���˕��o���ɵ�������ġ������M��춬F��Ǿ͛]�P�S�����^���e���κ��˶������o���΄յģ��]�P�S�᣿");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (qm.getQuestStatus(23903) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(23903) == 1) {
		qm.sendNext("�䌍���҂�Ҳ֪��#p1101000#�Tʿ�F���ǐ��h�����������@������������������#p1101000#�Tʿ�F�ġ����Ɇ᣿������ʧ���҂��ļs����");
		}
		}
	if (status == 1)
		qm.sendNextPrev("���������ʲ�NҲ��֪������Ȼ����֪����˰lƢ�⣬���ǌ����𡭾�����һ���mȻ��#p1101000#�Tʿ�F�������Ǽ��]��ֱ���P�S���ˣ����e�ˑ�ԓ���Խ��ܵġ�");
	if (status == 2)
		qm.sendAcceptDecline("���ǣ���ʹ�Ǜ]���P���ˣ�����I��#p1101000#�Tʿ�F�����e�ˌ���Ĳ����θ�߀�Ǻܴ�������Ҫ��#b�܉�ƽϢ�����Є�#k���������᣿\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 3500 exp");
	if (status == 3){
		qm.forceCompleteQuest();
		qm.gainExp(3500);
		qm.dispose();
}
}