/*
	����:	���ͼ��
	�؈D:	ѩ����
	����:	211000100
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("ֻҪ��һ�¾Ϳ��ԣ���̫�]�����˰� ��");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendYesNo("�����ѽ�ȫ���ռ��ˡ�Ո���Ե� ��");
	if (status == 1)
		qm.sendPrev("��, �@�� #v2430180:##b�Y��ĈD�v#k. �ڶ��\������F��#b��ήľ�^��ɭ��4#k���D�v��������\����Ľ�ֹħ��.");
	if (status == 2){
		if(!qm.canHold(2430180, 1)) {
		qm.sendNext("���յ���Ʒ֮ǰ��Ո������ETC������v��һ����ۡ� ");
		qm.dispose();
		return;
		}
		if(!qm.haveItem(2430180, 1)) qm.gainItem(2430180, 1);
		qm.forceStartQuest();
		qm.dispose();
}
}