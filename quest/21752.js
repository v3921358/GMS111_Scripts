/*
	名字:	寻找钥匙
	地圖:	阿尔泰营地
	描述:	300000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0 || status == 4 || status == 1 && mode == 0) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendSimple("…你是狂狼勇士?原來你還活著 ?也是,原來阿!戰士的自傲, 矛的達人的你不可能對劍的魔法師這麼容易輸掉 !\r\n\r\n\r\n#L0##b(…其實我是輸的)#l\n#k");
	if (status == 1)
		qm.sendSimple("你怎麼來到這? 你也是來找新的村莊所來的嗎? 這樣簡單的事情要交給別人你要進行適合自己的事情才對阿。 你是來找？\r\n\r\n\r\n#L0##b#t4032325##l\n#k");
	if (status == 2)
		qm.sendNextPrev("啊…是#v4032325:##t4032325#嗎？稍等一下，放在哪裡來…");
	if (status == 3)
		qm.sendNextPrev("……真不好意思，戰神。 真不知道該怎麼跟你說才好。 明明剛才是放在這裡的……似乎是和其它鑰匙一起丟掉了。 全都是我的錯。 雖然你說過好幾次這個鑰匙很重要，但我還是粗心大意地給弄丟了！");
	if (status == 4)
		qm.sendAcceptDecline("不過不用擔心！ 鑰匙肯定在附近#b#o9001024##k們的身上！ 只要教訓教訓那些傢伙，把鑰匙找回來就行！#b#v4032326:##t4032326#是10把鑰匙中的一個#k，必須把10把鑰匙全都找回來確認才行！");
	if (status == 5){
		qm.forceStartQuest();
		qm.dispose();
}
}