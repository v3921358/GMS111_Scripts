/*
	����:	��Ӱ˫�� - ���ѵ�ʱ��
	�؈D:	ѩ���ķ���
	����:	103050101
*/

var status = -1;

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
	if (status == 0) {
	if (qm.getPlayer().getLevel() <= 20) {
		qm.sendNext("��20���Ժ��������Ұɡ�");
		cm.dispose();
	} else {
		qm.forceCompleteQuest();
		qm.changeJob(430);
		qm.gainItem(4032616, -1);
		qm.gainItem(1342000, 1);
		qm.forceCompleteQuest();
		qm.sendNext("�����ڿ�ʼ�������#b#e��ϰ����#n#k�ˡ���Ӧ��Ϊ�˸е��Ժ���");
		}
		}
	if (status == 1)
		qm.sendPrev("���õ�������Ҳ���Ÿ����ˣ���֮ǰ������Ӧ�ú��õö࣬ϣ�����ܺú�ʹ�á�");
	if (status == 2){
		qm.dispose();
}
}
