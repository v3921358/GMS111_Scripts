/*
	����:	����ŷ
	�؈D:	����ʵ����
	����:	926100200
*/

function start() {
	var em = cm.getEventManager("Romeo");
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
	switch(cm.getPlayer().getMapId()) {
	case 926100200:
		if (cm.haveItem(4001130,1)) {
			cm.sendOk("�@����֮ǰ�����ţ����^�zʧ�ˣ����ģ���Ȼ׌���ҵ�������̫���x�ˡ�");
			cm.gainItem(4001130,-1);
			em.setProperty("stage", "1");
		} else if (cm.haveItem(4001134,1) && cm.haveItem(4001135,1)) {
			cm.gainItem(4001134,-1);
			cm.gainItem(4001135,-1);
			cm.sendOk("�����@Щ�Y�ϣ��Ҿ����ҳ��@һ�еĸ�Դ���F���҂�����ͨ�^��߅���T�M�뵽��һ�ӡ�");
			em.setProperty("stage4", "1");
			em.setProperty("stage4", "2");
			cm.getMap().getReactorByName("rnj3_out3").hitReactor(cm.getClient());
		} else {
			cm.sendOk("���@�����⌍��ҵ��Y���҂�Ҫ����ҵ�#v4001134:##b#t4001134##k��#v4001135:##b#t4001135##k���ܲt���@һ�м��������࣡");
			}
			break;
			}
		cm.dispose();
}