/*
	名字:	秀林茨的修炼1
	地圖:	训练场
	描述:	120000105
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("還沒做好準備嗎？ 你不會是害怕了吧？");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendAcceptDecline("訓練要達到的不是練出中看不中用的一身肌肉，而是進行可在實戰中使用的實實在在的訓練。 做好接受第一次訓練的心理準備了嗎？");
	if (status == 1){
		qm.forceStartQuest();
		qm.dispose();
}
}