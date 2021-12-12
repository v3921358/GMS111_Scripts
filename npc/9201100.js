/*
	名字:	Taggrin
	地圖:	Dead Man's Gorge
	描述:	610010004
*/ 

function start() {
	if (cm.getQuestStatus(8224) == 2) {
		cm.sendOk("如果您需要我們的幫助，請嘗試與我們的一名成員交談。");
	} else {
		cm.sendOk("你好，陌生人。我們是著名的雇傭兵烏鴉爪氏族，我是他們的首領。");
		}
	cm.dispose();
}
