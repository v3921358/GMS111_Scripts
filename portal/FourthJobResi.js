/*
	����:	���ܵ�ͼ
	�؈D:	��ֵ�����
	����:	310060221
*/

function enter(pi) {
	if (pi.isQuestFinished(23040)) {
	if (pi.isQuestFinished(23043) || pi.haveItem(4032743,1)) {
		pi.warp(931000300, 0);  //��ֵĶ�Ѩ���
		return true;
	} else {
		pi.playerMessage(-7,"[Portal]��Ҫ����÷�����ſ�");
		}
	} else if (pi.isQuestFinished(23041)) {
	if (pi.isQuestFinished(23044) || pi.haveItem(4032743,1)) {
		pi.warp(931000301, 0);   //��ֵĶ�Ѩ���
		return true;
	} else {
		pi.playerMessage(-7,"[Portal]��Ҫ����÷�����ſ�");
		}
	} else if (pi.isQuestFinished(23042)) {
	if (pi.isQuestFinished(23045) || pi.haveItem(4032743,1)) {
		pi.warp(931000302, 0);    //��ֵĶ�Ѩ���
		return true;
	} else {
		pi.playerMessage(-7,"[Portal]��Ҫ����÷�����ſ�");
		}
	} else {
		pi.warp(310060220,0);   //����ϵͳ�о���3
}
}