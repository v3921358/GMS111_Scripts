/*
	����:	����
	�؈D:	��������
	����:	103000000
*/

function start() {
	ap = cm.getEventManager("AirPlane");
		if (ap == null) {
			cm.sendOk("���C���ڜʂ��С�");
		} else if (!cm.haveItem(4031731)) {
			cm.sendYesNo("���~���������¼��»����İ��գ���]�Дy�� #v4031731:#�Ҳ���׌��ǻ�����Ʊ��Ҫ����10000��ң���Ը�⹺����");
		} else if (ap.getProperty("entry").equals("true")) {
			cm.sendYesNo("���������ȥ��һ�������룬���Ļ�Ʊ����ʧ~��л��ѡ��Wizet���չ�˾��");
		} else if (ap.getProperty("entry").equals("false") && ap.getProperty("docked").equals("true")) {
			cm.sendOk("�ܱ�Ǹ���ǻ��������ǰһ���ӹر��ˡ�");
			cm.dispose();
		} else {
			cm.sendOk("Ո���ĵȴ���Ҫע����C�ĕr�g���zƱ����ǰһ���ֹͣ��Ʊ������Ո�ձ؜ʕr���_��");
		cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("����ı�����ʱ�����ٺ���̸̸��");
		}
	if (mode == 1) {
		if (!cm.haveItem(4031732)) {
		if (cm.getMeso() > 10000 && cm.canHold(1072510,1)) {
			cm.gainMeso(-10000);
			cm.gainItem(4031731, 1);
			cm.sendOk("лл��Ĺ��!");
		} else {
			cm.sendOk("����Ϊ����ETC�����û���㹻��meso��ղ�ۡ�����һ�£��ٺ���̸̸��");
			}
		} else {
			cm.gainItem(4031731,-1);
			cm.warp(540010100);
			}
			}
		cm.dispose();
}