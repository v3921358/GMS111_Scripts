/*
	����:	[ʮ������]��һ���ռ�
	�؈D:	��ֵ�ͨ��
	����:	931050410
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
		qm.sendAcceptDecline("ס��#e#r���֮��#m200050000##k#n��#b#p2032001##k��Ո�����ߵ��Լ��ҡ��ƺ���ʲ�NԎӋ��ȥ��#p2032001#��������ɣ�");
	if (status == 1){
		qm.forceStartQuest();
		qm.dispose();
}
}