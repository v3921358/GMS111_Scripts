/*
	����:	Ģ����
	�؈D:	Ģ��ɭ���
	����:	106020300
*/

function enter(pi) {
	if (pi.getQuestStatus(2314) == 1) {
		pi.removeAll(4000507);
		pi.getPlayer().updateQuestCustomData(2314,"1");
		pi.playerMessage(-7,"[Portal]ħ���ű���ӡ�ģ���ȥ�����������");
	} else if (pi.haveItem(4000507,1)){
		pi.warp(106020400,2);  //ѡ����
		pi.removeAll(4000507);
	} else if (pi.haveItem(2430014,1)){
		pi.warp(106020400,2);
	} else {
		pi.playerMessage(-7,"[Portal]��Ҫ�y��Ģ���Ķ�����");
}
}






