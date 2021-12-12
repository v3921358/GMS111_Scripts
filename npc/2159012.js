/*
	名字:	格里梅尔
	地圖:	奇怪的实验室
	描述:	931000011
*/

var status = -1;

function action(mode, type, selection) {
	if (mode == 1) 
	status++;
	else 
	status--;
	if (status == 0)
		cm.sendNext("嗯…實驗似乎進行的相當順利，和黑色之翼合作果然是明智之舉…呵呵呵");
	if (status == 1)
		cm.sendNextPrev("果然有先見之明。", 2159008);
	if (status == 2)
		cm.sendNextPrev("黑色之翼无可挑剔的机器人，就快要完成了。现在实验要开始下一个阶段了。");
	if (status == 3)
		cm.sendNextPrev("下一個階段？", 2159008);
	if (status == 4)
		cm.sendNextPrev("呼呼…到现在还反应不过来吗？光看这个实验室就应该知道，我现在要制造什么东西。只是做机器人不够好玩，这比做机器人还有趣…");
	if (status == 5)
		cm.sendNextPrev("嗯？这实验室吗？你打算对这些实验者做什么事吗？", 2159008);
	if (status == 6)
		cm.sendNextPrev("我能瞭解在你眼中，看不到這實驗室偉大的地方。 至於你呢！ 只要把你的任務做好就行了。 看好在這裡的每一個實驗者，別讓他們逃跑就行了。");
	if (status == 7)
		cm.sendNextPrev("…嗯？ 有沒有聽到什麼奇怪的聲音？");
	if (status == 8)
		cm.sendNextPrev("嗯？ 奇怪的聲音？ 這樣一說，好像有什麼…？", 2159008);
	if (status == 9){
		cm.updateInfoQuest(23007, "vel00=2;vel01=1");
		cm.trembleEffect(0,500);
		cm.MovieClipIntroUI(true);
		cm.showWZEffect("Effect/Direction4.img/Resistance/TalkInLab");
		cm.dispose();
}
}