/*
	����:	˹���µ�����
	�؈D:	����ѩ��
	����:	211000000
*/

var status = -1;

function start(mode, type, selection) {
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
		qm.sendAcceptDecline("�x�x���ϴν����ҵ�Ո���@��Ҳϣ�������^�m���ҡ�");
	if (status == 1)
		qm.sendNextPrevS("#b������w���N���Æ᣿");
	if (status == 2)
		qm.sendNextPrev("�ðɣ��Ҿ���Ԓֱ�f�ˡ� ���ϣ����C�ˣ��@�N�f׌���X�ú��߳ܡ���");
	if (status == 3)
		qm.sendNextPrev("����ǰ�� ����ƽ��һ�ӣ��ں���ƽԭ�ϴ�CҰ�ǡ� ����ͻȻ����һ��L��#b#o6090001##k���F�����ҵ���ǰ��");
	if (status == 4)
		qm.sendNextPrevS("#bѩɽħŮ�� ����ʲ�N����");
	if (status == 5)
		qm.sendNextPrev("ѩɽħŮ�Ǳ���ѩ����f�еĹ�����f�������w���ɱ�ѩ���ɵġ� ��߀�Ԟ�ֻ�ǂ��f���ѡ����]�뵽��ĕ����@�eҊ���� ���_ʼҊ���ĕr���ґ{���C�˵�����������ˡ� ���������ȥ��C�ĕr��������ßo�p�س��F�����ҵ���ǰ�� �Ү��r�ǳ����£����Ծͽ�����w���ã�������ȥ��C�ˡ�");
	if (status == 6)
		qm.sendNextPrev("�����Ҳ���һֱ�@����ȥ�� �Ҳ���һֱ��Ӛ�e�ˎ�æ�������밢����˹��Ҳ�S��ʲ�N��Q�k���� ���܎���ȥ��#b������˹��#k�f�f�᣿ ���Լ���̫�����^ȥ�����܇����˶������ء��������@��Ҫ��ԓ���y�ɡ�");
	if (status == 7)
		qm.sendPrev("������˹�ؾ���#b����ѩ��#k�@�ط���ĳ̎�� ��Ӛ�ˣ�Ո�㲻Ҫ�����������P���¡� �C�˾�Ȼ����麦�¹�������ҳ�ȥ���C�������ǁG�����ˡ�");
	if (status == 8){
		qm.forceStartQuest();
		qm.dispose();
}
}