/*
	����:	Amos the Strong
	�؈D:	670010500
	����:	670010500
*/

function start() {
	var em = cm.getEventManager("Amoria");
	if (em == null) {
		cm.sendOk("�_���e�`��Ո����Lԇ��");
		cm.dispose();
		return;
		}
	switch(cm.getMapId()) {
	case 670010500:
		if (!cm.isLeader()) {
			cm.sendOk("�ܱ�Ǹ���Ҳ����c����Մ��Ո���V���ĽM�L�c��ՄԒ��");
			cm.dispose();
			return;
			}
		if (cm.haveItem(4031597,30)) {
			cm.mapMessage(6, "�����ߣ�ͨ�^���T�����Ե��_��һ���A��!");
			cm.warpParty(670010600);
			cm.gainItem(4031597,-30);

		} else {
			cm.sendOk("����Ҫ�M�Lһ��o��30��#v4031597:##b#t4031597##k");
			}
			cm.dispose();
			break;
	case 670010600:
		if (!cm.isLeader()) {
			cm.sendOk("�ܱ�Ǹ���Ҳ����c����Մ��Ո���V���ĽM�L�c��ՄԒ��");
			cm.dispose();
			return;
			}
			cm.warpParty(670010700);
			cm.dispose();
			break;
	case 670010700:
		if (!cm.isLeader()) {
			cm.sendOk("�ܱ�Ǹ���Ҳ����c����Մ��Ո���V���ĽM�L�c��ՄԒ��");
			cm.dispose();
			return;
			}
		if (em.getProperty("apq4").equals("0") || em.getProperty("apq4").equals("1")) {
			cm.warpParty(670010700,18);
			cm.spawnMob(9400536,1,674,511);
			em.setProperty("apq4", "2");
		} else {
			if (cm.haveItem(4031594,1)) {
			cm.gainItem(4031594,-1);
			cm.warpParty(670010800, -1);
		} else {
			cm.sendOk("Ո�������K��#v4031594:##b#t4031594##k���؁������C�");
			}
			}
			cm.dispose();
			break;
}
}