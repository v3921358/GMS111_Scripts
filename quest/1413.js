/*
	����:	ǹ��ʿ֮·
	�؈D:	սʿʥ��
	����:	102000003
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 6) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("�����x���Tʿ֮·�᣿ ���Tʿ����ͬ����һ�ӣ���ʹ�Ø���ì���L���������I�� �ڑ�ʿ�й����������h���������A����");
	if (status == 1)
		qm.sendNextPrev("�����ʿ�����Tʿ�ļ������кܶ�����ǿ�����ܡ� ׌�Լ��쾚ʹ��������#b��׼����#k�����ǿ��������#b�K�O��ì#k����߹����ٶȵ�#b��������#k��ʹ���w׃�Ï��ѵ�#b����Ӗ��#k�ȵȡ�");
	if (status == 2)
		qm.sendNextPrev("��Ȼ߀�и�ǿ��Ĺ������ܡ� ��֪��#b؞����͸#k���܆᣿ ���ǹ��������x���˕r�������~��ı�����ʣ��������h���x���˕r���������w������ǿ���ܡ�");
	if (status == 3)
		qm.sendNextPrev("���ǘ��Tʿ�ļ������������đ�ԓ��#b���}֮��#k�� ���ǿ��ԕ��r��߰����Լ��ڃȵ�ȫ�w꠆T�����Ѫ�������ħ���ļ��ܣ��ڽ�ɫ�ȼ��^�ߵĕr����Ȼ�����á�");
	if (status == 4)
		qm.sendNextPrev("#b�O�޷��R#kҲ�ǲ��ܲ��ᵽ�ļ��ܡ� �����������һ���r�g�����꠆T��������R����ħ�����R���� ��Ȼ���������Щ�X�úȺܶ�ˎˮҲ�]�µ��ˁ��f����ԓ�]ʲ�N�P�S��");
	if (status == 5)
		qm.sendNextPrev("�f���͵��˞�ֹ�� �F�����x��ĕr�g�ˡ� ���뮔���Tʿ�᣿ �����⣬�ҾͰ����͵��Ҝʂ�Ŀ���ȥ�� ��ֻҪ���e���ҵ�#r30���N���ڰ�����������#k������ܳɞ������Ę��Tʿ��");
	if (status == 6)
		qm.sendAcceptDecline("ֻҪ������΄գ��Ϳ����R���_ʼ��ԇ�� ���������Ԓ���ͬF�ھܽ^�� �ܽ^֮�ᣬ  ������·���f��Ҳ���e�� ���N�ӡ������녢�Ә��Tʿ�Ŀ�ԇ�᣿");
	if (status == 7){
		qm.forceStartQuest();
		qm.warp(910230000,0);
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
		qm.sendYesNo("#t4031013#ȫ���L�������� �������Ͽ��Կ����ɞ阌�Tʿ��ؠ�ء� ��һ�����԰ј��õñȄ����á� �õģ�����ɞ阌�Tʿ�᣿\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142108:#   #t1142108#");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.changeJob(130);
		qm.removeAll(4031013);
		qm.gainItem(1142108,1);
		qm.sendNext("�õģ� �ĬF���������#b���Tʿ#k�ˣ� ���L������������}�_���˵Ĉ����đ�ʿ�������Tʿ�� ϣ�����������Լ����������^�mǰ�M��");
		}
	if (status == 2)
		qm.sendOk("��������@�ñȬF�ڸ�ǿ�����������Ǿ����ܰ��ǷN���������������ϡ� ��횰��Լ��������������_�������ϣ��������؟�Ρ�");
	if (status == 3){
		qm.dispose();
}
}