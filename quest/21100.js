/*
	����:	��λӢ��
	�؈D:	���
	����:	140000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 6) {
		qm.sendOk("��ʲ�N�êqԥ���أ�����#p1201001#�]�з�����Ҳ�]ʲ�N��ʧ���ġ����cȥ��#p1201001#�����m���ĵط�#b�c�x#k�Ϳ����ˡ�");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("�ͺ�ħ�����Q�Y��Ӣ��...�׺��]���κ����P���YӍ�������A�ԕ���Ҳֻӛ�������Ӣ�ۣ��]���κκ���ò���P���Y�ϡ����y��ʲ�N���벻�����?");
	if (status == 1)
		qm.sendNextPrevS("#bʲ�N���벻����...");
	if (status == 2)
		qm.sendNextPrev("ԭ����ˡ���ħ�������{�䲻�����N���׾ͱ���������Ǿ�����ˣ�Ӣ�������^ȥ֮�g��ԓ��ʲ�N�B�Y��������ʲ�N�����أ����Q�Y���P�S���������·�����Ҋ��...�������ˣ� #b����#k��");
	if (status == 3)
		qm.sendNextPrevS("#b........����?");
	if (status == 4)
		qm.sendNextPrev("֮ǰ�ڱ�ѩ���ھ�Ӣ�ەr�����ҵ�һЩ���������������r�Ɯy��ԓ��Ӣ��ʹ���^�Ė|������˱����ڴ��f���롣�����^�r�]�����᣿ #b#p1201001##k... \r\r#i4032372#\r\r�L���@��....");
	if (status == 5)
		qm.sendNextPrevS("#b�y�����X�ú���֣��а� #p1201001# ���ڴ��f�e��...");
	if (status == 6)
		qm.sendAcceptDecline("�ǣ������ǂ��������o�Ӣ�۵��������J���ˡ���������ʹ�� #p1201001#��Ӣ�ۣ�ץס #p1201001#�r��ԓ����ʲ�N���������cȥ��#b#p1201001#��.#k");
	if (status == 7)
		qm.sendPrev("���� #p1201001#�з�����Ԓ������ʹ��#p1201001#��Ӣ�� #b������ʿ#k��");
	if (status == 8){
		qm.forceStartQuest();
		qm.dispose();
}
}