/*
	����:	սʿ��ʦ
	�؈D:	����������
	����:	610030500
*/

function start() {
	if (cm.getPlayer().getMap().getId() == 610030500) {
		cm.sendOk("�y�����ŵ��������⣬�κ��˶����Ԍ��F������׌��ʿ�c����ͬ����������F�����־���oՓ������Σ�һ�������đ�ʿ�����Գֵ��ף�ֱ��ȡ�Ä�������ˣ���ʿ������һ�l����ĵ�·�����횴��e��Ĺ�����_��ʿ����K�@�������������C���Լ���");
		cm.dispose();
	} else if (cm.getPlayer().getMap().getId() == 610030000) {
		cm.sendOk("A legendary family of heroes, the de Vrisiens are the original founders of the Stormcasters. The family is unique, as each son or daughter inherits the full fighting techniques of their ancestors. This ability has proven to be immensely useful; as it allows for nearly unlimited strategy, improvisation and tactics to defeat all enemies. A true family for the generations.");
		cm.dispose();
	} else if (cm.getPlayer().getMapId() == 610030510) {
		if (cm.getPlayer().getMap().getAllMonstersThreadsafe().size() == 0) {
			if (!cm.haveItem(4001259,1)) {
			cm.gainItem(4001259,1);
			}
			cm.warp(610030500,0);
		} else {
			cm.sendOk("�������еľp�t���o�ߡ�");
			}
		cm.dispose();
}
}