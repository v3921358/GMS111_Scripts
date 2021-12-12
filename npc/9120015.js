/*
	名字:	铃木
	地圖:	昭和村
	描述:	801000000
*/

var status = -1;

function action(mode, type, selection) {
	if (mode == 0) {
		cm.dispose();
	} else { 
	if (mode == 1)
	status++;
	if (status == 0)
		cm.sendSimple ("你想從我這裡得到些什麼？\r #L0##b收集一些關於藏身處的資訊.#l\r\n#L1#帶我去藏身處#l\r\n#L2#沒有什麼#l#k");
	if (status == 1) {
		if (selection == 0)
			cm.sendOk("社團藏身處，哪裡都是些找麻煩的暴徒，要進入的前提是你必須要有那個能耐，否則只有死路一條。在那個區域有不少BOSS級人物，想要見到最終目標，你得先要先從女老闆身上拿到#v4000138:##b#t4000138##k，作為引信。");
		if (selection == 1)
			cm.sendOk("你確定你具備這樣得能力？傻瓜有很多種，沒見過像你這樣不怕死的，如果你執意要去，我也會跟著凑個熱鬧，假如你能消滅大老闆，從他哪裡拿到#v4000141:##b#t4000141##k，我就做你的泊車小弟！");
		if (selection == 2)
			cm.sendOk("我是個大忙人，就讓我一個人呆著吧！");
		if (selection != 1) {
			cm.dispose();
			}
			}
	if (status == 2) {
		cm.warp(801040000, 0);
		cm.dispose();
}
}
}