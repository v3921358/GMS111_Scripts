/*
	����:	���ű�˹
	�؈D:	�������
	����:	211042300
*/

var status= -1;

var mapId = 211042300;
var stage;
var teethmode;

function action(mode, type, selection) {
	if (mode == 0 && status == 0) {
	cm.dispose();
	return;
	}
	if (mode == 1) {
	status++;
	} else {
	if (status == 3) {
	cm.sendOk("��������������������������˿��������ң�");
	cm.dispose();
	}
	status--;
		cm.removeAll(4001015);
		cm.removeAll(4001016);
		cm.removeAll(4001018);
		}
	if (status == 0) {
		if (cm.getPlayerStat("LVL") >= 50) {
		if (cm.getQuestStatus(100200) != 2 && cm.getQuestStatus(100200) != 1) {
			cm.startQuest(100200);
			cm.sendOk("���뱻������ս����������������  �š�������#b���ű�˹#k�������������е��������񡣵�������֮ǰ�����������ҽ����������  ������ҪС�ĵ㡣");
			cm.dispose();
			return;
		} else if (cm.getQuestStatus(100201) == 1) {
			teethmode = 1;
			cm.sendNext("����û������Ҫ����Ʒ����ɲ��Ǵ�����ҵ��");
		} else {
			if (cm.haveItem(4001109)) {
			cm.sendSimple("�á������ҿ������г�ֵ��ʸ�������ս��һ�׶Σ� #b\r\n#L0#�Ͽ���� (��һ�׶�)#l\r\n#L1#�����Թ����� (�ڶ��׶�)#l\r\n#L2#�������� (�����׶�)#l\r\n#L3#��ȥ������#l\r\n#L4#��Ǯ��������#l");
		} else {
			cm.sendSimple("�á������ҿ������г�ֵ��ʸ�������ս��һ�׶Σ� #b\r\n#L0#�Ͽ���� (��һ�׶�)#l\r\n#L1#�����Թ����� (�ڶ��׶�)#l\r\n#L2#�������� (�����׶�)#l\r\n#L4#��Ǯ��������#l");
			}
			}
		if (cm.getQuestStatus(100201) == 2) { // They're done the quests
			teethmode = 2;
			}
		} else {
			cm.sendOk("������Ŀǰ��������㻹��������������������������������ǿ���ʱ���������Ұɣ�");
			cm.dispose();
			}
	} else if (status == 1) {
		if (teethmode == 1) {
			if (cm.haveItem(4000082, 30)) { // take away items, give eyes of fire, complete quest
			if (!cm.canHoldByTypea(1, 2)) {
			cm.sendOk("��ȷ�ϱ����Ƿ��Ѿ����ˡ�");
			cm.dispose();
			return;
			}
			if (!cm.canHoldByTypea(2, 2)) {
			cm.sendOk("��ȷ�ϱ����Ƿ��Ѿ����ˡ�");
			cm.dispose();
			return;
			}
			if (!cm.canHoldByTypea(3, 2)) {
			cm.sendOk("��ȷ�ϱ����Ƿ��Ѿ����ˡ�");
			cm.dispose();
			return;
			}
			if (!cm.canHoldByTypea(4, 2)) {
			cm.sendOk("��ȷ�ϱ����Ƿ��Ѿ����ˡ�");
			cm.dispose();
			return;
			}
			if (!cm.canHoldByTypea(5, 2)) {
			cm.sendOk("��ȷ�ϱ����Ƿ��Ѿ����ˡ�");
			cm.dispose();
			return;
			}
			if (cm.canHold(4001017)) {
			cm.removeAll(4031061);
			cm.removeAll(4031062);
			cm.gainItem(4000082, -30);
			cm.gainItem(4001017, 5);
			cm.sendNext("ұ�����ˡ� ������ߵ�������������ͨ��������̨���š� ��������Ҫ #b#t4001017##k ���ܽ����e�档���ҿ����ж������ܽ��뵽�Ǹ��ֲ��ĵط���");
			cm.completeQuest(100201);
			cm.completeQuest(100200);
		} else {
			cm.sendNext("�ţ���ȷ�������㹻�ı����ռ������ټ��һ�¡�");
			}
			cm.dispose();
		} else { // go get more
			cm.sendNext("�㻹û�д�������Ҫ�Ķ�����");
			cm.dispose();
			}
			return;
			}
		if (selection == 0) { //ZPQ
			if (cm.getParty() == null) { //no party
			cm.sendNext("�����ڻ�û��һ����ӣ�����Ӻ��ٺ���̸����");
			cm.safeDispose();
			return;
		} else if (!cm.isLeader()) { //not party leader
			cm.sendNext("�㲻����ӳ������������ӳ�����̸����");
			cm.safeDispose();
			return;
		} else {

			var party = cm.getParty().getMembers();
			mapId = cm.getMapId();
			var next = true;
			for (var i = 0; i < party.size(); i++) {
			if ((party.get(i).getLevel() < 50) || (party.get(i).getMapid() != mapId)) {
			next = false;
			}
			}
			if (next) {

		var em = cm.getEventManager("ZakumPQ");
			if (em == null) {
			cm.sendOk("�Ҳ�������������δ֪�����磬��Ϊ����Ա��û��׼���ÿ��š�");
		} else {
			var prop = em.getProperty("state");
			if (prop.equals("0") || prop == null) {
			em.startInstance(cm.getParty(), cm.getMap());
		} else {
			cm.sendOk("��һ������Ѿ���ʼ�˵����������Ժ�������");
			}
			}
			cm.dispose();
		} else {
			cm.sendNext("��ȷ�����������Ա���ﵽ50�����ϡ�");
			cm.dispose();
			}
			}
		} else if (selection == 1) { //Zakum Jump Quest
			stage = 1;
			if (cm.haveItem(4031061) && !cm.haveItem(4031062)) {

			cm.sendYesNo("���Ѿ��ɹ�ͨ���˵�һ�׶Ρ��㻹�кܳ���·���ܵ��������ļ�̨�����ԣ��������ս��һ���׶�����");
		} else {
			if (cm.haveItem(4031062)) {
			cm.sendNext("���Ѿ��õ���#t4031062#�������㲻������ս�˽׶��ˡ�");
		} else {
			cm.sendNext("�������һ�׶ε�����������ս�˽׶Ρ�");
			}
			cm.dispose();
			}
	} else if (selection == 2) { //Golden Tooth Collection
		stage = 2;
		if (teethmode == 2 && cm.haveItem(4031061) && cm.haveItem(4031062)) {
			cm.sendYesNo("�������õ������#b�������#k�� ����Ҫ���� #b30 ����ʬ��ʧ�Ľ��#k�� ���и���Ľ���Ҫ������");
		} else if (cm.haveItem(4031061) && cm.haveItem(4031062)) {
			cm.sendYesNo("�ðɣ� ���Ѿ���������ڵĽ׶Ρ�  ���ڣ� Ŭ��һ���ҿ��԰���õ�����������̨����Ҫ�� ������ۡ� ���ǣ� �ҵ���������е��ۡ�  �����һ����ҽ��ð�յ�����Ĺ�����  Ŷ������˵��ʬ���м��Ž���������Ҫ���ҵ� #b30 ����ʬ��ʧ�Ľ��#k �������ҾͿ����Լ��u��һЩ������Ȼ���ҿ��԰����õ�����Ҫ����Ʒ\r\n����Ҫ��\r\n#i4000082##b x 30 ��");
		} else {
			cm.sendNext("�������һ�׶ε�����������ս�˽׶Ρ�");
			cm.dispose();
			}
	} else if (selection == 3) { // Enter the center of Lava, quest
			var dd = cm.getEventManager("FireDemon");
			if (dd != null && cm.haveItem(4001109)) {
			dd.startInstance(cm.getPlayer());
		} else {
			cm.sendOk("��ʱ���ܽ��롣");
			}
			cm.dispose();
	} else if (selection == 4) {
		if (cm.getQuestStatus(100200) == 2) {
			cm.sendOk("���Ѿ������������񣬽��д˲�����");
			cm.dispose();
		} else {
			cm.sendYesNo("���������ң����������԰������������� #e30,000,000#n ��ң��ҾͿ�������ֱ����������");
		status = 3;
		}
		}
	} else if (status == 2) {
		if (stage == 1) {
			cm.warp(280020000, 0); // Breath of Lava I
			cm.dispose();
		} else if (stage == 2) {
			if (teethmode == 2) {
		if (cm.haveItem(4031061, 1) && cm.haveItem(4031062, 1) && cm.haveItem(4000082, 30)) { // take away items, give eyes of fire, complete quest
			if (!cm.canHoldByTypea(1, 2)) {
			cm.sendOk("��ȷ�ϱ����Ƿ��Ѿ����ˡ�");
			cm.dispose();
			return;
			}
			if (!cm.canHoldByTypea(2, 2)) {
			cm.sendOk("��ȷ�ϱ����Ƿ��Ѿ����ˡ�");
			cm.dispose();
			return;
			}
			if (!cm.canHoldByTypea(3, 2)) {
			cm.sendOk("��ȷ�ϱ����Ƿ��Ѿ����ˡ�");
			cm.dispose();
			return;
			}
			if (!cm.canHoldByTypea(4, 2)) {
			cm.sendOk("��ȷ�ϱ����Ƿ��Ѿ����ˡ�");
			cm.dispose();
			return;
			}
			if (!cm.canHoldByTypea(5, 2)) {
			cm.sendOk("��ȷ�ϱ����Ƿ��Ѿ����ˡ�");
			cm.dispose();
			return;
			}
			if (cm.canHold(4001017)) {
			cm.gainItem(4031061, -1);
			cm.gainItem(4031062, -1);
			cm.gainItem(4000082, -30);
			cm.gainItem(4001017, 5);
			cm.sendNext("ұ�����ˡ� ������ߵ�������������ͨ��������̨���š� ��������Ҫ #b#t4001017##k ���ܽ����e�档���ҿ����ж������ܽ��뵽�Ǹ��ֲ��ĵط���");
			cm.completeQuest(100201);
			cm.completeQuest(100200);
		} else {
			cm.sendNext("�����û���㹻�ı����ռ䣬����һ��������");
			}
			cm.dispose();
		} else {
			cm.sendNext("�Ҳ���Ϊ�������30�� ��ʬ��ʧ�Ľ����ء����������������Ҿͻ������Ҫ�Ķ�����");
			cm.dispose();
			}
		} else {
			cm.startQuest(100201);
			cm.dispose();
			}
			}
	} else if (status == 4) { //bribe
		if (cm.getPlayer().getMeso() < 3000000) {
			cm.sendNext("�����û���㹻�ķ����֧��������һ����������Ҫ300��");
		} else if (!cm.canHold(4001017, 5)) {
			cm.sendNext("�����û���㹻�ı����ռ䣬����һ��������");
		} else {
			cm.gainItem(4001017, 5);
			cm.completeQuest(100201);
			cm.completeQuest(100200);
			cm.forceCompleteQuest(7000);
			cm.completeQuest(100203);
			cm.sendOk("���ˣ�ף�������죡");
			cm.gainMeso(-3000000);
			}
			cm.dispose();
		} else {
			cm.dispose();
}
}