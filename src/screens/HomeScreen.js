import React from 'react';
import {
  Animated,
  Dimensions,
  Image,
  PanResponder,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

import { Icon } from 'react-native-elements'
import SideEffectCircleComponent from '../components/SideEffectCircle'


export class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sideEffectContainer: [
        {
          id: 'vomiting',
          name: 'Vomiting',
          icon: require('../images/Frowning_Face_with_Open_Mouth_Emoji.png'),
        },
        {
          id: 'fatigue',
          name: 'Fatigue',
          icon: require('../images/Tired_Face_Emoji.png'),
        },
        {
          id: 'constipation',
          name: 'Constipation',
          icon: require('../images/Emoji_Face_without_Mouth.png'),
        },
        {
          id: 'headache',
          name: 'Headache',
          icon: require('../images/Face_With_Head-Bandage_Emoji.png'),
        },
        {
          id: 'nausea',
          name: 'Nausea',
          icon: require('../images/Dizzy_Face_Emoji.png'),
        },
        // {
        //   id: 'weight_gain',
        //   name: 'Weight Gain',
        //   icon: require('../images/Poop_Emoji.png'),
        // },
        // {
        //   id: 'cough',
        //   name: 'Cough',
        //   icon: require('../images/Sick_Emoji.png'),
        // },
        // {
        //   id: 'swelling',
        //   name: 'Swelling',
        //   icon: require('../images/White_Santa_Claus_Emoji.png'),
        // },
        // {
        //   id: 'trouble_breathing',
        //   name: 'Trouble Breathing',
        //   icon: require('../images/Very_sad_emoji_icon_png.png'),
        // }
      ],
    };
  };


  render() {
    const effects = this.state.sideEffectContainer.map(curr => (<SideEffectCircleComponent key={curr.id} container={curr}/>));
    return (
      <View style={styles.mainContainer}>

        <View>
          {effects}
        </View>





      </View>

    );
  };

}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainContainer: {
    flex    : 1
  },

});
