/*
	����:	ħ����ʦ
	�؈D:	����������
	����:	610030500
*/

function start() {
	if (cm.getPlayer().getMap().getId() == 610030500) {
		cm.sendOk("����һ��ǿ��ľ�Ӣ����������֪���ǻ۵ărֵ���@��һ�������Ę��I��Ʒ�|����ˣ�ħ��������һ��Ť�����Ԍm����M��Ԏ���ĸ�������ͼ�������Ψһ�������e���߄ӵļ��ܣ���߀��횚����e����S����������_�Ԍm�K�������е����Д����ᣬ���ҵ����������Y�[�ص�ħ���ȡ�");
		cm.dispose();
	} else if (cm.getPlayer().getMap().getId() == 610030000) {
		cm.sendOk("A name forever remembered, Rafael was an exceptionally skilled sorcerer, and the foremost master of mental magic powers, telekinesis and telepathy. In addition to that, he was one of the 'Elite Mages' who mastered all the elements. He was last seen looking for the 'Temple of the Elementals' to turn the tide against the invading Krakian Army...");
		cm.dispose();
	} else if (cm.getPlayer().getMapId() == 610030521) {
		if (cm.getPlayer().getMap().getAllMonstersThreadsafe().size() == 0) {
			cm.warp(610030522,0);
		} else {
			cm.sendOk("�������еĹ��");
			}
			cm.dispose();
	} else if (cm.getPlayer().getMapId() == 610030522) {
		if (cm.getPlayer().getMap().getAllMonstersThreadsafe().size() == 0) {
			if (!cm.haveItem(4001257,1)) {
			cm.gainItem(4001257,1);
			}
			cm.warp(610030500,0);
		} else {
			cm.sendOk("�������еĹ��");
			}
			cm.dispose();
}
}