/*
	����:	��߳�
	�؈D:	���¶̨&amp;lt;5&gt;
	����:	220011000
*/

function enter(pi) {
	if (pi.getQuestStatus(22583) == 1) {  //�����������
		if (pi.getPlayerCount(922030011) == 0) { 
			pi.warp(922030010,1);  //��̨
			pi.resetMap(922030011);   //��ͼˢ��
			pi.forceCompleteQuest(22583);
			pi.showInstruction("��δ�޸��������������", 150, 5);
		} else {
			pi.playerMessage(-7,"[Portal]�΄����ڈ����У�Ո�Lԇ�����l��");
			}
	} else if (pi.getQuestStatus(22584) == 1) {
		if (pi.getPlayerCount(922030020) == 0 && pi.getPlayerCount(922030022) == 0) {
			pi.warp(922030020,1);  //��̨
			pi.resetMap(922030022);   //��ͼˢ��
		} else {
			pi.playerMessage(-7,"[Portal]�΄����ڈ����У�Ո�Lԇ�����l��");
			}
	} else {
		pi.warp(220011001,1);  //���ɹ̨
}
}