/*
	名字:	马斯特玛
	地圖:	时间神殿回廊1
	描述:	927000000
*/

var status = -1;

function action(mode, type, selection) {
	if (mode == 1) {
	status++;
	} else {
	if (status == 0) {
	cm.dispose();
	}
	status--;
	}
	if (status == 0)
		cm.sendNextNoESC("指揮官！ 你在哪裡？");
	if (status == 1)
		cm.sendNextNoESC("現在的情况很令人生氣，明明你才是抓住時間女神的人。 那個傢伙只是設法蒙蔽了她，但他認為所有的功勞都應該是他的！！！");
	if (status == 2){
		cm.sendDirectionStatus(3, 2);
		cm.sendNextNoESC("你沒事吧？ 你看起來有點不一樣。。。 每當我說起這些事情的時候你都會訓我，但是現在。。。 嘿，你看起來不太好。 發生什麼事了嗎？ 你受傷了嗎？");
		}
	if (status == 3)
		cm.sendPlayerToNpc("……告訴我，馬斯特瑪，你為誰效忠？ 是我，還是黑魔法師？");
	if (status == 4)
		cm.sendNextNoESC("什麼？");
	if (status == 5)
		cm.sendPlayerToNpc("回答我！");
	if (status == 6)
		cm.sendNextNoESC("雖然我對黑魔法師很忠誠。 但是我們一起出生入死，你還救過我。 我聽你的。");
	if (status == 7)
		cm.sendPlayerToNpc("我想請你幫個忙。。。 把這封信交給英雄們。");
	if (status == 8)
		cm.sendNextNoESC("什麼？！ 為什麼？ 你在想什麼？ 你想讓事情更糟嗎？ 一旦有人發現你想和英雄們交流，你指揮官的位子就沒了！");
	if (status == 9)
		cm.sendPlayerToNpc("我已經當夠了指揮官。");
	if (status == 10)
		cm.sendNextNoESC("什麼？ 你在背叛黑魔法師嗎？ 你為什麼這麼做？");
	if (status == 11)
		cm.sendPlayerToNpc("沒時間解釋了。。。 請照我說的做。。。");
	if (status == 12)
		cm.sendNextNoESC("我會的，我只是擔心。 你的家人呢？");
	if (status == 13)
		cm.sendPlayerToNpc("別再提我的家人了！");
	if (status == 14)
		cm.sendNextNoESC("什麼？ 他們已經出事了嗎？");
	if (status == 15)
		cm.sendPlayerToNpc("。。。。。。");
	if (status == 16)
		cm.sendNextNoESC("我懂了。。。 你一直都是沉默寡言，但有時沉默本身就說明了問題。 好吧。 我會把這封信給英雄們。");
	if (status == 17)
		cm.sendPlayerToNpc("謝謝你。 很抱歉向你提出這樣的要求。");
	if (status == 18)
		cm.sendNextNoESC("別難過。。。 畢竟，我還欠你一條命呢。 好吧，我要走了。 祝你好運。");
	if (status == 19){
		cm.removeNpc(2159307);
		cm.sendDirectionStatus(1, 720);
		cm.sendPlayerToNpc("你的忠誠對我意義重大。。。 謝謝你。");
		}
	if (status == 20){
		cm.sendDirectionStatus(3, 2);
		cm.sendDirectionStatus(4, 0);
		cm.dispose();
		cm.warp(927000080,0);
}
}