/*
	名字:	班·雷昂
	地圖:	时间神殿回廊2
	描述:	927000010
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
		cm.sendNextNoESC("所有的指揮官都來了嗎？ 很好，我們開始吧。");
	if (status == 1)
		cm.sendNextNoESC("在偉大的黑魔法師完成計畫之前，我們一刻也不能放鬆！#h0#，我聽說你發現了有趣的資訊。", 2159308);
	if (status == 2)
		cm.sendPlayerToNpc("是的…我發現一個抵抗組織秘密成立，正在建立一支反對我們的力量。");
	if (status == 3)
		cm.sendNextNoESC("抵抗？ 哈！ 世上沒有人能抗拒我們。 我甚至聽過一些烏合之眾叫他們#r英雄？#k不是很搞笑嗎？", 2159308);
	if (status == 4)
		cm.sendNextNoESC("看到他們驚慌失措地到處亂跑，我就會興奮。", 2159339);
	if (status == 5)
		cm.sendNextNoESC("戰鬥很容易，是因為有黑魔法師在。", 2159308);
	if (status == 6)
		cm.sendNextNoESC("我還沒盡興呢。", 2159339);
	if (status == 7)
		cm.sendPlayerToNpc("。。。。。。");
	if (status == 8)
		cm.sendNextNoESC("我還想找更多的事做！", 2159339);
	if (status == 9)
		cm.sendNextNoESC("這次會議就這樣吧。");
	if (status == 10)
		cm.sendNextNoESC("至於英雄們，我肯定#h0#有對付他們的計畫。 我相信這些可悲的“英雄”不會蹦達多久。", 2159308);
	if (status == 11)
		cm.sendPlayerToNpc("與大多數敵人不同的是，英雄們為他人而戰，而不是為自己而戰。。。 他們很特別，因為他們想保護世界。 這幫人很危險。 而且，我們只是抓住了女神。 黑魔法師才是打敗她的人。");
	if (status == 12)
		cm.sendNextNoESC("你可真謙虛！ 你可是黑魔法師的最信任的人呢。", 2159308);
	if (status == 13){
		cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg0/10");
		cm.sendNextNoESC("呵呵。");
		}
	if (status == 14)
		cm.sendNextNoESC("别介意。", 2159339);
	if (status == 15)
		cm.sendNextNoESC("我只是在讚美我們軍隊的真正英雄，最强者#h0#！ 哈哈哈。。。", 2159308);
	if (status == 16){
		cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg0/10");
		cm.sendNextNoESC("总结一下：女神被抓住了，我们获得了胜利。因此，#h0#贡献是最重要的。");
		}
	if (status == 17)
		cm.sendNextNoESC("如果英雄們都被解决了，剩下的抵抗組織怎麼辦才好呢？", 2159308);
	if (status == 18)
		cm.sendNextNoESC("找個時間把他們完全消滅吧。");
	if (status == 19)
		cm.sendNextNoESC("不過。。。 為什麼黑魔法師要我們摧毀一切呢？ 如果什麼都沒有了，就沒有什麼可以控制的了。", 2159339);
	if (status == 20){
		cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/18");
		cm.sendPlayerToNpc("什麼？ 黑魔法師什麼時候訂的要求？ 我從沒聽說過這個。");
		}
	if (status == 21)
		cm.sendNextNoESC("對，我差點忘了告訴你，黑魔法師要我們所有人，消滅一切。", 2159308);
	if (status == 22)
		cm.sendNextNoESC("例如，利弗爾剛剛被燒成灰燼。。");
	if (status == 23){
		cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/3");
		cm.sendPlayerToNpc("(利弗爾？ 離我家很近。。。)");
		}
	if (status == 24)
		cm.sendNextNoESC("我們做得很好。 消滅了所有抵抗勢力，只剩下幾個奴僕。", 2159308);
	if (status == 25)
		cm.sendPlayerToNpc("黑魔法師也去了利弗爾嗎？ 哪些地區被破壞了？");
	if (status == 26)
		cm.sendNextNoESC("到什麼程度啊嗯…當然要好好照祂指是的去做阿。 接取到破壞全部的名義話當然要清除的一乾二淨啊。 哈哈哈哈哈…你的反應怎這麼敏感？ 有什麼掛心的事情嗎？", 2159308);
	if (status == 27){
		cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg0/11");
		cm.sendPlayerToNpc("請原諒。 有件事我必須要去處理一下。#b（戴維安，母親…希望你們沒事…）");
		}
	if (status == 28)
		cm.sendNextNoESC("等等！ 還沒有開完會呢！你受到黑魔法師的寵愛並不代表你可以隨便行事。 我沒說要做我們的事情嗎？ 現在離開的話就是不服從命令！", 2159308);
	if (status == 29){
		cm.sendDirectionStatus(3, 2);
		cm.sendDirectionStatus(4, 0);
		cm.dispose();
		cm.warp(924020010,0);
}
}