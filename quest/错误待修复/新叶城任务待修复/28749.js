/*
	����:	A Heroic Rescue
	�؈D:	���ƻ�����Ҷ��
	����:	600000000
*/

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	qm.dispose();
	return;
    }
    if (status == 0) {
	qm.sendYesNo("����ϸ�����룬�ǰ������˻�����������ǲ�����Ŀ���߰����ǵĴ��ڴ�����ȥ�����ǵþȳ����ʣ����ߴ����һ��Ϣ");
    } else if (status == 1) {
	qm.sendNextPrev("��ʱ�򷢻���������ˣ�ȥ����Щ�ϰ��վȳ����ɡ���Ȼ��Ҳ��֪������ôȥ�����ǣ�����ɲ��ܷ�������");
    } else if (status == 2) {
	qm.sendNextPrev("��˵�����ڻ��ظ����������ǵġ��⵹�����������ˣ���Щ����˵����Ŀ������Ұ������ֵľ����������Ҳ���Щ������ʵ�������������ȥ�����ܲ��ܰ��˴�����ͷŪ������");
	} else if (status == 3) {
	qm.sendNextPrev("I'm going to give you some Return to New Leaf City scrolls, but remember they're for the people you Rescue ONLY!");
	} else if (status == 4) {
	qm.forceStartQuest();
	qm.dispose();
    }
}
