/*
	����:	��ֵ�����
	�؈D:	սʿʥ��
	����:	102000003
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
		qm.sendAcceptDecline("�@���Y�����#b#p1020000##k֮ǰ�ͽo#b#p1103004##k�Ć᣿���� �Ǻǣ� ����̫����˼�ˣ����벻��֪���Y������Y�����b��ʲ�N��Ҫ��������Ҵ��_������");
	if (status == 1){
		qm.forceStartQuest();
		qm.sendNextPrev("���^#b#p1020000##k�f�^���#b#v4033053:##t4033053##k���p�p�Ĵ��_�˶Y��С�");
		}
	if (status == 2){
		qm.spawnMonster(1140130,10);//�ٻ�����
		qm.sendOk("#r�Y�����Y������Ȼ���F��10ֻ��#b#o1140130##k �@��ֱ���ǐ�������");
		}
	if (status == 3){
		qm.forceCompleteQuest();
		qm.dispose();
}
}
