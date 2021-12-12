/*
	名字:	说服莫哈莫德
	地圖:	阿里安特民宅
	描述:	260000200
*/

var status = -1;

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status >= 0 && mode == 0) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (qm.getQuestStatus(3953) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(3953) == 1) {
		qm.sendSimple("如果你想說大宇是怪物，我根本不想聽，你快走吧！…… 嗯？ 這不是鋰嗎？ 從顏色看，應該是最高級的鋰……狀態也很好……嗯？ 你要把它給我？ 呵呵……鋰的話，我就不会了.對了……這是為什麼呢？\r\n\r\n#L0##b你聽說前往沙漠的商團遭到了怪物的襲擊嗎？#l");
		}
		}
	if (status == 1)
		qm.sendSimple("商團？…… 護衛的人手好像太少了.火焰之路雖然沒有太危險的怪物，但也不能那樣粗心大意……在沙漠裏必須時刻保持警惕才行. \r\n\r\n#L0##b這都是因為王妃對村子周圍的治安疏於管理. #l");
	if (status == 2)
		qm.sendSimple("沒錯！ 都是因為王妃！ 自從那個女人來了之後……原本很聰明的阿得拉8世全變了，阿裡安特也逐漸變得乾旱！ 綠洲變成了荒漠！ 這都是因為那個女人！\r\n\r\n#L0##b王妃施行暴政，不知道沙漠的守護神會怎麼做，必須儘快組織軍隊，使國家擺脫王妃的壓迫！#l");
	if (status == 3)
		qm.sendSimple("……這個嘛.要是大宇能稍微出一點力就好了.守護神也不聞不問的……\r\n\r\n#L0##b所以……大宇已經成了怪物，不是嗎？ 大宇只是個怪物，所以這是沒辦法的事. #l");
	if (status == 4)
		qm.sendSimple("……你說什麼？ 大宇變成了怪物……他可是阿裡安特的守護神啊……不過也是……阿裡安特已經和過去不同了……\r\n\r\n#L0##b所以說嘛.阿烈達王妃在吸收沙漠的精氣，大宇也失去了原來的靈性，變成了怪物……#l");
	if (status == 5)
		qm.sendPrev("對……也許你的話是對的.阿裡安特變成了這樣……這也許是因為大宇變了的緣故.也許大宇真的已經變成了怪物……就像年輕人說的那樣，到了除掉大宇的時候了……\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 15000 exp");
	if (status == 6){
		qm.forceCompleteQuest();
		qm.gainItem(4011008, -1);
		qm.warp(260000201, 0);
		qm.gainExp(15000);
		qm.dispose();
}
}