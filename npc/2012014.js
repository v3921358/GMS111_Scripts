/*
	����:	���֮��ħ��ʯ
	�؈D:	ͨ����&amp;lt;20��&gt;
	����:	200080200
*/

function start() {
	if (cm.haveItem(4001019)) {
		cm.sendOk("����������һ�� #v4001019:#�����Ƅӵ� #b#p2012015##k �᣿");
	} else {
		cm.sendOk("ʹ��#v4001019:#����ħ��ʯ���ܿ��ُ�#b#p2012014##k�Ƅӵ�#b#p2012015##k��");
		cm.dispose();
}
}

function action(mode, type, selection) {
	cm.gainItem(4001019, -1);
	cm.warp(200082100,0);
	cm.dispose();
}
