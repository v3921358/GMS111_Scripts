/*
	����:	����
	�؈D:
	����:
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("��Ȼ����ش��е�û���⣬����Ҳ����˵���ǶԵġ�",1033110);
	if (status == 1)
		qm.sendNextPrev("���Ҷ��ԣ��ͺ�ħ��ʦ�ļ�ս���������������һ�������Ƕ���������˵��ֻ�����Ƿ����ڼ�����ǰ��ֻ������ʷ���в��ܿ�����������ѡ���",1033110);
	if (status == 2)
		qm.sendNextPrev("��������ð�յ����������ȫ��ʧȥ�ˡ����Ը�#o0210100#����æ���ҵ��ң�Ҳ�����ͨ��������",1033110);
	if (status == 3)
		qm.sendNextPrev("�������ǰ��ͬ�ˡ�֮ǰ�ҵ�����пɿ���ͬ�飬������ʲô�˶�û�С���û���ˡ���",1033110);
	if (status == 4)
		qm.sendNextPrev("���ǡ������ǣ���������������Ҳ����վ��������Ϊ���ǹ���������Ϊ��ħ��ʦ����������ڱ���İ����ǵĹ�������",1033110);
	if (status == 5)
		qm.sendNextPrev("#b�����Ĵʵ���û�з��������֡�#k",1033110);
	if (status == 6)
		qm.sendPrev("���롭������Ҫ��������ͷ������",1033110);
	if (status == 7){
		qm.forceStartQuest();
		qm.dispose();
}
}