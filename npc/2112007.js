/*
	����:	������
	�؈D:	���ɵ��о���
	����:	926100000
*/

function start() {
	var em = cm.getEventManager("Romeo");
	if (em == null) {
		cm.sendOk("�_���e�`��Ո����Lԇ��");
		cm.dispose();
	return;
	}
	if (!cm.canHold(4001130,1)) {
		cm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
		cm.dispose();
		return;
		}
	if (cm.getPlayer().getMapId() == 926100000) { //just first stage
		if (java.lang.Math.random() < 0.1) {
		if (em.getProperty("stage1").equals("0")) {
		em.setProperty("stage1", "1");
		cm.getMap().setReactorState();
		cm.playerMessage(-1, "����_���M�댍��ҵ�ͨ����");
		}
	} else if (java.lang.Math.random() < 0.05) {
		if (em.getProperty("stage").equals("0")) {
		cm.gainItem(4001130,1);
		cm.playerMessage(-1, "�ҵ�һ���ţ�");	
		}
		}
		}
	cm.dispose();
}
