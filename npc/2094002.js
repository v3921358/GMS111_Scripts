/*
	����:	�ٲ���
	�؈D:	�ִﺣ������·
	����:	925100000
*/

function start() {
	if (cm.getPlayer().getMapId() == 925100700) {
		cm.removeAll(4001117);
		cm.removeAll(4001120);
		cm.removeAll(4001121);
		cm.removeAll(4001122);
		cm.warp(251010404,0);
		cm.dispose();
		return;
		}
	var em = cm.getEventManager("Pirate");
	if (em == null) {
		cm.sendOk("�_���e�`��Ո����Lԇ��");
		cm.dispose();
		return;
		}
	if (!cm.isLeader()) {
		cm.sendOk("�ܱ�Ǹ���Ҳ����c����Մ���@�������`��Ҏ���ģ������������@��΄գ�Ո���V���ĽM�L�c��ՄԒ��");
		cm.dispose();
		return;
		}
	switch(cm.getPlayer().getMapId()) {
	case 925100000:
		cm.sendOk("���M�뺣�I��֮ǰ����������@�e�����й��");
		cm.dispose();
		break;
	case 925100100:
		var emp = em.getProperty("stage2");
		if (emp == null) {
			em.setProperty("stage2", "0");
			emp = "0";
			}
		if (emp.equals("0")) {
			if (cm.haveItem(4001120,0)) {
				cm.sendOk("��������20�K#v4001121:##b#t4001121##k��");
				cm.gainItem(4001120,-20);
				em.setProperty("stage2", "1");
			} else {
				cm.sendOk("�mȻ�ѵ��Ϻ��I�������Ǳ��Ҫ�õ����I�đ{�C�����ܷ������£�Ո�Ƚo�Ҝʂ�20�K#v4001120:##b#t4001120##k��");
				}
		} else if (emp.equals("1")) {
			if (cm.haveItem(4001121,0)) {
				cm.sendOk("���ȱ20�K#v4001122:##b#t4001122##k��");
				cm.gainItem(4001121,-20);
				em.setProperty("stage2", "2");
			} else {
				cm.sendOk("#v4001120:##b#t4001120##kֻ�ǳ����{�C��߀���^�m��20�K#v4001121:##b#t4001121##k��");
				}
		} else if (emp.equals("2")) {
			if (cm.haveItem(4001122,0)) {
				cm.sendNext("���Зl�����ʂ���ˣ������M����һ�A�Ρ�");
				cm.gainItem(4001122,-20);
				em.setProperty("stage2", "3");
			} else {
				cm.sendOk("#v4001120:##b#t4001120##k#v4001121:##b#t4001121##k���������ˣ���ȱ��20�K#v4001122:##b#t4001122##k��");
				}
			} else {
				cm.sendOk("���Зl�����ʂ���ˣ������M����һ�A�Ρ�");
				}
				cm.dispose();
				break;
	case 925100200:
		cm.sendNext("Ҫ�������I�����҂�����ȴݚ����l���Ѹ����ĺ��Iȫ����������҂������M����һ���A�Ρ�");
		cm.dispose();
		break;
	case 925100201:
		if (cm.getMap().getAllMonstersThreadsafe().size() == 0) {
			cm.sendNext("Excellent.");
			if (em.getProperty("stage2a").equals("0")) {
				cm.getMap().setReactorState();
				em.setProperty("stage2a", "1");
				}
		} else {
			cm.sendNext("These bellflowers are in hiding. We must liberate them.");
			}
			cm.dispose();
			break;
	case 925100300:
		if (cm.getMap().getAllMonstersThreadsafe().size() == 0) {
			cm.sendNext("Excellent.");
			if (em.getProperty("stage3a").equals("0")) {
				cm.getMap().setReactorState();
				em.setProperty("stage3a", "1");
				}
	   } else {
	   	cm.sendOk("These bellflowers are in hiding. We must liberate them��");
		}
		cm.dispose();
		break;
	case 925100202:
		cm.sendOk("������");
		cm.dispose();
	case 925100302:
		cm.sendOk("����һ��������춺��I�I�������J����m������������");
		cm.dispose();
		break;
	case 925100400:
		cm.sendOk("������ĺ������ϻ�ȡ��Կ�ף�Ȼ��رո�����4�����գ���������ĺ�������֧Ԯ�������@헹������ᣬ�҂�����ǰ��������P����");
		cm.dispose();
		break;
	case 925100500:
		if (cm.getMap().getAllMonstersThreadsafe().size() == 0) {
			cm.warpParty(925100600);
		} else {
			cm.sendOk("�����еĹ���������I�I����צ��!");
			}
			cm.dispose();
			break;
}
}