/*
	名字:	阿俊
	地圖:	人机罕至的岩山
	描述:	931000000
*/

var status = -1;

function action(mode, type, selection) {
	status++;
	if (status == 0)
		cm.sendNext("我很高興你能來。 我覺得我們被監視了。。。 我們不該考慮回去嗎？");
	if (status == 1) {
		cm.sendPrev("你怎麼這麼膽小？ 我們一路走來！ 我們回去之前至少應該做點什麼。", 2159002);
		cm.dispose();
}
}