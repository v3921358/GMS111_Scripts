/*
	����:	��߳�
	�؈D:	ʱ�����ı�Դ
	����:	220080001
*/

function enter(pi) {
	if (pi.haveItem(4031172)) {  //�����������
	if (pi.getPlayerCount(220080001) == 0) { 
		pi.warp(220080001, "st00");  //ʱ�����ı�Դ
	} else {
		pi.playerMessage(-7,"[Portal]�΄����ڈ����У�Ո�Lԇ�����l��");
		}
	} else {
		pi.playerMessage(-7,"[Portal]��Ҫ�y����߳Ǫ���");
}
}