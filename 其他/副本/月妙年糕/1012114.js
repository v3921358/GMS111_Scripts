/*
	����:	�˶�
	�؈D:	ӭ�»�ɽ��
	����:	910010000
*/

function start() {
	var chat = "�����#v4001101##b#t4001101##k \r\n#b";
	chat += "\r\n#L0#�o��10�����";
	chat += "\r\n#L1#�������Ҏ�t";
	cm.sendSimple(chat);
}

function action(mode, type, selection) {
	switch (selection) {
	case 0:
	if (!cm.isLeader()) {
		cm.sendOk("�ܱ�Ǹ���Ҳ������������⣬��ֻ���ܽM�L�́����⡣");
	} else {
		if (cm.haveItem(4001101,10)) {
			cm.achievement(100);
			cm.gainItem(4001101, -10);
			cm.givePartyExp_PQ(70, 1.5);
			cm.givePartyNX(250);
			cm.addPartyTrait("will", 5);
			cm.addPartyTrait("sense", 1);
			cm.endPartyQuest(1200);
			cm.warpParty(910010300);
		} else {
			cm.sendOk("��Ҫ10��#v4001101:##b#t4001101##k");
			}
			}
			break;
	case 1:
		cm.sendOk("�@��ӭ�»�ɽ����6���N�Ӷ����Nֲ����Օ����F�M�£��@�r����ن������ã����������_ʼ�����r�����������ĳ��F���}�_�����ã����횱��o�����܂�������ʰȡ��⡣;������������á����ˣ��㌢�o������΄գ��Ҍ��е����I....");
		}
	cm.dispose();
}
