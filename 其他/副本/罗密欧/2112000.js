/*
	����:	��̩
	�؈D:	��̩�İ칫��
	����:	926100300
*/

function start() {
	var em = cm.getEventManager("Romeo");
	if (em == null) {
		cm.sendOk("�_���e�`��Ո����Lԇ��");
		cm.dispose();
		return;
		}
	if (em.getProperty("stage").equals("1") && em.getProperty("stage5").equals("0")) {
		//advance to angry!
		cm.sendOk("ʲ�N������ ���ɵ���\�� �@�����ܡ�");
		em.setProperty("stage", "2");
	} else if (em.getProperty("stage5").equals("1") && cm.getMap().getAllMonstersThreadsafe().size() == 0) {
		cm.sendOk("Ո��ȥ����Ҫ�^�m�ڴ��ҡ�");
		em.setProperty("stage5", "2");
		cm.getMap().setReactorState();
	} else {
		cm.sendOk("Ո��ȥ����Ҫ�^�m�ڴ��ҡ�");
		}
	cm.dispose();
}