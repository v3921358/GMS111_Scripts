/*
	����:	����ϣ����
	�؈D:	��������¥
	����:	211061001
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 7) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("���ҵ��˽��ȥ����������������¼����������ţ�#p2161002#����ԭ���ǹ����Ľ�����ʿ�ų����������������𡭡�����#p2161002#����ô˵���أ���֪���װ�Ϊʲô�������������");
	if (status == 1)
		qm.sendNextPrevS("#b(ת����#p2161002#���������Ļ���)#k");
	if (status == 2)
		qm.sendNextPrev("û�����ǵģ��ǵġ��ں�ɫ��������ס��յ���һ�죬ԭ������ȥ����ͨ��ʿ����ͻȻ���ˣ���ʼ�������ǡ���ǽ����������ȫ�����˻𡭡��ң��ұ������������ԭ������������");
	if (status == 3)
		qm.sendNextPrevS("#b(��#p2161001#�ķ�Ӧ������#p2161002#�Ļ���������ʵ��)#k");
	if (status == 4)
		qm.sendNextPrev("�װ�����Ϊ����Ż��������İ����ҹ������ﱧԹ�װ���û�뵽���ʱ����һֱ�����ڱ��˺ͷ�ŭ֮�С����Ҳ���������������ȥ�ˡ�");
	if (status == 5)
		qm.sendNextPrevS("#b����ʲô�취��");
	if (status == 6)
		qm.sendNextPrev("������³������֪ͨ�Ĺ���������ר�õ�ͨ���������ǲ�Ӧ�ø��߱��˵ġ���������ξ�����һ�Ρ��������һ�𵽽Ӽ���ȥ��������");
	if (status == 7)
		qm.sendAcceptDecline("��Ҫ����ȥ����������Ϊ��Щӵ�кڰ���Ϣ�Ĺ����һֱ���ܵ��Ӽ���ȥ��������������ܰ��ң��Ҿ�Ӧ�ÿ��Թ�ȥ����һ��Ҫ���ҵ��Ӽ���ȥ���������ˣ�");
	if (status == 8){
		qm.forceStartQuest();
		qm.resetMap(921140000);   //��ͼˢ��
		qm.warp(921140000,1);
		qm.dispose();
}
}

function end(mode, type, selection) {
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
		qm.sendNext("�⡭�������͸��װ��ĵ�׹����������������ϣ�����ܳ�Ϊһ���õĹ�����û�뵽�����������ϡ�������Ȼ�Ǹ�������ˡ�");
	if (status == 1)
		qm.sendPrev("��Ȼ���Ѿ���ȫ���ˣ���Ȼ����������Ϊ�����Ѿ�����ԭ�¡��������Ҳ���Ϊ�Ѿ�û��ϣ���ˡ�����������һ�죬�װ���ָ���ԭ�������ӡ�\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 300000 exp");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.gainExp(300000);
		qm.dispose();
}
}