/*
	����:	ǰ����˹̹�ķ�Ĺ
	�؈D:	��Ժ����
	����:	105100100
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
                                qm.sendNext("���ԱߵĶ�Ѩ��ס�Ÿ�#b#p1061015##k,�����ȥ�������������");	
	} else if (status == 1) {
		qm.forceStartQuest();
		qm.dispose();
	}
}
