/*
	����:	����֮��
	�؈D:	ȼ�յķ���
	����:	272000310
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("����ˑ�����҂��N�壬�F��ԓȥ���p���`�ˡ� ����ӋҲ���ò��p��");
	if (status == 1)
		qm.sendNextPrevS("#b�ǵģ�����ȥ����ȑ���߀Ҫ��⡣ ԓ���N�������أ�");
	if (status == 2)
		qm.sendAcceptDecline("�p���`���������������о��`���{�䣬����������ܸ����ʹ�ࡣ ������@�ӵ��µ�Ԓ�����`��Ҳ��ȫ����ʧ�� ���˷����@�ӵ�����l������횎����p�{���`����վ���� ��ˣ����ܽ�����������᣿");
	if (status == 3)
		qm.sendNextPrevS("#b�]���}���Һܘ�������㡣");
	if (status == 4)
		qm.sendNextPrev("Ո�����������o��һЩ�� ����w�����ܕ�ͻȻ�½����e���¡�");
	if (status == 5){
		qm.getPlayer().addHP(999999);
		qm.getPlayer().addHP(-2000);
		qm.sendNextPrev("��׌�˳��@�� ���w�ȵ�������ݔ춄���Ҋ��������Ӣ�ۡ� �ҕ��r�֏��˴󲿷ֵ������� �ҕ����@�������������u�������p�{���`�ĽY���� �Ե�һ�¡�");
		}
	if (status == 6)
		qm.sendPrev("�����Ҹ����#v4033082:#���������ľ��裬ȥ����#b˫������#k��ֻҪ������һ�����������ˡ�");
	if (status == 7){
		qm.forceStartQuest();
		if(!qm.haveItem(4033082, 1)) qm.gainItem(4033082, 1);
		qm.dispose();
}
}
