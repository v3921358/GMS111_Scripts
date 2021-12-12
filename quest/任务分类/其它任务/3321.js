/*
	名字:	失踪的炼金术士——德朗博士
	地圖:	德朗的研究室
	描述:	926120200
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 4) {
		qm.sendOk("真是個無禮的人……");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("...雖然不知道來到這地方... 煉金術師的實驗室不是那麼開心的地方。對於不是煉金術師的人而言是個非常無聊的地方。也是... 她是身為妖精可能更無趣...  ");
	if (status == 1)
		qm.sendNextPrev("她是誰嗎? 她是... 我的妻子。 這麼說好像很久沒有看到她的臉了... 到了連女兒的臉都很模糊了... 她應該會生氣。當然和藹可親的她很快就會原諒我... ");
	if (status == 2)
		qm.sendNextPrev("...但是那就沒有辦法了。結束這研究之前有決心不會見她的臉。雖然非常想念... 結束研究之前... 只要結束這研究就可以永遠看到#b#p2111004##k的臉了。");
	if (status == 3)
		qm.sendNextPrev("這樣看來還沒有把#b項墜#k送給她。怕被她發現藏在#b相框後面#k... 因為無法見她, 所以就無法送她禮物了。何時能見她呢...");
	if (status == 4)
		qm.sendAcceptDecline("...廢話太長了。雖然抱歉,  要繼續研究... 請離開研究室。");
	if (status == 5){
		qm.forceStartQuest();
		qm.warp(261020401);
		qm.dispose();
}
}