/*
	名字:	黑色之翼的新武器
	地圖:	陷阱！实验室监狱
	描述:	931000311
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
	if (qm.getQuestStatus(23050) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(23050) == 1) {
		qm.sendNext("你成功地破壞掉了黑色之翼的新武器！ 哈哈哈哈！ 你果然是個了不起的傢伙！ 我說過我的眼睛絕不會錯！ 沒有什麼比弓箭手的眼睛更亮的了！ 我就知道你一定可以做到！ 反抗者中有你這樣的人，我感到很自豪！");
		}
		}
	if (status == 1)
		qm.sendPrevS("要是可以的話，我很想向#p2154009#炫耀一下……不過要是他帶著手下來的話，逃走的時候可能會很麻煩。 我們趕緊回到地下本部去吧。 我馬上使用#v4032740:##t4032740#！ 好了，一……二……三！",3);
	if (status == 2){
		qm.forceCompleteQuest();
		qm.warp(310010000, 0);
		qm.dispose();
}
}