/*
	����:	���ܵ�ͼ
	�؈D:	��������
	����:	922030100
*/

function enter(pi) {
	if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
		pi.warp(220040100,0);  //ʱ��֮·&amp;lt;2&gt;
		pi.forceCompleteQuest(24084);
	} else{
		pi.playerMessage(-7,"[Portal]����؈D�����й���");
}
}
