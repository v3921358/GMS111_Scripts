/*
	����:	240080800
	�؈D:	240080800
	����:	240080800
*/

function enter(pi) {
	if (pi.getPlayer().getParty() != null && pi.getMap().getAllMonstersThreadsafe().size() == 0) {
	if (pi.canHold(4001401, 1) ) {
		pi.gainItem(4001401, 1);
		pi.addTrait("will", 40);
		pi.addTrait("charisma", 10);
		pi.gainExp((pi.getPlayer().getNeededExp() / 100) *99);
		pi.warp(240080050);
		pi.playPortalSE();
	} else {
		pi.playerMessage(-7,"[Portal]�o���ռ{��Ʒ��Ո���������g");
		}
	} else {
		pi.playerMessage(-7,"[Portal]Ո��BOSS���������Iȡ�����x�_");
}
}
