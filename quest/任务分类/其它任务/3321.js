/*
	����:	ʧ�ٵ�������ʿ�������ʲ�ʿ
	�؈D:	���ʵ��о���
	����:	926120200
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 4) {
		qm.sendOk("���ǂ��o�Y���ˡ���");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("...�mȻ��֪�����@�ط�... �����g���Č���Ҳ������N�_�ĵĵط�����춲��ǟ����g�����˶����ǂ��ǳ��o�ĵĵط���Ҳ��... ��������������ܸ��oȤ...  ");
	if (status == 1)
		qm.sendNextPrev("�����l��? ����... �ҵ����ӡ� �@�N�f����ܾÛ]�п�������Ę��... �����BŮ����Ę����ģ����... ����ԓ�����⡣��Ȼ���@���H�����ܿ�͕�ԭՏ��... ");
	if (status == 2)
		qm.sendNextPrev("...�����Ǿ͛]���k���ˡ��Y���@�о�֮ǰ�ЛQ�Ĳ���Ҋ����Ę���mȻ�ǳ�����... �Y���о�֮ǰ... ֻҪ�Y���@�о��Ϳ������h����#b#p2111004##k��Ę�ˡ�");
	if (status == 3)
		qm.sendNextPrev("�@�ӿ���߀�]�а�#b헉�#k�ͽo�����±����l�F����#b�������#k... ���o��Ҋ��, ���Ծ͟o�������Y���ˡ��Εr��Ҋ����...");
	if (status == 4)
		qm.sendAcceptDecline("...�UԒ̫�L�ˡ��mȻ��Ǹ,  Ҫ�^�m�о�... Ո�x�_�о��ҡ�");
	if (status == 5){
		qm.forceStartQuest();
		qm.warp(261020401);
		qm.dispose();
}
}