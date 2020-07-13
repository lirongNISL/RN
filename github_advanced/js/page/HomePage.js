import React, {Component} from 'react';
import {connect} from 'react-redux';
import CustomTheme from '../page/CustomTheme';
import actions from '../action';
import {StyleSheet,Text, View, FlatList, RefreshControl, TouchableOpacity,ScrollView,ActivityIndicator,
    Dimensions,Animated,DeviceEventEmitter,TouchableWithoutFeedback} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import AnalyticsUtil from '../util/AnalyticsUtil';
import Banner from '../common/Banner';
import { Card, ListItem, Button, SearchBar,Icon } from 'react-native-elements';
import GlobalStyles from '../res/styles/GlobalStyles';
import {MORE_MENU} from '../common/MORE_MENU';
import ViewUtil from '../util/ViewUtil';
import NavigationUtil from '../navigator/NavigationUtil';
import NavigationBar from '../common/NavigationBar';
type Props = {};
// const Window_width = Dimensions.get('window').width;
// const Window_height = Dimensions.get('window').height;
class HomePage extends Component<Props> {
    constructor(props) {
        super(props);
    }
    state = {
        search: '',
    };
    componentWillMount () {};
    componentDidMount () {};
    componentWillUpdate (nextProps, nextState) {};
    componentDidUpdate (prevProps, prevState) {};
    shouldComponentUpdate (nextProps, nextState) {
      return true
    };
    onClick(menu) {
        const {theme} = this.props;
        let RouteName, params = {theme};
        switch (menu) {          
            case MORE_MENU.Hot_Project:
                RouteName = 'HotProjectPage';
                break;
            case MORE_MENU.New_Project:
                RouteName = 'NewProjectPage';
                break;
        }
        if (RouteName) {
            NavigationUtil.goPage(params, RouteName);
        }
    };

    getItem(menu) {
        const {theme} = this.props;
        return ViewUtil.getMenuItem(() => this.onClick(menu), menu, theme.themeColor);
    };

    updateSearch = (search) => {
        this.setState({ search });
    };
    renderCustomThemeView() {
        const {customThemeViewVisible, onShowCustomThemeView} = this.props;
        return (<CustomTheme
            visible={customThemeViewVisible}
            {...this.props}
            onClose={() => onShowCustomThemeView(false)}
        />);
    }
    // 首页搜索功能
    // 广告banner
    // 热门项目
    // 项目专辑
    // 培训专辑
    // 活动专辑
    // 行业专辑
    // 机构专辑
    // 境外项目
    // 新闻动态
    // 推荐单位
    
    // 项目搜索
    // 路演项目
    // 展示项目
    // 最新项目


    render() {
       const {theme} = this.props;
       const { search } = this.state;
       return(
        <ScrollView> 
            <View style={styles.container}>
                {/* 搜索栏 */}
                <View style={styles.searchs}>
                    <SearchBar style={styles.searchs} placeholder="项目 | 投资人" onChangeText={this.updateSearch} value={search}/>
                </View>  
                {/* 轮播图 */}
                <Banner/>
                {/* <Banner dataSource = {this.state.dataSource} width={Window_width} height={200} /> */}
                <View>              
                    <View style={GlobalStyles.line}/>            
                    {this.getItem(MORE_MENU.Hot_Project)}
                    <View style={{flexDirection:"row"}}> 
                    <ScrollView ref="scrollView" horizontal={true} showsHorizontalScrollIndicator={false} style={{marginBottom:10}}>
                        <Card title='Hello World' image={require('../res/img/bn1.jpg')} style={styles.Cards}>
                            <Text style={{marginBottom: 10}}>
                                The idea with React Native Elements is more about component structure than actual design.
                            </Text>
                            <Button buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}} title='View Now'/>
                        </Card>
                        <Card title='Hello World' image={require('../res/img/bn2.jpg')} style={styles.Cards}>
                            <Text style={{marginBottom: 10}}>
                                The idea with React Native Elements is more about component structure than actual design.
                            </Text>
                        </Card> 
                    </ScrollView>                  
                    </View>            
                    <View style={GlobalStyles.line}/>            
                    {this.getItem(MORE_MENU.Project_Album)}
                    <View style={GlobalStyles.line}/>            
                    {this.getItem(MORE_MENU.New_Project)}
                    <View style={GlobalStyles.line}/>            
                    {this.getItem(MORE_MENU.Train_Album)}
                    <View style={GlobalStyles.line}/>            
                    {this.getItem(MORE_MENU.Activity_Album)}
                    <View style={GlobalStyles.line}/>            
                    {this.getItem(MORE_MENU.Industry_Album)}
                    <View style={GlobalStyles.line}/>            
                    {this.getItem(MORE_MENU.Inistuition_Album)}
                    <View style={GlobalStyles.line}/>            
                    {this.getItem(MORE_MENU.Abroad_Project)}
                    <View style={GlobalStyles.line}/>            
                    {this.getItem(MORE_MENU.News_Information)}
                    <View style={GlobalStyles.line}/>            
                    {this.getItem(MORE_MENU.Recommended_Unit)}               
                </View>
            </View>
        </ScrollView> 
       )
    }
}

const mapStateToProps = state => ({
    nav: state.nav,
    customThemeViewVisible: state.theme.customThemeViewVisible,
    theme: state.theme.theme,
});

const mapDispatchToProps = dispatch => ({
    onShowCustomThemeView: (show) => dispatch(actions.onShowCustomThemeView(show)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    welcome:{
        fontSize:20,
        textAlign:'center',
        margin:10,
    },
    searchs:{
        backgroundColor:'white',
        opacity:0.8,
        color:'white',
        height: 60,
    },
    item: {
        backgroundColor: 'white',
        padding: 10,
        height: 90,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    groupTitle: {
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 5,
        fontSize: 12,
        color: 'gray',
    },
    Cards:{
        width:100,
    }
})