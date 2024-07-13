gdjs.MenuCode = {};
gdjs.MenuCode.GDBackgroundObjects1= [];
gdjs.MenuCode.GDBackgroundObjects2= [];
gdjs.MenuCode.GDBackgroundObjects3= [];
gdjs.MenuCode.GDTitleObjects1= [];
gdjs.MenuCode.GDTitleObjects2= [];
gdjs.MenuCode.GDTitleObjects3= [];
gdjs.MenuCode.GDStartButtonv2Objects1= [];
gdjs.MenuCode.GDStartButtonv2Objects2= [];
gdjs.MenuCode.GDStartButtonv2Objects3= [];
gdjs.MenuCode.GDStartTextObjects1= [];
gdjs.MenuCode.GDStartTextObjects2= [];
gdjs.MenuCode.GDStartTextObjects3= [];
gdjs.MenuCode.GDCreditButtonv2Objects1= [];
gdjs.MenuCode.GDCreditButtonv2Objects2= [];
gdjs.MenuCode.GDCreditButtonv2Objects3= [];
gdjs.MenuCode.GDCreditTextObjects1= [];
gdjs.MenuCode.GDCreditTextObjects2= [];
gdjs.MenuCode.GDCreditTextObjects3= [];
gdjs.MenuCode.GDTitle2Objects1= [];
gdjs.MenuCode.GDTitle2Objects2= [];
gdjs.MenuCode.GDTitle2Objects3= [];
gdjs.MenuCode.GDStartButtonObjects1= [];
gdjs.MenuCode.GDStartButtonObjects2= [];
gdjs.MenuCode.GDStartButtonObjects3= [];
gdjs.MenuCode.GDExitButtonObjects1= [];
gdjs.MenuCode.GDExitButtonObjects2= [];
gdjs.MenuCode.GDExitButtonObjects3= [];
gdjs.MenuCode.GDMusicButtonObjects1= [];
gdjs.MenuCode.GDMusicButtonObjects2= [];
gdjs.MenuCode.GDMusicButtonObjects3= [];
gdjs.MenuCode.GDNewTextObjects1= [];
gdjs.MenuCode.GDNewTextObjects2= [];
gdjs.MenuCode.GDNewTextObjects3= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};
gdjs.MenuCode.conditionTrue_1 = {val:false};
gdjs.MenuCode.condition0IsTrue_1 = {val:false};
gdjs.MenuCode.condition1IsTrue_1 = {val:false};
gdjs.MenuCode.condition2IsTrue_1 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.MenuCode.GDStartButtonObjects1});
gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10596660);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "button.wav", false, 100, 1);
}}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.MenuCode.GDStartButtonObjects1});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDExitButtonObjects1Objects = Hashtable.newFrom({"ExitButton": gdjs.MenuCode.GDExitButtonObjects1});
gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10599996);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}{gdjs.evtTools.sound.playSound(runtimeScene, "button.wav", false, 100, 1);
}}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDExitButtonObjects1Objects = Hashtable.newFrom({"ExitButton": gdjs.MenuCode.GDExitButtonObjects1});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDMusicButtonObjects1Objects = Hashtable.newFrom({"MusicButton": gdjs.MenuCode.GDMusicButtonObjects1});
gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MenuCode.GDMusicButtonObjects1, gdjs.MenuCode.GDMusicButtonObjects2);


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMusicButtonObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMusicButtonObjects2[i].isCurrentAnimationName("on") ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDMusicButtonObjects2[k] = gdjs.MenuCode.GDMusicButtonObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMusicButtonObjects2.length = k;}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDMusicButtonObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDMusicButtonObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMusicButtonObjects2[i].setAnimationName("off");
}
}{gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 1);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}}

}


