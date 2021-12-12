/*
	名字:	桌子
	地圖:	失踪炼金术士的家
	描述:	261000001
*/

function start() {
	if (cm.isQuestActive(3322) && !cm.haveItem(4031697, 1)) {
		cm.gainItem(4031697, 1);
		cm.sendOk("你已经找到了#v4031697:#");
	} else if (cm.isQuestActive(3311)) {
		cm.sendOk("德朗博士的日記。 許多公式和浮誇的科學文字都可以在頁面中找到，但值得注意的是，在上一篇文章（3周前）中，他總結了關於改進新胡羅教藍圖的研究，從而為向“社會”展示它做了最後的準備。。。 在這之後沒有話。。。");
	} else {
		cm.sendOk("满是灰尘的桌子。");
		}
	cm.dispose();
}
