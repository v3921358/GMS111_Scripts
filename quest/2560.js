/*
	����:	�������˾�Ȼ�Ǻ��ӣ�
	�؈D:	ǳ��̲
	����:	3000100
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
	if (status == 0)
		qm.sendNext("֨֨֨֨֨��֨��֨��");
	if (status == 1)
		qm.sendNextPrevS("���ӳԱ��ˣ��������ǲ����ѡ�����������ô���£�һ�����۾��������Ǻ��ӣ���֪������ʲô�ط���������ô�����أ���֪����ô������");
	if (status == 2)
		qm.sendAcceptDecline("֨֨��֨֨��(���ӵ���ͷ�������֪���������ϸ���ʺ��Ӱɣ�)");
	if (status == 3){
		qm.forceStartQuest();
		qm.dispose();
}
}