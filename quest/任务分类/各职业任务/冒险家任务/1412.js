/*
	����:	׼��ʿ֮·
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
		qm.sendNext("�����x��׼�Tʿ֮·�᣿ ׼�Tʿ�Ǔ������u�������䔳�ˣ���ǿ����������o���˵��ˡ� ��Ҫʹ�õ�������#b��#k��#b�g��#k��");
	if (status == 1)
		qm.sendNextPrev("�����ʿ��׼�Tʿ�ļ������кܶ�����ǿ�����ܡ� ׌�Լ��쾚ʹ��������#b��׼����#k�����ǿ��������#b�K�O���g��#k����߹����ٶȵ�#b��������#k��ʹ���w׃�Ï��ѵ�#b����Ӗ��#k�ȵȡ�");
	if (status == 2)
		qm.sendNextPrev("���H��ˡ� ���׼�Tʿ���ԣ�߀��#b���{#k���ܣ���������һ���r�g����ض������ˡ� Ҳ���������挍��չ�F����׼�Tʿ֮���c�ɣ�");
	if (status == 3)
		qm.sendNextPrev("��Ȼ߀�и�ǿ��Ĺ������ܡ� ��֪��#b�����n���ͺ����n��#k���܆᣿ ����˲�g�o�����x������ݻ��߱����ݣ��K�Դ˽o�蔳�����݂����ļ��ܣ��������������CҲ����֮ǰ�p�ܶ�ġ�");
	if (status == 4)
		qm.sendNextPrev("����#bԪ���n��#k�دB���N��ͬ���ݵ��n�����ܕr�������һ���r�g��ǿ������������� �@�Ƿǳ���Ч�ļ��ܣ������ɞ�׼�Tʿ��Ԓ��ӛ��ҪԇһԇŶ��");
	if (status == 5)
		qm.sendNextPrev("���ˣ��f���͵��@�e�� ���I���x��r�g�� �����x��׼�Tʿ�᣿ �x���Ԓ���ҾͰ����͵��ʂ�õĿ���ȥ�� ���e���L��#r#r30�����кڰ�����������#k#k���Ϳ��Գɞ�������׼�Tʿ��");
	if (status == 6)
		qm.sendAcceptDecline("ֻҪ������΄գ��Ϳ����R���_ʼ��ԇ�� ���������Ԓ���ͬF�ھܽ^�� �ܽ^֮�ᣬ  ������·���f��Ҳ���e�� ���N�ӡ������녢��׼�Tʿ�Ŀ�ԇ�᣿");
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
		qm.sendYesNo("#t4031013#ȫ���L�����������ҹ�Ȼ�]�п��e�ˡ� ��֪����һ������������ ��չ�F���˳������¸ҡ����õģ��ҁ��������׼�Tʿ֮·�� �ʂ���ˆ᣿\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142108:#   #t1142108#");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.changeJob(120);
		qm.removeAll(4031013);
		qm.gainItem(1142108,1);
		qm.sendNext("�õģ� �ĬF���������#b׼�Tʿ#k�ˣ� ׼�Tʿ�ǌ��������o������Ѿ��ЫI���񣬾����Tʿ���đ�ʿ�� ϣ�����ܑ{���Լ��������p�ۣ��������_�ĵ�·��");
		}
	if (status == 2)
		qm.sendOk("��������@�ñȬF�ڸ�ǿ�����������Ǿ����ܰ��ǷN���������������ϡ� ��횰��Լ��������������_�������ϣ��������؟�� ��");
	if (status == 3){
		qm.dispose();
}
}