/*
	����:	����
	�؈D:	����ɭ��
	����:	930000000
*/

function start() {
	switch (cm.getPlayer().getMapId()) {
	case 930000000:
		cm.sendOk("�x�x����æ���@�e���F�˲����韩�����M������c֮ǰ��Ո���ó�֜ʂ䣬�e���ǂ��O��Σ�U�ĵط���");
		break;
	case 930000100:
		cm.sendOk("�҂���������@���؈D�Y���еĹ�������M�����ĵط���");
		break;
	case 930000200:
		cm.sendOk("��Щ����Ⱦ��ֲ����ס��ǰ�M�ĵ�·����횵��ҵ�#v4001162:##b#t4001162##k����������ϵK��ԓȥ���e���ء�");
		break;
	case 930000300:
		cm.warpParty(930000400);
		break;
	case 930000400:
		if (cm.haveItem(4001169, 10)) {
			cm.warpParty(930000500, 0);
			cm.gainItem(4001169, -10);
		} else if (!cm.haveItem(2270004)) {
			//cm.gainItem(2270004, 10);  ����δ�޸� 4001169 �ĳɹ����
			cm.sendOk("Ո���ҜQ���@Щ���񱻶����Ĺ���K�ռ�10��#v4001169:##b#t4001169##k��");
		} else {
			cm.sendOk("Ո�o��10��#v4001169:##b#t4001169##k��");
			}
			break;
	case 930000600:
		cm.sendOk("�@�e������Ⱦ�ĸ�Դ֮�أ�Ո�������ǂ�����ӡ�Ĺ��");
		break;
	case 930000700:
		if (cm.canHold(4001198, 1)) {
			cm.gainItem(4001198, 1);
			cm.gainExp(52000);
			cm.getPlayer().endPartyQuest(1206);
			cm.removeAll(4001161);
			cm.removeAll(4001162);
			cm.removeAll(4001163);
			cm.removeAll(4001164);
			cm.removeAll(4001169);
			cm.removeAll(2270004);
			cm.warp(930000800, 0);
		} else {
			cm.getPlayer().dropMessage(5, "Ո���������g��");
			}
			break;
			}
		cm.dispose();
}