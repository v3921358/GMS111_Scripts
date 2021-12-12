/*
	名字:	调查废都：内拉
	地圖:	废弃都市
	描述:	103000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0 || status > 0) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendSimple("嗯？ 我好像見過你。 你到#m103000000#來有什麼事嗎？ 你想成為飛俠嗎？\r\n#b#L0#（詢問有沒有見到一個身上帶藥味的人。）");
	if (status == 1)
		qm.sendSimple("藥味？ 嗯，有人會在身上帶著藥草嗎？ 大家不都帶藥水嗎？ 你為什麼要找他？ 想買藥草嗎？\r\n#b#L0#（說明#p1061005#的事情。）#l");
	if (status == 2)
		qm.sendSimple("嗯……是偷藥草的人啊。 怪不得你會那樣問我……嗯？！ 等等等等等等！ 你認為小偷是#m103000000#的嗎？\r\n#b#L0##m103000000#不是小偷的村莊嗎？#l");
	if (status == 3)
		qm.sendSimple("我們不是小偷！ 我們是飛俠的村莊！ 啊，氣死了！ 你把我們#m103000000#的飛俠當成什麼了？ 當然，飛俠們確實有點卑鄙、有點無恥、有點下流、有點陰險！ 但是我們絕不會威脅到別人的生計，絕不會去偷東西！\r\n#b#L0#真的嗎？#l");
	if (status == 4)
		qm.sendSimple("那當然！ 我知道人們一直都對我們有誤會，但沒想到會聽到這種話……我是在#m103000000#出生並長大的人，决不能忍受這種侮辱！ 罪犯絕不可能是#m103000000#的人！ 絕對！\r\n#b#L0#是，是嗎？ 那小偷會在哪裡呢？#l");
	if (status == 5)
		qm.sendSimple("我也不知道！ 不過，他居然敢嫁禍給#m103000000#，這點我絕不能原諒，那個小偷！ 我要親自找出那個偷走#t4032464#的小偷！ 幫#m103000000#洗清冤屈，重拾名譽！ 你明白了嗎？ 我來親自找出那個小偷！\r\n#b#L0#需要一起調查嗎？#l");
	if (status == 6)
		qm.sendSimple("從現在開始，#b我會對那個小偷進行調查。 你乖乖在這裡等著#k。 調查結果出來之後，我會聯系你的。 我一定會把他抓住的！\r\n#b#L0#那我需要做什麼？！");
	if (status == 7)
		qm.sendAcceptDecline("恩？ 你問在此期間你做什麼？ 你就好好練級！ 目標就定在大概#b45級#k左右，怎麼樣？");
	if (status == 8){
		qm.forceStartQuest();
		qm.dispose();
}
}