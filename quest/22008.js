/*
	����:	���Ϻ�Ժ�ĺ���
	�؈D:	ǰԺ
	����:	100030102
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("�ţ�ʲ�᣿���� ��U�ĺ�؂ ���]�뵽�������@��đС��");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendAcceptDecline("�����X����ֆ᣿������u�������ǰ��Ҽ���ˣ���ǰ�������ºܶ��u�� �����F��Խ��Խ���ˡ��ǲ�������؂�������أ��ǘӵ�Ԓ������s�o���k�����С����f��������");
	if (status == 1)
		qm.sendPrev("�ðɣ�׌�҂�ȥ�����؂�ɡ�����ȥ #b��Ժ#k ����#r10ֻ ��U�ĺ�؂#k ���ҕ�ؓ؟ʣ�µ�����ġ����ˣ����쵽 ��Ժ ȥ�ɡ�");
	if (status == 2){
		qm.forceStartQuest();
		qm.evanTutorial("UI/tutorial/evan/10/0", 1);
		qm.dispose();
}
}

function end(mode, type, selection) {
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
		qm.sendNext("��U�ĺ�؂��������ˆ᣿");
	if (status == 1)
		qm.sendNextPrevS("#b���fҪȥ��ʰʣ�µĺ�؂�ģ�������£�");
	if (status == 2)
		qm.sendNextPrev("�����ǂ���������ȥ�ˣ������e��·���±� #o9300385# ץȥ�����|�����Ծͻ؁��ˡ�");
	if (status == 3)
		qm.sendNextPrevS("#bԓ�����Ǻ��º�؂���������˰ɣ�");
	if (status == 4)
		qm.sendNextPrev("���ں��fʲ�ᰡ�����Ҟ�ʲ������º�؂������Ҽ�c�������º�؂��");
	if (status == 5)
		qm.sendNextPrevS("#b����������Ҽֻ #o9300385# !");
	if (status == 6)
		qm.sendNextPrev("�����������");
	if (status == 7)
		qm.sendNextPrevS("#b...");
	if (status == 8)
		qm.sendNextPrev("......");
	if (status == 9)
		qm.sendNextPrev("�������@��ⷡ��e������ң�����ҵ����K���ã��������@����");
	if (status == 10)
		qm.sendNextPrevS("#b(���Խи��Ų����ȥ������ȥ��)");
	if (status == 11)
		qm.sendNextPrev("�ߺߣ��������ӣ���U�ĺ�؂ ������ˡ��������ˡ��Ұ�Ҽ��·�^��ð�U�����ҵĖ|���ͽo��������o���Ĉ�ꡣ�������� \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1372043# 1 #t1372043# \r\n#i2022621# 25 #t2022621# \r\n#i2022622# 25 #t2022622#s \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 910 exp");
	if (status == 12){
		qm.forceCompleteQuest();
		qm.forceCompleteQuest(22100); //�Զ�תְ ǿ���������
		qm.gainItem(1372043, 1);
		qm.gainItem(2022621, 25);
		qm.gainItem(2022622, 25);
		qm.gainExp(910);
		qm.sendNext("��#bħ�����Ĺ����������ȡ�#k �mȻ��Ҳ���ܛ]ʲ���ã����������Y��̎�ߣ�߀�Ǻ܎��ģ���������");
		}
	if (status == 13){
		qm.sendOk("��؂�Ĕ����_�������ˣ����ɣ���֡���؂�Ĕ�����ʲ��������أ��������{��Ҽ�¡�");
		qm.dispose();
}
}