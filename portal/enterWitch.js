/*
	����:	��ľ��
	�؈D:	������Ѩ
	����:	240040510
*/

function enter(pi) {
	if (pi.isQuestFinished(20407)) {
		pi.warp(924010200,1);  //��ħŮ�Ķ�Ѩ
	} else if (pi.isQuestFinished(20406)) {
		pi.warp(924010100,1);  //��ħŮ�Ķ�Ѩ
	} else if (pi.isQuestFinished(20404)) {
		pi.warp(924010000,1);   //��ħŮ�Ķ�Ѩ
	} else {
		pi.playerMessage(-7,"[Portal]�Ҳ���ԓȥ�@�e��̫�ֲ��ˣ�");
}
}