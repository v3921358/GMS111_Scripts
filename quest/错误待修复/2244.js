/*
	����:	��˹̹�ļ̳���
	�؈D:	��˹̹�ķ�Ĺ
	����:	105100101
*/

var status = -1;

function start(mode, type, selection) {
		qm.forceStartQuest();
		qm.dispose();
	
}

function end(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
                                qm.sendNext("����������Ļ�һ���ܹ�������");
	} else if (status == 1) {	   	
                                qm.sendNextPrev("�̳��ҵ���־���ú÷ܶ���ȥ��");		
	} else if (status == 2) {		
		qm.forceCompleteQuest();
                                qm.gainItem(1142079,1);
		qm.dispose();
	}
}
	
