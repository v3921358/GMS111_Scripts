/*
	名字:	德朗博士的药
	地圖:	德朗的研究室
	描述:	926120200
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.sendOk("實驗還沒有完全結束。有許多實驗工具, 所以請避開這裡。");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("呼嗚... 沒有更進一步的研究進展。實際上實驗就如失敗沒有兩樣。知道了不管怎麼研究也無法從擁有原本記憶的人類肉體變成機械的事情... 但是... 代替作出更好的東西。");
	if (status == 1)
		qm.sendNextPrev("這不時別的... 就是為了女兒琪妮的藥。琪妮先天性身體脆弱。原本是這麼想的... 事實上這因為是妖精和人類的混血沒有辦法。 因此為了這孩子開發了藥。");
	if (status == 2)
		qm.sendAcceptDecline("呼呼.. 很得很滿足。 雖然把人類變成機械延長壽命的研究失敗了... 無法像妖精一樣永遠存活, 但是想應該可以找到這以上的幸福... 啊, 研究就要在這結尾。爆發物很危險, 所以把你從研究室趕走。");
	if (status == 3){
		qm.forceStartQuest();
		qm.warp(261020401);
		qm.dispose();
}
}