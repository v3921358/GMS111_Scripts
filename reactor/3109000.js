/*
	����:	���¶�˹̹
	�؈D:	�հ�����ˮ�ֿ�
	����:	931000410
*/

function act() {
	if(rm.getReactor().getState() == 10) {
		rm.forceStartQuest(23130, "1");//������������������
		rm.playerMessage(-1, "ˮ���ˣ���ȥ����һ�¡�������");
}
}
