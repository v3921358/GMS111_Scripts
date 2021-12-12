/*
	名字:	变了的森林
	地圖:	变形的提鲁之林
	描述:	271000200
*/

var status = -1;

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
	if (status == 0) {
	if (qm.getQuestStatus(31119) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(31119) == 1) {
		qm.sendNext("感觉好像有点脸熟？你认识我？你看见我以前一个人缩着坐在射手村北部小山？(……真的认识吗？)呵呵，我以前有那么胆小吗？笨人只会说笨话。");
		}
		}
	if (status == 1)
		qm.sendPrev("啊！你就是阿勒斯说的那个人啊。好像也没什么本事的样子。下次你再来找我，我说不定有事要让你做。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 50000 exp");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.gainExp(50000);
		qm.dispose();
}
}