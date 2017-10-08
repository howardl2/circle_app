import React from 'react';

import {
  Animated,
  Dimensions,
  Image,
  PanResponder,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native'

import { Icon } from 'react-native-elements'



const CIRCLE_RADIUS = 50;


export default class SideEffectCircleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pan: new Animated.ValueXY(),
      isClicked: 1,
      touchColor: '#FFFFFF',
      containerAttributes: this.props.container,
    };
  };


  componentWillMount() {
    const touchThreshold = 10;
    this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: (evt, gestureState) => {
        return gestureState.dx != 0 && gestureState.dy != 0;
      },
      onMoveShouldSetPanResponderCapture: (e, gestureState) => {
        const {dx,dy} = gestureState;
        return (Math.abs(dx) > touchThreshold) || (Math.abs(dy) > touchThreshold);
      },
      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setOffset({x:this.state.pan.x._value, y: this.state.pan.y._value});
        this.state.pan.setValue({x:0,y:0});
      },
      onPanResponderMove: Animated.event([
        null, {dx: this.state.pan.x, dy: this.state.pan.y},
      ]),
      onPanResponderRelease: (e, {vx,vy}) => {
        this.state.pan.flattenOffset();
      }
    });
  };


  _checkColorOnClick() {
    ++this.state.isClicked;
    if (this.state.isClicked % 2 == 0) {
      // Was clicked
      this.setState({touchColor: "#61C0BF"});
    } else {
      //wasnt clicked
      this.setState({touchColor: "#FFFFFF"});
    }

  };


  render() {
    let {pan} = this.state;
    let [translateX, translateY] = [pan.x,pan.y];
    let imageStyle = {transform: [{translateX}, {translateY}]};

    return (
      <View>
        <Animated.View style={[imageStyle, styles.touchableCircle]} {...this._panResponder.panHandlers}>

          <TouchableHighlight
            style={[styles.circle, {backgroundColor: this.state.touchColor}]}
            activeOpacity={0.6}
            underlayColor={"#61C0BF"}
            onPress={this._checkColorOnClick}>
            <View style={styles.circleContents}>
              <Image source={this.props.container.icon} style={styles.emojiStyle}/>
              <Text style={styles.circleText} adjustsFontSizeToFit={true} numberOfLines={2}>{this.props.container.name}</Text>

            </View>
          </TouchableHighlight>
        </Animated.View>
      </View>
    );
  };
}


// let _checkTouchColor = (isClicked) => {
//   if (isClicked % 2 == 0) {
//     // Was clicked
//     return "#61C0BF"
//   } else {
//     //wasnt clicked
//     return "#FFFFFF"
//   }
//   // return "#61C0BF";
// }

let Window = Dimensions.get('window');

const styles = StyleSheet.create({
  circleText: {
    marginTop   : 10,
    marginLeft  : 5,
    marginRight : 5,
    textAlign   : 'center',
    color       : '#000000',
    fontSize    : 16,
  },
  draggableContainer: {
    position    : 'absolute',
    top         : Window.height/2 - CIRCLE_RADIUS,
    left        : Window.width/2 - CIRCLE_RADIUS,
  },
  circle: {
    backgroundColor     : '#ffffff',
    width               : CIRCLE_RADIUS*2,
    height              : CIRCLE_RADIUS*2,
    borderRadius        : CIRCLE_RADIUS,
    borderColor         : '#61C0BF',
    borderWidth         : 3,
  },
  touchableCircle: {
    width               : CIRCLE_RADIUS*2,
    height              : CIRCLE_RADIUS*2,
    borderRadius        : CIRCLE_RADIUS,
    borderColor         : "#61C0BF",
    // borderWidth         : 3,
  },
  circleContents: {
    justifyContent: "center",
    alignItems: "center",
  },
  emojiStyle: {
    height: 30,
    width: 30,
    marginTop: 15,
  },

});
