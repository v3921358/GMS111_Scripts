/*
	����:	The Glimmer Man
	�؈D:	670010200
	����:	670010200
*/

function start() {
	if (cm.getPlayer().getMapId() == 670011000) {
		cm.gainNX(2000);
		cm.warp(670010000,0);
		cm.dispose();
		return;
		}
		var em = cm.getEventManager("Amoria");
	if (em == null) {
		cm.sendOk("�_���e�`��Ո����Lԇ��");
		cm.dispose();
		return;
		}
	if (!cm.isLeader()) {
		cm.sendOk("�ܱ�Ǹ���Ҳ����c����Մ��Ո���V���ĽM�L�c��ՄԒ��");
		cm.dispose();
		return;
		}
	if (em.getProperty("apq1").equals("0")) {
	//if (cm.getMap().getAllMonstersThreadsafe().size() == 0) {
		if (cm.haveItem(4031597,20)) {
		em.setProperty("apq1", "1");
		cm.mapMessage(5, "Magik Fiarry�ѽ��ڵ؈D��ĳ���ط��Q���ˡ�");
		cm.sendOk("�ܲ��e���F����������ֻ���Ȼ��ѹ������ϵ�������#v4031596:##b#t4031596##k���؁�");
		cm.spawnMonster(9400518,1);
		cm.removeAll(4031597);
	} else {
		//  cm.sendOk("���҂�æ���������еĹ���Æ�?");
		cm.sendOk("�����ҵ��I�أ��ͱ��Ҫ�_���ҵ�Ҫ�󣬲�Ȼ�㌢���h�������@�e����Ҫ��20��#v4031597:##b#t4031597##k�o�ң�Ȼ�����ڸ��V����һ����");
		}
	} else if (em.getProperty("apq1").equals("1")) {
		if (cm.haveItem(4031595)) {
			cm.gainItem(4031595, -1);
			cm.showEffect(true, "quest/party/clear");
			cm.playSound(true, "Party1/Clear");
			cm.sendOk("������������R���Y�߳�ȥ��");
			em.setProperty("apq1", "2");
		} else {
			cm.sendOk("#v4031596:##b#t4031596##k���ھ��Ӹ�ǰ���Ⱦ�������֮�󣬰�#v4031595:##b#t4031595##k���������ҡ�");
			}
			}
		cm.dispose();
}