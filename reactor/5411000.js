/*
	����:	�¼���
	�؈D:	�ֻ���
	����:	541010100
*/

function act(){
try {
	rm.changeMusic("Bgm09/TimeAttack");    //4000381   ��ɫ����
	rm.spawnMonster(9420513, -146, 225);
	rm.mapMessage(5, "���������̹�Ῠ��ξ����.");
	} catch(e) {
	rm.mapMessage(5, "Error: " + e);
}
}