/*
	����:	��߱����
	�؈D:	����֮��
	����:	922000010
*/

var havePendulum = false;
var complete = false;
var inQuest = false;

function start() {
	if (cm.getQuestStatus(3230) == 1) {
		inQuest = true;
	} else {
		inQuest = false;
		}
	dh = cm.getEventManager("DollHouse");
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 0 && status == 0) {
	cm.dispose();
	return;
	} else if (mode == 0 && status == 1) {
		cm.sendNext("��Ҫ֪�������������ҵġ�");
		cm.dispose();
	return;
	}
	if (mode == 1) {
	status++;
	} else {
	status--;
	}
	if (inQuest == true) {
	if (status == 0) {
		if (cm.haveItem(4031094)) {
			cm.sendNext("�ۣ����ѽ��ҵ���#b#t4031094##k���x�x������҂�ͨ�^�@�ε��y�P���ڴ�֮ǰՈ�șz�鱳���Ƿ������Ŀ��g����׌�҂��ܱ�ʾ��ߵ����⡣");
			havePendulum = true;
		} else {
			cm.sendSimple("�ˣ����� #b#p2040028##k, ��ؓ؟���o�@�����g�����@�e�����Ҋ�ȶ��S��С���ӵ�������l�F��һЩ��ͬ������΄����ҵ����_��С���ӁK�������õ�#b#t4031094##k������@����߳������һ���������ฌ���혱������������e��С�������N�㌢��������ȥ���@�cՈ�ձ�С�ġ�\r\n#L0##b�����x�_�@�e#k#l");
			}
			}
	if (status == 1) {
		if (havePendulum == true) {
		if (!cm.canHold(2000010)) {
			cm.sendNext("Ո�_�J��ı����Ƿ�M�ˡ�");
			}
			cm.sendNextPrev("����ʲ�N���룿��ϲ�g #b100 #v2000010:##t2000010#k �ҽo��Ī���᣿�ǳ����x�㌦�҂��Ď������ҬF�ھ͎����ȥ�ɡ�");
		if (complete == false) {
			cm.forceCompleteQuest(3230);
			cm.gainExp(2400);
			cm.gainItem(4031094, -1);
			cm.gainItem(2000010, 100);
			complete = true;
			}
		} else {
			cm.sendYesNo("��_����F��Ҫ�ŗ����Ǻð�.....����Ոӛס���´����M���Ԓ���_��λ�Õ���׃�ģ����횺úõ�ӛס�@�εĽ�򞡣");
			}
			}
	if (status == 2) {
		if (cm.getPlayer().getEventInstance() != null)
			cm.getPlayer().getEventInstance().removePlayer(cm.getChar());
			cm.dispose();
			}
	} else {
	if (status == 0)
		cm.sendNext("�Ҳ�֪���������N���@�e�ģ����ҽ��h��߀���s�o�x�_�@��Σ�U�؎���");
	if (status == 1){
		cm.warp(221023200, 4);
		cm.dispose();
}
}
}