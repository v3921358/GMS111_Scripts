/*
	����:	��ɫӰ��
	�؈D:	���ִ山��Сɽ
	����:	100010000
*/

function start() {
	var status = cm.getQuestStatus(20706);
    
	if (status == 0)
		cm.sendOk("�������@���؅^�]��ʲ�N����֮̎��");
	if (status == 1){
		cm.forceStartQuest(20731,"1");
		cm.sendOk("���ѽ��l�F���Ӱ�� ��È��o #p1103001#��");
		cm.dispose();
}
}
