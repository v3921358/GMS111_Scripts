/*
	����:	��ǽ
	�؈D:	��������
	����:	103010100
*/

function start(){
	switch(cm.getPlayer().getMapId()) {
	case 103020000:
		if (cm.getQuestStatus(2358) == 1) { //too lazy
			cm.forceStartQuest(2358000,"1");
			cm.sendOk("���Ѿ�ճ���ú�����");
		} else {
			cm.sendOk("������Ʊ�ڵ�ǽ��");
			}
	case 103010100:
		if (cm.getQuestStatus(2358) == 1) { //too lazy
			cm.forceStartQuest(2358001,"1");
			cm.sendOk("���Ѿ�ճ���ú�����");
		} else {
			cm.sendOk("�����ϵ�ǽ��");
			}
			}
		cm.dispose();
}