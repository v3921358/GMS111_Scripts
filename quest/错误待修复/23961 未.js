/*
	����:	����û�и���Ļ�����
	�؈D:	��1�㳡
	����:	310050400
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
	if (status == 0) {
                                qm.sendNext("�Ҳ������࣬�ҽ�#o8105003#���Ǹ�û�и���Ļ����ˡ�����Ҹо������־壬�����ʺ��ںڰ��ĵ��¿ӵ��и�����������");	
                } else if (status == 1) {
                                qm.sendNextPrevS("��ô����������������డ������");
                } else if (status == 2) {
                                qm.sendNextPrev("���𣿵������޷�ͨ����ȡʳ���������������ȡ���˵�������ת��Ϊ��������ʹ�á��򵥵�˵������ɱ�����������ȡ����.");
                } else if (status == 3) {
                                qm.sendNextPrevS("#b(�����е���¡���)#k");
                } else if (status == 4) {	   	
                                qm.sendNextPrev("����ʣ������������ˣ���Ҫ���������洢����Ϊ����߹���Ч�ʣ�����վ�ڵ�ʱ������ȥ����Ϊ�����洢������������");
                } else if (status == 5) {
                                qm.gainItem(4220178, 1);	   	
                                qm.sendNextPrev("�Ұ������洢�������㡣���㲹������������֮���ٻ����ҡ����Թ�������ͻ��Զ������������洢�����������������");
                } else if (status == 6) {	   	
                                qm.sendNextPrev("����Ҫȷ��һ�������洢���Ƿ��Ѿ�������ȷ����ɡ�������ɡ�");
                } else if (status == 7) {	   	
                                qm.sendNextPrev("лл�㡣лл�����Ϊ���������洢���������������ǵģ����������洢����վ��ʱʹ�õĹ����������洢���Ѿ������ˡ������׻�˵���л��᲻ץס����ɵ�ϡ��������ҡ���");	   	
	} else if (status == 8) {		
		qm.forceStartQuest();
		//qm.forceStartQuest(23980,500000);
		qm.dispose();
                }
}