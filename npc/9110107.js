/*
	名字:	Palakeen
	地圖:	Zipangu - Mushroom Shrine
	描述:	800040000
*/

function start() {
	if (cm.getMapId() == 800000000) {
		cm.sendYesNo("我們是帕蘭肯的承載者~！可以带你去櫻花的忍者城堡~！你一眨眼就到了！哦，這不會花你錢的。今天對我來說是個好日子，所以我就讓你免費上車吧！現在，這不是讓你感覺很好嗎？不管怎樣，我們走吧！");
	} else {
		cm.sendYesNo("哦！什麼？這是怎麼一回事，你想回去嗎？");
}
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("什麼！ 你不打算坐這個！ 那你還招呼我們幹什麼！");
		}
	if (mode == 1) {
		if (cm.getMapId() == 800000000) {
			cm.warp(800040000);
		} else {
			cm.warp(800000000);
			}
			}
		cm.dispose();
}