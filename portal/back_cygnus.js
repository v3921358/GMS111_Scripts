/*
	����:	��ʿ��Ҫ��
	�؈D:	���õ�ͥԺ
	����:	271040110
*/

function enter(pi) {
	if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
		pi.warp(271040200,0); //ϣ��˹�ĺ�Ժ
	} else {
		pi.playerMessage(-7,"[Portal]�΄����ڈ����У�Ո�Lԇ�����l��");
}
}