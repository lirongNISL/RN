import {createAppContainer, createSwitchNavigator} from 'react-navigation';
//@ https://github.com/react-navigation/react-navigation/releases/tag/v4.0.0
import {createStackNavigator} from 'react-navigation-stack';
// 引入页面组件
import TabPage from '../page/TabPage';
import WelcomePage from '../page/WelcomePage';
import WebViewPage from '../page/WebViewPage';
import HomePage from '../page/HomePage';
import DetailPage from '../page/DetailPage';
import SortKeyPage from '../page/SortKeyPage';
import SearchPage from '../page/SearchPage';
import CustomKeyPage from '../page/CustomKeyPage';
import AboutPage from '../page/about/AboutPage';
import AboutMePage from '../page/about/AboutMePage';
import NewProjectPage from '../page/NewProjectPage';
import HotProjectPage from '../page/HotProjectPage';
// Project_Album
// Train_Album
// Activity_Album
// Industry_Album
// Inistuition_Album
// Abroad_Project
// News_Information
// Recommended_Unit

// import CodePushPage from '../page/CodePushPage';

export const rootCom = 'Init';//设置根路由，对应RootNavigator中第一个初始化的路由名

const InitNavigator = createStackNavigator({
    WelcomePage: {
        screen: WelcomePage,
        navigationOptions: {
            headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        },
    },
});
const MainNavigator = createStackNavigator({
    TabPage:{
        screen: TabPage,
        navigationOptions: {
            headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        },
    },
    HomePage: {
        screen: HomePage,
        navigationOptions: {
            headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        },
    },
    DetailPage: {
        screen: DetailPage,
        navigationOptions: {
            headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        },
    },
    WebViewPage: {
        screen: WebViewPage,
        navigationOptions: {
            headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        },
    },
    AboutPage: {
        screen: AboutPage,
        navigationOptions: {
            headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        },
    },
    AboutMePage: {
        screen: AboutMePage,
        navigationOptions: {
            headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        },
    },
    CustomKeyPage: {
        screen: CustomKeyPage,
        navigationOptions: {
            headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        },
    },
    SortKeyPage: {
        screen: SortKeyPage,
        navigationOptions: {
            headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        },
    },
    SearchPage: {
        screen: SearchPage,
        navigationOptions: {
            headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        },
    },
    HotProjectPage: {
        screen: HotProjectPage,
        navigationOptions: {
            headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        },
    },
    NewProjectPage: {
        screen: NewProjectPage,
        navigationOptions: {
            headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        },
    },
    // Project_AlbumPage: {
    //     screen: NewProjectPage,
    //     navigationOptions: {
    //         headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
    //     },
    // },
    // TrainAlbumPage: {
    //     screen: TrainAlbumPage,
    //     navigationOptions: {
    //         headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
    //     },
    // },
    // ActivityAlbumPage: {
    //     screen: ActivityAlbumPage,
    //     navigationOptions: {
    //         headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
    //     },
    // },
    // IndustryAlbumPage: {
    //     screen: IndustryAlbumPage,
    //     navigationOptions: {
    //         headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
    //     },
    // },
    // InistuitionAlbumPage: {
    //     screen: InistuitionAlbumPage,
    //     navigationOptions: {
    //         headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
    //     },
    // },
    // AbroadProjectPage: {
    //     screen: AbroadProjectPage,
    //     navigationOptions: {
    //         headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
    //     },
    // },
    // NewsInformationPage: {
    //     screen: NewsInformationPage,
    //     navigationOptions: {
    //         headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
    //     },
    // },
    // RecommendedUnitPage: {
    //     screen: RecommendedUnitPage,
    //     navigationOptions: {
    //         headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
    //     },
    // },
    // CodePushPage: {
    //     screen: CodePushPage,
    //     navigationOptions: {
    //         headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
    //     },
    // },
}, {
    defaultNavigationOptions: {
        headerShown: false,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
    },
});
export default createAppContainer(createSwitchNavigator({
    Init: InitNavigator,
    Main: MainNavigator,
}, {
    navigationOptions: {
        headerShown: false,
    },
}));
