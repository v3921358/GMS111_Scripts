/*
	名字:	麦吉
	地圖:	勇士部落
	描述:	102000000
*/

function start() {
	if (cm.getPlayer().getLevel() > 50) {
		cm.sendOk("你看起來很强的樣子，要不要去一趟 #b#m105100100##k 呢？");
	} else {
		cm.sendOk("等你超越我的時候在過來吧。");
		cm.dispose();
}
}

function action(mode, type, selection) {
	cm.warp(105100100,0);
	cm.dispose();
}
