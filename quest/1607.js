/*
	����:	[ʮ������]��ֵ�Ů�˺���ֵ���
	�؈D:	�ż�������Ӫ��
	����:	102040200
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 6) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("��Ȼ���������ϣ���֪������� �mȻ��������������c��");
	if (status == 1)
		qm.sendNextPrevS("#b��������֪�������ˣ��@Ů������֡�����߀��ʲ�NԒҪ�f��������");
	if (status == 2)
		qm.sendNextPrev("����֮ǰ�J�R���z�E�l��F���Y��#b�l����Lɼ��#k�f���@�����l�F����ֵ��T�� ����·��Ҋ�^�᣿");
	if (status == 3)
		qm.sendNextPrevS("#b�]�а������·�ϛ]Ҋ�^�ǘӵĖ|����");
	if (status == 4)
		qm.sendNextPrev("����z�E�l��صĹ��ﲻ֪���N�ģ�ͻȻ׃�ú܃������_ʼ���������ľ��� ���X�ø��ǵ��T��Щ�P�S��");
	if (status == 5)
		qm.sendNextPrevS("#b�ţ��f���������ǘӡ� ��Ҳ�X�����c�ɺϡ�");
	if (status == 6)
		qm.sendAcceptDecline("��������һ��ȥ#b#m102040600##k�����᣿ �Ҍ��ǵ��T�����ஔ�����ء� ���^����·�V�������ѽ���ɼ��� �^ȥ���e��·�����҂�һ��ȥ��Ԓ���϶��ܿ�����ҵõ���");
	if (status == 7)
		qm.sendPrev("��ô���ھͳ���ȥ#b#m102040600##k��");
	if (status == 8){
		qm.forceStartQuest();
		qm.warp(102040600,0);
		qm.dispose();
}
}