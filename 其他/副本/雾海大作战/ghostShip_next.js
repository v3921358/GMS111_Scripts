/*
	����:	��
	�؈D:	��1��ս��
	����:	923020110
*/

function enter(pi) {
	if (!pi.isLeader()) {
		pi.playerMessage(-7,"[Portal]����ɽM�L��꠲����M��˂����c");
	} else {
	if (pi.getMap().getAllMonstersThreadsafe().size() != 0) {
		pi.playerMessage(-7,"[Portal]����؈D�����й���");
		return;
		}
	if (((pi.getMapId() % 10) | 0) == 4) { //last stage
	if (pi.getMap().getAllMonstersThreadsafe().size() != 0) {
		pi.playerMessage(-7,"[Portal]�ɂ��_�P����횽�ͨ");
		return;
		}
		var bossroom = pi.getMapId() + 66;//90-14 = 76, 90-24=66
	if (((bossroom % 100) | 0) != 90) {
		bossroom += 10;
		}
		pi.warpParty(bossroom, 0);
		} else {
		pi.warpParty(pi.getMapId() + 1, ((pi.getMapId() % 10) | 0) == 3 ? 1 : 2);
}
}
}