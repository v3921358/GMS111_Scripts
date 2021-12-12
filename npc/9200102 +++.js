/*
	名字:	Dr. Bosch
	地圖:	玩具城整形医院
	描述:	220000003
*/

var status = -1;
var beauty = 0;
var hair_Colo_new;

function action(mode, type, selection) {
    if (mode == 0) {
	cm.dispose();
	return;
    } else {
	status++;
    }

    if (status == 0) {
	cm.sendSimple("我是博世医生，我是Ludibrium整形外科店的一位镜片美容专家。我相信你的眼睛是你身体中最重要的特征，有了 #i" + 5152012 + "# #i" + 5152015 + "#, ，我可以为你开一种合适的化妆镜片\r\n#L0#Cosmetic Lenses: #i5152012##t5152012##l\r\n#L1#Cosmetic Lenses: #i5152015##t5152015##l");
    } else if (status == 1) {
	hair_Colo_new = [];

	var teye = cm.getPlayerStat("FACE") % 100;

	if (cm.getPlayerStat("GENDER") == 0) {
	    teye += 20000;
	} else {
	    teye += 21000;
	}
	hair_Colo_new[0] = teye + 100;
	hair_Colo_new[1] = teye + 200;
	hair_Colo_new[2] = teye + 300;
	hair_Colo_new[3] = teye + 400;
	hair_Colo_new[4] = teye + 500;
	hair_Colo_new[5] = teye + 600;
	hair_Colo_new[6] = teye + 700;

	if (selection == 0) {
	    beauty = 1;
	    cm.sendYesNo("如果你使用#i" + 5152012 + "#，你的原貌可能會變成一個隨機的新形象，你还打算使用么？");
	} else if (selection == 1) {
	    beauty = 2;
	    cm.askAvatar("With our new computer program, you can see yourself after the treatment in advance. What kind of lens would you like to wear? Please choose the style of your liking.", hair_Colo_new);
	}
    } else if (status == 2){
	if (beauty == 1){
	    if (cm.setRandomAvatar(5152012, hair_Colo_new) == 1) {
		cm.sendOk("这次改变会让你有不同的体验！！");
	    } else {
		cm.sendOk("…看起來你沒有這個優惠券。很抱歉這麼說，我就不能幫你做整形手術了。。。");
	    }
	} else {
	    if (cm.setAvatar(5152015, hair_Colo_new[selection]) == 1) {
		cm.sendOk("Enjoy your new and improved cosmetic lenses!");
	    } else {
		cm.sendOk("…看起來你沒有這個優惠券。很抱歉這麼說，我就不能幫你做整形手術了。。。");
	    }
	}
	cm.safeDispose();
    }
}