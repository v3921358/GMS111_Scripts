/*
	名字:	黑色之翼的新武器
	地圖:	陷阱！实验室监狱
	描述:	931000310
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
	if (qm.getQuestStatus(23049) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(23049) == 1) {
		qm.sendNext("你成功地破壞掉了黑色之翼的新武器！ 哈哈……真不敢相信！ 連我都沒有做到的事情，你竟然做到了！ 你真是個了不起的傢伙！ 有你這樣的反抗者，我為你感到自豪！");
		}
		}
	if (status == 1)
		qm.sendPrevS("啊！ 不，現在不是說這些的時候……發現新武器被破壞之後，#p2154009#很快就會帶著手下到這裡來。 我們必須在這之前逃出去！ 我要馬上使用地下本部#v4032740:##t4032740#了！ 好了，一……二……三！",3);
	if (status == 2){
		qm.forceCompleteQuest();
		qm.warp(310010000, 0);
		qm.dispose();
}
}