/*
	����:	The Mayor of Disaster
	�؈D:	���ƻ�����Ҷ��
	����:	600000000
*/

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	qm.dispose();
	return;
    }
    if (status == 0) {
	qm.sendNext("�������ˣ�#b#m600000000##k�շ�����һ��ǿ�𣡽�����ɷ��棬ƽ�ر�ɹ��֡��Ҷ����ϲ���������һ�ִ���ĳ����ˣ��ҵ�����͸�����ѧ���о�����ʲô�������Ԥ��ʵ���ǲ������������ⷽ�������о����ܰ������æ��");
    } else if (status == 1) {
	qm.sendNext("�Ҿ�֪������Ӧ�ң���#b#m600000000##k������ͷ�ɡ�");
    } else if (status == 2) {
	qm.forceStartQuest();
	qm.dispose();
    }
}
