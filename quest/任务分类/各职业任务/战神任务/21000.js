/*
	����:	�ȾȺ�����
	�؈D:	����׼����
	����:	914000100
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("���а��� #b#h0##k... ������Щ���ӣ� ֻʣ���҂�����͵��... ������߀��ʲ�N���x����֪���������fֻ�Ǻܴ��ؓ��...����Ո���ٿ��]�����ɣ�");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendAcceptDecline("���ǵģ� ����߀�Ўׂ���������ɭ�փȣ� �҂������܁G�º��ӂ����ߡ� #b#h0##k... Ո��ȥ�Ⱦ���Щ���Ӱɣ� ��֪�����ܵ����f�@ЩԒ��ĺܺ�o�u�� ����... ֻ�ܰ�Ӛ���ˣ�");
	if (status == 1)
		qm.sendNext("#b���ӂ���ԓ��ɭ����̎#k�� �ں�ħ����׷���@�e֮ǰ������Ҫ�s�o���l��Ո�M��Ȼ���Щ���Ӱɣ�");
	if (status == 2)
		qm.sendNextPrev("����Ҫ���ǲ�Ҫ�@�š� ������ʿ���Z����Ҫ�_�J�΄��M����r��Ո���� #bQ���I#k �_�J�΄ՙ�λ.");
	if (status == 3)
		qm.sendPrev("��Ӛ���ˣ�#b#h0##k��Ո�Ⱦ���Щ���ӣ��Ҳ�ϣ�������٠���춺�ħ������ħ��֮�£�");
	if (status == 4){
		qm.forceStartQuest();
		qm.dispose();
}
}