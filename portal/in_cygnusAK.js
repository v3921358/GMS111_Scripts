/*
	����:	��Ԫ��϶
	�؈D:	�ڰ���̳���
	����:	272030300
*/

function enter(pi) {
	if (pi.getPlayerCount(272010200) == 0) {    //pi.openNpc(1104209);
		pi.resetMap(272030400);   //��ͼˢ��   
		pi.warp(272030400, 1);  //�ڰ���̳
	} else {
		pi.playerMessage(-7,"[Portal]�΄����ڈ����У�Ո�Lԇ�����l��");
}
}