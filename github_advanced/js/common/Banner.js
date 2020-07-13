import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, Text, View, Dimensions} from 'react-native';
// 轮播图片地址
// var banner = [
//     "http://a.hiphotos.baidu.com/image/pic/item/ac4bd11373f08202e2518d6d45fbfbedaa641ba4.jpg",
//     "http://e.hiphotos.baidu.com/image/pic/item/0df3d7ca7bcb0a467e97177b6563f6246b60af3f.jpg",
//     "http://g.hiphotos.baidu.com/image/pic/item/b8014a90f603738d87dff378bd1bb051f919ecd7.jpg",
//     "http://b.hiphotos.baidu.com/image/pic/item/58ee3d6d55fbb2fb12adba45414a20a44723dce7.jpg",
// ];
//屏幕信息
{/* <Image source={require('./img/icon.jpg')}/> */}
{/* <Image source={{uri: 'http://..................*.jpg'}}/> */}
// 轮播图本地图片引入
var banner = [require('../res/img/bn1.jpg'),require('../res/img/bn2.jpg'),require('../res/img/bn3.jpg'),require('../res/img/bn4.jpg')];

//获取屏幕的宽度和高度
var {width} = Dimensions.get('window');
var index=1;
class Banner extends Component {

    static defaultProps = {
        //定时器的间隔时间
        duration: 5000

    };

    constructor(props) {
        super(props);
        this.state = {
            //当前显示的下标
            position: 0,
        }
    }

    //绘制完成，开启定时器
    componentDidMount() {
        this.startTimer();
    }

    startTimer() {
        //1.拿到ScrollView
        var scrollView = this.refs.scrollView;
        this.timer = setInterval(() => {
            //设置圆点的下标
            var curr = this.state.position;
            if (curr + 1 > banner.length - 1) {
                curr = 0;
            } else {
                curr++;
            }
            //更新状态机，更新当前下标
            this.setState({
                position: curr,
            });
            //滚动ScrollView，1.求出水平方向的平移量  offsetX = curr * width
            scrollView.scrollTo({x: curr * width, y: 0, animated: true})
        }, this.props.duration);

    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    ref="scrollView"
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}//自动分页
                    //滚动动画结束时调用此函数。一帧滚动结束
                    onMomentumScrollEnd={(v) => this.onAnimationEnd(v)}
                    //手指按下的时候，停止计时器
                    onTouchStart={() => clearInterval(this.timer)}>

                    {/*显示轮播图的图片内容*/}
                    {this.getImages()}
                </ScrollView>
                {/*生成底部的圆点指示器*/}
                <View style={styles.indicator}>
                    {this.getIndicators()}
                </View>
            </View>

        );
    }

    //获取轮播图显示的图片
    getImages() {
        var images = [];
        // var i=0;
        // if(index==5){
        //     index=1;
        //     i=0;
        // }
        for (var i=0;i < banner.length; i++) {
            index++;
            images.push(
                <View key={i}>
                    {<Image source={banner[i]} style={styles.image}/>}
                </View>
            );
            
        }
        
        return images;
    }

    //获取左下角的4个圆点
    getIndicators() {
        var circles = [];
        for (var i = 0; i < banner.length; i++) {
            circles.push(
                <Text key={i} style={i === this.state.position ? styles.selected : styles.unselected}>•</Text>//• html转义字符
            );
        }
        return circles;
    }

    //重写这个函数，系统已有的函数
    onAnimationEnd(v) {
        //1.求出水平方向的偏移量
        var offsetX = v.nativeEvent.contentOffset.x;
        //2.根据偏移量求出当前的页数  width为图片的宽度（banner的宽度 ）
        var position = Math.round(offsetX / width);
        //3.更新状态机, 刷新圆点
        this.setState({
            position: position
        });
        this.startTimer();
    }

    //结束计时器
    componentWillUnmount(nextProps, nextState) {
        clearInterval(this.timer);
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
    },
    //底部指示器的样式
    indicator: {
        width: width,
        height: 50,
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        flexDirection: 'row',
        justifyContent:"center",
        alignItems: 'center',
    },
    image: {
        width: width,
        height: 160,
        borderRadius:8
    },
    selected: {
        marginLeft: 10,
        fontSize: 40,
        color: '#5CB85C'
    },
    unselected: {
        marginLeft: 10,
        fontSize: 40,
        color: 'white'
    }
});

module.exports = Banner;