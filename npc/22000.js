/*
	����:	��ϣ��
	�؈D:	�ϸ�
	����:	2000000
*/

function start() {
	if (cm.getPlayerStat("LVL") <=7) {
		cm.sendOk("׌�ҿ���... ���X����߀���򏊉ѣ�������Ҫ�_��#b 7 level #k�Ҳ���׌�㵽���y�u�ӡ�");
		cm.dispose();
	} else if (cm.haveItem(4031801)) {
		cm.sendYesNo("�@�Ҵ���ǰ�����y�u����Ȼ����#b#v4031801:#���]��#k���Ҳ��������κε��M�á����ã���;�п��ܕ����c�ӱU��");		
	} else {
		cm.sendYesNo("�������@�Ҵ��������ǰ������Ĵ��ð�U�� ֻҪ�o�� #e150 ����#n���ҕ�����ȥ #b���y�u#k�� ���^��һ���x�_���@�e���Ͳ����ٻ؁�ӡ� ����Ҫȥ���y�u�᣿");
}
}

function action(mode, type, selection) {
	if (mode == 1) {
	if (cm.haveItem(4031801)) {
		cm.gainItem(4031801, -1);
		cm.warp(2010000, 0);
	} else if (cm.getMeso() < 150) {
		cm.sendOk("ʲ�N���㶼�]�����ţ����f��������M�Ĵ��� �����ǂ����ˣ�");
	} else {
		cm.gainMeso(-150);
		cm.warp(2010000, 0);
		}
		}
	cm.dispose();
}
