/*
	����:	ι��Ȯ
	�؈D:	ǰԺ
	����:	100030102
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
		qm.sendNext("һ�����Ц�˰��졣�����������˲�Ҫ���f��ֵ�Ԓ�ˣ����c����ͽo #p1013102#��");
	if (status == 1)
		qm.sendNextPrevS("#b�ף��ǲ��� #p1013101#Ҫ���Ĺ����᣿");
	if (status == 2)
		qm.sendAcceptDecline("�@������Ȼ�@�ӽи�磡���ֲ��ǲ�֪�� #p1013102#�ж�ӑ���ҡ�������Ԓһ����ҧ�ҡ��CȮϲ�g�㣬����ȥ����");
	if (status == 3){
		if (!qm.haveItem(4032447))
		qm.gainItem(4032447, 1);
		qm.sendNext("���c��#b��߅#kȥ�����#v4032447:##k�ýo#b#p1013102##k�ٻ؁����b���Ą����_ʼ�����У������Ƕ����I�ˡ�");
		}
	if (status == 4)
		qm.sendOk("������ýo#p1013102#����Ϳ��c�؁���߀������Ҫ�����f��");
	if (status == 5){
		qm.forceStartQuest();
		qm.dispose();
}
}