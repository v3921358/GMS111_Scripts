/*
	����:	��ȥ����ľ��
	�؈D:	ȼ�յ���ľ��3
	����:	272000300
*/

function enter(pi) {
	if (pi.isQuestFinished(31171)) {  //�������
		pi.warp(272000310,1); //ȼ�յķ���
	} else {
		pi.playerMessage(-7,"[Portal]��Ҫ�������΄�");
}
}