/*
	����:	��������ѵ��2
	�؈D:	���
	����:	140000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("��߀�]�ʂ�ëC��#o0100132#�᣿��ð�ԓ�ʂ�Ķ��ʂ����ȥ���C���^�á�������úÜʂ䣬��;��һ������ˣ���ֻ��׌���z���T�ˣ�");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendAcceptDecline("���NҪ�^�m���A�w��呟��᣿�ʂ���ˆ᣿Ո���ٴ_�J���Ƿ��b����ˣ����ܺ�ˎ�Ƿ��ѽ������ݙڃȣ�Ȼ����_ʼ�ɣ�");
	if (status == 1){
		qm.forceStartQuest();
		qm.dispose();
}
}