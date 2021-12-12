/*
	名字:	安琪莉可
	地圖:	結婚小鎮
	描述:	680000000
*/

function start() {
	if (cm.getPlayer().getMarriageId() <= 0) {
		cm.sendOk("你好像還沒結婚呢，婚都沒結就想要結婚戒指？你還是先找個心愛的人，結完婚再來吧~");
		cm.dispose();
	} else {
		cm.sendSimple("需要我幫忙嗎？\r\n#b#L0##b我想查看結婚禮物。#l#k");
}
}

function action(mode, type, selection) {
	cm.sendOk("您的結婚禮物好像剛剛已經被拿走了！");
	cm.dispose();
}
