/*
	����:	����֮·
	�؈D:	սʿʥ��
	����:	102000003
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 5) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("�����߄���֮·�᣿ �ҁ���㺆�ε��f��һ���͡� ��������һ�����x�ϵđ�ʿ�� ��Ҫʹ�õ�������#b��#k��#b��#k��");
	if (status == 1)
		qm.sendNextPrev("�����ʿ�����͵ļ������кܶ�����ǿ�����ܡ� ׌�Լ��쾚ʹ��������#b��׼����#k�����ǿ��������#b�K�O����#k����߹����ٶȵ�#b��������#k��ʹ���w׃�Ï��ѵ�#b����Ӗ��#k�ȵȡ�");
	if (status == 2)
		qm.sendNextPrev("��Ȼ߀�и�ǿ��Ĺ������ܡ� ��֪��#b�p���w�P#k���܆᣿ ���Ǔ]�赶�����߸��^�o����ǰ�Ĕ���ʩ�Ӷ��B���ļ��ܣ�Ҫ�������������CҲ����֮ǰ���׺ܶࡣ");
	if (status == 3)
		qm.sendNextPrev("�����r���܆���#b�Y�⼯��#k��Ԓ���Ϳ����۷e�Y���c�����Kͨ�^��ʹ�ø�ǿ����Y�����ļ��ܡ�");
	if (status == 4)
		qm.sendNextPrev("���ˣ��f���͵��@�e�� ���I���x��r�g�� �����x�񄦿͆᣿ �x���Ԓ���ҾͰ����͵��ʂ�õĿ���ȥ�� ���e���L��#r30�����кڰ�����������#k���Ϳ��Գɞ������Ą��͡�");
	if (status == 5)
		qm.sendAcceptDecline("ֻҪ������΄գ��Ϳ����R���_ʼ��ԇ�� ���������Ԓ���ͬF�ھܽ^�� �ܽ^֮�ᣬ  ������·���f��Ҳ���e�� ���N�ӡ������녢�ӄ��͵Ŀ�ԇ�᣿");
	if (status == 6){
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
		qm.sendYesNo("#t4031013#ȫ���L�������� �ǳ��ã� ��֪����һ������������ ��չ�F����һ���Ä��͵��Y�|�� �F������Գɞ鄦���ˡ� �õģ��������ن���һ�Ρ� ����ɞ鄦�͆᣿\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142108:#   #t1142108#");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.changeJob(110);
		qm.removeAll(4031013);
		qm.gainItem(1142108,1);
		qm.sendNext("�õģ� �ĬF���������#b����#k�ˣ� �����Ǟ���׷���������������Y���ˡ���ϣ���㲻Ҫʧȥ�Y־���¸�ǰ�С�");
		}
	if (status == 2)
		qm.sendOk("��������@�ñȬF�ڸ�ǿ�����������Ǿ����ܰ��ǷN���������������ϡ� ��횰��Լ��������������_�������ϣ��������؟�Ρ�");
	if (status == 3){
		qm.dispose();
}
}