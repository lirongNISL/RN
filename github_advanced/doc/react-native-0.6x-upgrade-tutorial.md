
# react-native 0.6x升级适配说明


号外号外，RN0.6x已经发布有一段时间了，react-navigation也在前不久进入了5x的时代。为了让大家少踩坑，现已将课程升级适配到RN0.6x以及react-navigation5x，另外，包括友盟分享和统计在内的所有插件也已升级是配到最新版。

为了帮助到大家顺利的学习使用新版本RN与react-navigation等相关库，我将整个的升级适配过程总结出以下文档供小伙伴们学习参考：

1. react-native 0.6x升级适配说明
2. [新版react-navigation升级适配说明](https://coding.imooc.com/lesson/304.html#mid=35306)
3. 友盟分享和统计最新版升级适配说明
4. 其他升级适配说明
5. FAQ

## 1.react-native 0.6x升级适配说明

本次为了将项目从0.59.9升级适配到0.6x，由于变更跨度比较大，顾采用了“创建一个新的RN项目，然后将代码移植到这个RN项目”的方式进行升级适配的，变更了那些代码，可查看提交记录：[c0d8d0b5](https://git.imooc.com/coding-304/GitHub_Advanced/commit/c0d8d0b571bfbc93a3abb2506489f5a822c36838)

### 1.1 0.6x版本重大特性
- 0.61.0
    - react版本采用16.9
    - 采用了`use_frameworks!`来更好的支持CocoaPods
    - 默认打开"Fast refresh"，可以通过devtool关闭
    - 其他[changelog](https://github.com/react-native-community/releases/blob/master/CHANGELOG.md)
- 0.60：0.60标志着RN进入了又一个新的里程碑，本次更新焦距在提效与与时俱进，比如：自动link、默认支持CocoaPods等
    - 支持了Android X，如果你用的RN是0.6x那么对应的三方插件请用适配了Android X的版本（可去插件的官库上看change log）
    - 移除了WebView和Geolocation，用到这些组件时需要单独引入对应的独立插件
        - [react-native-webview](https://github.com/react-native-community/react-native-webview)
        - [react-native-geolocation](https://github.com/react-native-community/react-native-geolocation)
    - iOS项目默认支持CocoaPods，所以打开ios目录下的项目时记得选择xxx.xcworkspace文件
    - 支持自动link，之前npm安装完还需要手动link的插件现在RN脚手架能够自动帮你link，释放了双手
    - 其他[changelog](https://github.com/react-native-community/releases/blob/master/CHANGELOG.md)

### 1.2 新版本带来的小技巧

#### 更简洁的运行指令

新版本RN脚本中引入了`android`和`ios`简化命令：

```json
"scripts": {
    "android": "react-native run-android",
    "ios": "react-native run-ios",
    ...
  },
```

现在通过`npm run android`、`npm run ios`就可以运行项目了。

#### 升级助手

RN社区提供了一个查看不同版本间升级变更的小助手：叫 [upgrade helper webtool](https://react-native-community.github.io/upgrade-helper/)，通过它你能快速查看你当前的RN版到你要升级到的RN版本间的所有变更和需要注意的点，比如：从0.59.9到0.61.0-rc.0的变更内容：[0.59.9 -> 0.61.0-rc.0](https://react-native-community.github.io/upgrade-helper/?from=0.59.9&to=0.61.0-rc.0)。

## 2. 新版react-navigation升级适配说明

- 传送门：[新版react-navigation升级适配说明](https://coding.imooc.com/lesson/304.html#mid=35306)
## 3.友盟分享和统计最新版升级适配说明

现已将项目中所用到的友盟分享、登录和统计相关的库和代码升级到了最新版，并且做了相应适配。

>大家在集成适配最新友盟分享、登录和统计时可参考这次提交：[6cc61494](https://git.imooc.com/coding-304/GitHub_Advanced/commit/6cc6149449e1bcd67adb9d4d8ec9b599a41b92a1)

### 重要变更

统计方法由track 变成了 onEvent使用时需要留意：

```js
//新版本友盟SDK 时间统计方法由 track -> onEvent
AnalyticsUtil.onEvent("SearchButtonClick");
```


## 4. 其他升级适配说明

### AsyncStorage 导入方式发生变化

react-native中的AsyncStorage在未来的版本迭代中将会被从react-native中移除，官方推荐使用
[react-native-community/async-storage](https://github.com/react-native-community/async-storage)来代替：

>安装方式：

```bash
yarn add @react-native-community/async-storage
```
然后：

```bash
cd ios/ && pod install
```

>使用方式：


```js
//将
import {AsyncStorage} from 'react-native';
//改成
import AsyncStorage from '@react-native-community/async-storage';
```

其他API不变。

## 5.FAQ

### Cannot get property 'supportLibVersion' on extra properties extension as it does not exist

#### 问题描述

升级到rn 0.61.0后报上述错误

#### 解决办法

在android/build.gradle中添加supportLibVersion：

```bash
buildscript {
    ext {
        buildToolsVersion = "28.0.3"
        minSdkVersion = 16
        compileSdkVersion = 28
        targetSdkVersion = 28
        supportLibVersion = "28.0.0"
    }
```



### Unsupported Modules Detected

#### 问题描述

```
Unsupported Modules Detected.
Compilation is not supported for following modules: react-native-vector-icons
```

#### 解决办法

删除android下的./idea 目录然后重新打开项目。


### Update is invalid - A JS bundle file named "null"


#### 问题描述

```bash
 "react-native": "0.60.5",
 "react-native-code-push": "^5.7.0",
```
Codepush jsbundle下载完成，跟新时报错，如下：

```bash
 com.microsoft.codepush.react.CodePushInvalidUpdateException: Update is invalid - A JS bundle file named "null" could not be found within the downloaded contents. Please check that you are releasing your CodePush updates using the exact same JS bundle file name that was shipped with your app's binary.
        at com.microsoft.codepush.react.CodePushUpdateManager.downloadPackage(CodePushUpdateManager.java:241)
        at com.microsoft.codepush.react.CodePushNativeModule$3.doInBackground(CodePushNativeModule.java:217)
        at com.microsoft.codepush.react.CodePushNativeModule$3.doInBackground(CodePushNativeModule.java:211)
        at android.os.AsyncTask$2.call(AsyncTask.java:333)
        at java.util.concurrent.FutureTask.run(FutureTask.java:266)
        at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1162)
        at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:636)
        at java.lang.Thread.run(Thread.java:764)
2019-09-03 14:52:57.952 10010-10045/com.github_rn I/ReactNativeJS
```

#### 解决办法

在MainApplication.java中添加：`CodePush.getJSBundleFile()`：

```java
public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {

        @Override
        protected String getJSBundleFile() {
        return CodePush.getJSBundleFile();
        }
        ...
```


### Error in getting binary resources modified time

#### 问题描述

```bash
 "react-native": "0.60.5",
 "react-native-code-push": "^5.7.0",
```
Codepush检测更新，logcat上述错误。

#### 解决办法

在android/app/build.gradle添加：

```bash
apply from: "../../node_modules/react-native-code-push/android/codepush.gradle"
```
参考：[https://github.com/Microsoft/react-native-code-push/issues/1046](https://github.com/Microsoft/react-native-code-push/issues/1046)



### Android不显示矢量图标

#### 问题描述

>版本信息：

```bash
 "react-native": "0.60.5",
 "react-native-vector-icons": "^6.6.0",
```
不报错但是不显示图标。


#### 解决办法

在android/app/build.gradle添加：

```bash
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```
参考：[https://github.com/oblador/react-native-vector-icons#option-with-gradle-recommended](https://github.com/oblador/react-native-vector-icons#option-with-gradle-recommended)


### Unrecognized font family 'Ionicons' or 'MaterialIcons'
#### 问题描述
启动iOS APP报错，无法加载字体文件：

>版本信息：

```bash
 "react-native": "0.60.5",
 "react-native-vector-icons": "^6.6.0",
```
无论是自动link还是手动link都包这个错误。

#### 解决办法

>第一步：

切换到ios目录执行install：

```bash
cd ios
pod install
```

>第二步：


将下面配置粘贴到info.plist：

```
<key>UIAppFonts</key>
<array>
  <string>AntDesign.ttf</string>
  <string>Entypo.ttf</string>
  <string>EvilIcons.ttf</string>
  <string>Feather.ttf</string>
  <string>FontAwesome.ttf</string>
  <string>FontAwesome5_Brands.ttf</string>
  <string>FontAwesome5_Regular.ttf</string>
  <string>FontAwesome5_Solid.ttf</string>
  <string>Foundation.ttf</string>
  <string>Ionicons.ttf</string>
  <string>MaterialIcons.ttf</string>
  <string>MaterialCommunityIcons.ttf</string>
  <string>SimpleLineIcons.ttf</string>
  <string>Octicons.ttf</string>
  <string>Zocial.ttf</string>
</array>
```
然后，重新运行项目，如果问题依旧，用Xcode打开`Github_RN.xcworkspace`，然后改为用Xcode运行项目。

参考：[https://github.com/oblador/react-native-vector-icons#option-manually](https://github.com/oblador/react-native-vector-icons#installation)

