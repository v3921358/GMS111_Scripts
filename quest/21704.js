/*
	����:	��С��һ��
	�؈D:	���
	����:	140000000
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
		qm.sendNext("�ޟ��M�еĲ��e�ɣ����Z�ώ�#p1202006#���Ժ܏�����߀������Ҫ�ǰV���˾Ͳ����k�ˡ�������Ӣ�۵ļ��ܴ_�������о������㑪ԓ�܎��ϲ���æ��");
	if (status == 1)
		qm.sendNextPrevS("#b(���V���Լ����������B�������@�����ܡ�)#k");
	if (status == 2)
		qm.sendPrev("�ǆᣡ�������#p1202006#��Ӗ����ʽ֮�⣬���Լ���Ȼӛ�ď�ǰ����Щ����Ҳ���P�I����������ֻ���ڱ����e�����̫�ã���Ҫ�r�g�֏Ͷ��ѡ�#b�^�m�����ޟ��ɣ���ȡ���ջ֏����еļ��ܣ�");
	if (status == 3){
		qm.forceStartQuest();
		qm.dispose();
}
}