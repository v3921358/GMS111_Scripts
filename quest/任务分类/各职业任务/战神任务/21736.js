/*
	����:	�������֮��
	�؈D:	��³���鱨�̵�
	����:	104000004
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("�þò�Ҋ�ˣ�Ӣ�۴��ˡ����g�ȼ����˲��ٰ�������Ŭ���ޟ��˰����ڊ^������Ӣ�۵ĳ�ɫ�ı�F����#b#p1201000##k�ǲ��Ǻܸ��d��");
	if (status == 1)
		qm.sendNextPrev("�����F�ڲ����f�@���ĕr������ռ�����ֻ�ھS�������u�X�ò��㣬���˔U���_ʼ�{���˰��{˹��ꑡ������#b#m200000000##k���Ҍ��ˡ�");
	if (status == 2)
		qm.sendAcceptDecline("���{˹��ꑵ�#m200000000#�؅^�l������ֵ����顣 �mȻ����ʲ�N��ż�����飬���Źֵĸ��X�ƺ��c��ɫ֮����L�����һ�H�� Ոȥ#m200000000#������");
	if (status == 3){
		qm.forceStartQuest();
		qm.dispose();
}
}