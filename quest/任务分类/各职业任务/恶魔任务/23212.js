/*
	����:	����˹�������Լ
	�؈D:	���ܹ㳡
	����:	310010000
*/

var status = -1;

function end(mode, type, selection) {
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
		qm.sendNext("�ã����F���_ʼ�M�к��s�xʽ�� Ո������M�������@߅���С�");
	if (status == 1)
		qm.sendNextPrevS("#b(�������殐�Ě�Ϣ�����w�ȡ�)#k");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.changeJob(3110);
		qm.teachSkill(31100007, 1, 1);
		qm.changeJob(3110);
		qm.forceStartQuest(23206, "1");  //����3ת��������
		qm.sendOk("���s����ˣ���������Բ��ó��������e�����fԒ��");
		}
	if (status == 3){
		qm.dispose();
}
}
