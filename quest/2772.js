/*
	����:	��ϲ�Ĳ���4
	�؈D:	�޴����
	����:	101030000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendAcceptDecline("�����޾�Ҳ�Y����,  �́��M���u���@���g׃�����ٵ�����yԇ~���� �㄂��r�B�����o���н��|�Ĺ���, �Εr׃�@�N����~���� \r\n����yԇ������#r#o9100018##k~���� �д�50�b�Ĝʂ���~��??\r\n");
	if (status == 1){
		qm.forceStartQuest();
		qm.warp(910100140);
		qm.dispose();
}
}