{

/* Reuse gdjs.MenuCode.GDMusicButtonObjects1 */

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMusicButtonObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMusicButtonObjects1[i].isCurrentAnimationName("off") ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDMusicButtonObjects1[k] = gdjs.MenuCode.GDMusicButtonObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDMusicButtonObjects1.length = k;}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDMusicButtonObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDMusicButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMusicButtonObjects1[i].setAnimationName("on");
}
}{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}}

}


};gdjs.MenuCode.eventsList3 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10603220);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).add(1);
}
{ //Subevents
gdjs.MenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.MenuCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.MenuCode.GDStartButtonObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStartButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDStartButtonObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDStartButtonObjects1[i].getBehavior("Tween").addObjectScaleTween("Hover", 1.25, 1.25, "bouncePast", 100, false, true);
}
}
{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.MenuCode.GDStartButtonObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStartButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDStartButtonObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDStartButtonObjects1[i].getBehavior("Tween").addObjectScaleTween("Press", 1.1, 1.1, "easeOutQuad", 50, false, true);
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "button.wav", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExitButton"), gdjs.MenuCode.GDExitButtonObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDExitButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDExitButtonObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDExitButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDExitButtonObjects1[i].getBehavior("Tween").addObjectScaleTween("Hover", 1.25, 1.25, "bouncePast", 100, false, true);
}
}
{ //Subevents
gdjs.MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExitButton"), gdjs.MenuCode.GDExitButtonObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDExitButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDExitButtonObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDExitButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDExitButtonObjects1[i].getBehavior("Tween").addObjectScaleTween("Press", 1.1, 1.1, "easeOutQuad", 50, false, true);
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
}

}


{



}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "2021-08-16_-_8_Bit_Adventure_-_www.FesliyanStudios.com.mp3", 1, true, 20, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MusicButton"), gdjs.MenuCode.GDMusicButtonObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDMusicButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDBackgroundObjects1.length = 0;
gdjs.MenuCode.GDBackgroundObjects2.length = 0;
gdjs.MenuCode.GDBackgroundObjects3.length = 0;
gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDTitleObjects3.length = 0;
gdjs.MenuCode.GDStartButtonv2Objects1.length = 0;
gdjs.MenuCode.GDStartButtonv2Objects2.length = 0;
gdjs.MenuCode.GDStartButtonv2Objects3.length = 0;
gdjs.MenuCode.GDStartTextObjects1.length = 0;
gdjs.MenuCode.GDStartTextObjects2.length = 0;
gdjs.MenuCode.GDStartTextObjects3.length = 0;
gdjs.MenuCode.GDCreditButtonv2Objects1.length = 0;
gdjs.MenuCode.GDCreditButtonv2Objects2.length = 0;
gdjs.MenuCode.GDCreditButtonv2Objects3.length = 0;
gdjs.MenuCode.GDCreditTextObjects1.length = 0;
gdjs.MenuCode.GDCreditTextObjects2.length = 0;
gdjs.MenuCode.GDCreditTextObjects3.length = 0;
gdjs.MenuCode.GDTitle2Objects1.length = 0;
gdjs.MenuCode.GDTitle2Objects2.length = 0;
gdjs.MenuCode.GDTitle2Objects3.length = 0;
gdjs.MenuCode.GDStartButtonObjects1.length = 0;
gdjs.MenuCode.GDStartButtonObjects2.length = 0;
gdjs.MenuCode.GDStartButtonObjects3.length = 0;
gdjs.MenuCode.GDExitButtonObjects1.length = 0;
gdjs.MenuCode.GDExitButtonObjects2.length = 0;
gdjs.MenuCode.GDExitButtonObjects3.length = 0;
gdjs.MenuCode.GDMusicButtonObjects1.length = 0;
gdjs.MenuCode.GDMusicButtonObjects2.length = 0;
gdjs.MenuCode.GDMusicButtonObjects3.length = 0;
gdjs.MenuCode.GDNewTextObjects1.length = 0;
gdjs.MenuCode.GDNewTextObjects2.length = 0;
gdjs.MenuCode.GDNewTextObjects3.length = 0;

gdjs.MenuCode.eventsList4(runtimeScene);
return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
