/*
	����:	����ʦ
	�؈D:	���Ϲ���
	����:	211000001
*/

var status = -1;

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (qm.getQuestStatus(1435) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(1435) == 1) {
		qm.sendNext("#b������Ԫ�ĝh˹#k���N�ӡ����Ǻǣ��@����#b���}��ʯ�^#k�����е������� ������������Ԫ�ن���������Y�������� ����x�x#b�h˹#k�������������@�N���@�Ĝʂ䡭..");
		}
		}
	if (status == 1)
		qm.sendAcceptDecline("ͨ�^��������ħ�����h˹�đ��Y����Ҳ�@���˳ɞ�����ħ�������Y�񡭡�ʣ�µ���������D�ˡ� ����ɞ��ǿ��ħ���������׎��᣿\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1142109:#   #t1142109#");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.changeJob(211);
		qm.gainItem(4031059,-1);
		qm.gainItem(1142109,1);
		qm.sendOk("�F������#b�׎�#k����#b��Ͷ�#k�Ĵ󎟣��������׎���ȥ�M��ʩչ��������ɡ�");
		}
	if (status == 3){
		qm.dispose();
}
}