/*
	����:	���ʲ�ʿ��ϣ����
	�؈D:	��ֹ����(���������)
	����:	261020401
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1) {
		qm.sendOk("��? ��Ҫ? ӑ���͛]���k��... �������dȤ����������֪��������, ��Ȼ�@�Ӻ�ҕ�ɜصĺ���... �޿ޡ�");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("���~ �H�е�ð�U������! ���ˆ�? �ܾ��˰�? ��ĺ������Ҋ�㡣��ʲ�N��? ��������... ֪������֮ǰԃ��������! ��, �����Ǽ����顣�ǂ��Ժڰ��ğ����g����˼�");
	if (status == 1)
		qm.sendAcceptDecline("�������@�˵�����˼����E����������dȤ, ����Ŭ��ȥ���ˡ�������... ��, ��ȥ������");
	if (status == 2){
		qm.forceStartQuest();
		qm.warp(926120200);
		qm.dispose();
}
}