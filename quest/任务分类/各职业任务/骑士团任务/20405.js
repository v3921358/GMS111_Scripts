/*
	����:	��ħŮ�Ķ�Ѩ
	�؈D:	��ħŮ�Ķ�Ѩ
	����:	924010000
*/

var status = -1;

function start(mode, type, selection) {
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
		qm.sendNext("ǽ��������һ��ֽ���� �{���Դ�^��û�з��֣������������Ѩ�����ҵ���һ������ֵ��b�ã�����������#r��Ů��#kʹ���^������������{��Ĺ��ߣ��Ҳ��ܰ�;���ϣ��ұ�횼���׷����ȥ������������Tʿ׷���ҵ��㼣�����@�e��Ո�㌢�@һ���D��o#b#p1101002##k��");
	if (status == 1)
		qm.sendPrev("ϣ��#b#p1103000##k�ܰ�Ȼ�o����һ�������@��#b����#k�����}��ȥ�ģ�ՈŮ�ʱ��Ӵ�ң�\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 70000 exp");
	if (status == 2){
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.gainExp(70000);
		qm.dispose();
}
}