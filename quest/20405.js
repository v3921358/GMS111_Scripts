/*
	名字:	黑魔女的洞穴
	地圖:	黑魔女的洞穴
	描述:	924010000
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
		qm.sendNext("墙壁上贴着一张纸条： 詛咒的源頭我没有发现，但是在这个洞穴里我找到了一个個奇怪的裝置，我想它曾被#r黑女巫#k使用過，可能是用於詛咒的工具，我不能半途而废，我必須继续追查下去。如果有其他騎士追尋我的足迹來到了這裡，請你將這一切轉告給#b#p1101002##k。");
	if (status == 1)
		qm.sendPrev("希望#b#p1103000##k能安然無恙，我一定會將這個#b線索#k帶回聖地去的，請女皇保佑大家！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 70000 exp");
	if (status == 2){
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.gainExp(70000);
		qm.dispose();
}
}