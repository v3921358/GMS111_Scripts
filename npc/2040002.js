/*
	����:	��߱�Ŷ������
	�؈D:	�����100��
	����:	221023200
*/

var status = -1;

var dh;
var entry = true;

function action(mode, type, selection) {
	dh = cm.getEventManager("DollHouse");
	if (mode == -1) {
	cm.dispose();
	} else {
	if (mode == 0 && status == 0) {
		cm.sendOk("�����ס��@�Ƿǳ��������ģ����]���㌢���R�Ȳ�һ���ǳ�Σ�U�Ĺ��������������X�����K�ĸ�׃�����NՈ������fԒ���Ҵ_�ſ��ԏĄe������ʹ�õĎ�����");
		cm.dispose();
		return;
	} else if (mode == 0 && status == 2) {
		cm.sendOk("�����ס��@�Ƿǳ��������ģ����]���㌢���R�Ȳ�һ���ǳ�Σ�U�Ĺ��������������X�����K�ĸ�׃�����NՈ������fԒ���Ҵ_�ſ��ԏĄe������ʹ�õĎ�����");
		cm.dispose();
		return;
		}
	if (mode == 1) {
	status++;
	} else {
	status--;
	}
	if (cm.getQuestStatus(3230) == 1) {
	if (status == 0)
		cm.sendYesNo("��...���� #b#p2040001##k. �� �f�^�ܶ��P��������... ���܎����һ� #b#t4031093##k ���Ӛ��!");
	if (status == 1)
		cm.sendNext("�ǳ����x���䌍, #b#p2040001##k ������  #b#t4031093##k ��yԇ�Լ����������������Ƿ���̎���@�����}�����Բ�Ҫ��������һ���S�CՈ��ķ�ʽ�����X�����@�ӵ�����̎����澳.");
	if (status == 2){
		cm.sendYesNo("ǰ�Εr�g��һ��������@�e����һ���������춳ߴ���ѿp���K͵����犔[���������Լ��ķ��g�e��߅���b��һ������ݡ��@һ�п�������һ�ӵ��ң����ԛ]���k���ҵ�������������҂��ҵ�����");
		if (dh != null && dh.getProperty("noEntry") != null && dh.getProperty("noEntry").equals("true")) {
		entry = false;
		}
		}
	if (status == 3)
		cm.sendNext("�õģ��ҕ����㵽��һ�����g����߅���S����ͬ������ݣ����^���м������l�F������ͬ������΄��Ǵ��������������Ȼ���#t4031094#���؁�o�ҡ�.");
	if (status == 4)
		cm.sendNextPrev("����Ҫ�ڕr�g���ҵ�#t4031094# Ȼ�����һ؈�");
	if (status == 5){
		if (dh == null || entry == false) {
			cm.sendPrev("����݃Ⱥ��������ˡ���ֻ��׌һ�������e�棬����Ո��ȴ��ɡ�");
		} else {
			cm.removeAll(4031093);
			dh.startInstance(cm.getChar());
			}
			cm.dispose();
			}
		} else if (cm.getQuestStatus(3230) == 2) {
			cm.sendOk("�x�x�� #h #, �҂��õ��� #b#t4031094##k �؁K�N������һ��а���Ĺ��ֵ�Ñc�ҵ��ǣ��҂�߀�]���ҵ�һ���@�ӵģ���顣�Ҳ�֪�����N���x������҂��@�N�ࡣϣ������#m220000000#�^�����!");
			cm.dispose();
		} else {
			cm.sendOk("�҂����@�e���l�@�����g�����ʿ������ֹ�κ����M���@���ط���");
		cm.dispose();
}
}
}