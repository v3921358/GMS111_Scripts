/*
	����:	����
	�؈D:	����̩Ӫ��
	����:	300000000
*/

var status = -1;

var exchangeItem = 4000437;

function action(mode, type, selection) {
	if (mode == 1) {
	status++;
	} else {
	cm.dispose();
	return;
	}
	if (status == 0) {
		cm.sendSimple("�@�N��Ă�������Ҫһ�cˎ��...#b\r\n#L0#�٣��@һЩ#v4000437:##t4000437#�����������õ�ˎƷ��#l");
		}
	if (status == 1) {
		if (!cm.haveItem(exchangeItem, 20)) {
			cm.sendOk("��]�����Ĕ�������Ҫ20��#v4000437:##t4000437#");
			cm.dispose();
		} else {
			cm.sendGetNumber("�ţ��@�ǂ������⣡ �ҿ��Խo�� #v2022457:#ÿ20�� #i" + exchangeItem + "##t" + exchangeItem + "# ����Ҫ�o�Ҷ��� (��ǰ����: " + cm.getPlayer().itemQuantity(exchangeItem) + ")", java.lang.Math.min(300.0, cm.getPlayer().itemQuantity(exchangeItem) / 20.0), 1, java.lang.Math.min(300.0, cm.getPlayer().itemQuantity(exchangeItem) / 20.0));
			}
			}
	if (status == 2) {
		if (selection >= 1 && selection <= cm.getPlayer().itemQuantity(exchangeItem) / 20) {
			if (!cm.canHold(2022457, selection)) {
			cm.sendOk("Ո�ճ�һЩ������λ��");
		} else {
			cm.gainItem(2022457, selection);
			cm.gainItem(exchangeItem, -(selection * 20));
			cm.sendOk("�x�x�㡣");
			}
			}
		cm.dispose();
}
}