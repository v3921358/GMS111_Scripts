/*
	����:	��ʿ��Ҫ��
	�؈D:	Ҫ�����
	����:	271030010
*/

function enter(pi) {
	if (pi.getQuestStatus(31124) == 1) {
		pi.getPlayer().updateQuestCustomData(31124,"end");
		pi.playerMessage(-7,"[Portal]Ҫ���ľ���ǿ���ˣ��޷��볡��");
	} else {
		pi.playerMessage(-7,"[Portal]Ҫ���ľ���ǿ���ˣ��޷��볡��");
}
}