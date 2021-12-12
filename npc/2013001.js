/*
	����:	��Ӷ�׿�
	�؈D:	�ŵ��Ƚ���&amp;lt;������&gt;
	����:	920010100
*/

function start() {
	if (cm.getPlayer().getMapId() == 920011200) { //exit
		for (var i = 4001044; i < 4001064; i++) {
		cm.removeAll(i); //holy
		}
		cm.warp(200080101);
		cm.dispose();
		return;
		}
	var em = cm.getEventManager("OrbisPQ");
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
	if (em.getProperty("pre").equals("0")) {
		for (var i = 4001044; i < 4001064; i++) {
		cm.removeAll(i); //holy
		}
		cm.sendOk("�Ⱦ��ң��ұ������@�����Ո���ռ�20��#v4001063:#���ҽ��_��ӡ��");
		cm.dispose();
		return;
		}
		switch (cm.getPlayer().getMapId()) {
	case 920010000:
		cm.warpParty(920010000, 2);
		break;
	case 920010100:
		if (em.getProperty("stage").equals("4")) {
		if (em.getProperty("finished").equals("0")) {
		cm.warpParty(920010800); //GARDEN.	
	} else {
		cm.sendOk("�x�x������҂���Ո����Ů���fԒ��");
		cm.dispose();
		}
	} else {
		cm.sendOk("Ո���ռ����Ă�Ů��������Ƭ���ޏ�Ů�����ᣬ�ف��������k���ͻ�Ů��");
		cm.dispose();
		}
		break;
	case 920010200: //walkway
		if (!cm.haveItem(4001050, 30)) {
		cm.sendOk("Ո�����@�e�Ĺ���K��30��#v4001050:##b#t4001050#���؁�");
		cm.dispose();
	} else {
		cm.removeAll(4001050);
		cm.gainItem(4001048, 1); //first piece
		cm.givePartyExp(7000);
		clear();
		}
		break;
	case 920010300: //storage
		if (!cm.haveItem(4001051, 15)) {
		cm.sendOk("Ů��������һ�K��Ƭ���@�e��Ҫ�ҵ�15��#v4001051:##b#t4001051##k���������ںϡ�");
		cm.dispose();
	} else {
		cm.removeAll(4001051);
		cm.gainItem(4001045, 1); //second piece
		cm.givePartyExp(7000);
		clear();
		}
		break;
	case 920010400: //lobby
		if (em.getProperty("stage3").equals("0")) {
		cm.sendOk("��������ʹŮ������M��죬�����҂����ǰ������ځ��Ų�ͬ��������Ո���ҵ����m�ĳ�Ƭ��ʹ�������Гܷ�\r\n#v4001056:#������\r\n#v4001057:#����һ\r\n#v4001058:#���ڶ�\r\n#v4001059:#������\r\n#v4001060:#������\r\n#v4001061:#������\r\n#v4001062:#������\r\n");
	} else if (em.getProperty("stage3").equals("1")) {
		if (cm.canHold(4001046, 1)) {
		cm.gainItem(4001046, 1); //third piece
		cm.givePartyExp(7000);
		clear();
		em.setProperty("stage3", "2");
	} else {
		cm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
		}
		} else {
		cm.sendOk("�ֻ֏������յĚ�Ϣ���x�x�㣡");
		}
		break;
	case 920010700: //on the way up
		if (em.getProperty("stage6").equals("0")) {
		var react = Array();
		var total = 0;
		for (var i = 0; i < 3; i++) {
	if (cm.getMap().getReactorByName("" + (i + 1)).getState() > 0) {
		react.push("1");
		total += 1;
		} else {
		react.push("0");
		}
		}
	if (total != 2) {
		cm.sendOk("Ů�����Ŀ���ϵ�y���F���؆��}����Ҫ���_�����������Ӹ����еăɂ���Ȼ���ɽM�L�c�ҽ�Մ���Ҳ��ܲt����������");
	} else {
		var num_correct = 0;
		for (var i = 0; i < 3; i++) {
		if (em.getProperty("stage62_" + i).equals("" + react[i])) {
		num_correct++;
		}
		}
	if (num_correct == 2) {
		if (cm.canHold(4001049, 1)) {
		clear();
		cm.gainItem(4001049, 1); //sixth
		cm.givePartyExp(7000);
		em.setProperty("stage6", "1");
	} else {
		cm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
		cm.dispose();
		}
	} else {
		cm.showEffect(true, "quest/party/wrong_kor");
		cm.playSound(true, "Party1/Failed");
		if (num_correct >= 1) { //this should always be true
		cm.sendOk("Ո�Qһ���ٿv��ԇԇ��");
		cm.dispose();
	} else {
		cm.sendOk("Ո�ٴ������{ԇ�ٿv�ˡ�");
		cm.dispose();
		}
		}
		}
	} else {
		cm.sendOk("�x�x�㣬Ů���������_ʼ�֏��\���ˣ�");
		}
		break;
	case 920010800:
		cm.sendNext("Ҫ�ͻ�Ů��ֻ���Ҫ�ҵ������ݣ��������ݲ����h�ž��`�����ϣ�Ҫ���h�ž��`���T����ķ�����ֻ���ڻ����Y�N����ɫ��ʳ�˻�!");
		break;
	case 920010900:
		cm.sendNext("�@�����ıO�z������һֱ�����@�e�ᡣ");
		break;
	case 920011000:
		cm.sendNext("��Щ��ȥ���@�e�������ĵط���");
		break;
		}
	cm.dispose();
}

function clear() {
	cm.showEffect(true, "quest/party/clear");
	cm.playSound(true, "Party1/Clear");
}