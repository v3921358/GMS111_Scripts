/*
	����:	������Σ�յ��ҳ��� 1
	�؈D:	ŵ����˹��ͷ
	����:	120000000
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
		qm.sendAcceptDecline("#t04000670#��Ȼ�oЧ�� �У�\r\n���^�Ҳ����ʹ˸��ݵģ�߀�����m����ء� �@�ξ�Ո��ѿ��µ�#r#t4033014##k�ýo�������� \r\n");
	if (status == 1){
		qm.forceStartQuest();
		qm.warp(912040400);
		qm.dispose();
}
}