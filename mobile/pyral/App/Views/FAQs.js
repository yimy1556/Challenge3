import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Constants from 'expo-constants';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';


const QUESTION1 = 'To only display Pyral owned retail stores, select the "Pyral Stores" from the check boxes below the map; otherwise, the results list will display both Pyral owned retail stores, as well as all retailers that carry Pyral products.'
const QUESTION2 = 'Pyral has a constitutional obligation to collect sales use tax in those states we are licensed to do business. Sales tax is calculated using the address where the product is being shipped. If for any reason you believe you are exempt from paying sales tax, please contact us and we will assist you with processing your order. Please have all the proper exemption tax information available. Credit cards that do not participate in the verification process will not be accepted.'
const QUESTION3 = 'Our hours of operation are:Monday through Friday (6 AM – 3:30 PM PST) Email: your.pyral@gmail.com Call: (855) 909-8267 Text: (714) 598-1819 Live chat: when available, the “Live Chat” button is at the top and right side of any page.'
const QUESTION4 = ' Benefits of registering on Pyral.com'
const QUESTION5 = 'Pyral Family is an experiential loyalty program, our way of inviting you to enjoy Off The Wall experiences designed for our biggest fans. As a member of our family, you’ll get insider information, exclusive Customs designs and members-only experiences. Earn points from shopping and sharing, and redeem those points for rewards. Still curious? Check out the Pyral Family FAQ page!'

const CONTENT = [
  {
    title: 'How do I find a Pyral retail store near me?',
    content: QUESTION1,
  },
  {
    title: 'What are your policies on sales tax and tax exempt orders?',
    content: QUESTION2,
  },
  {
    title: 'What is the Customer Service phone number and hours of operation?',
    content: QUESTION3,
  },
  {
    title: 'What are the benefits of registering on Pyral.com?',
    content: QUESTION4,
  },
  {
    title: 'What is Pyral Family?',
    content: QUESTION5,
  }
]


export default class FAQs extends Component {
  state = {
    activeSections: [],
    collapsed: true,
    multipleSelect: false,
  };


  setSections = sections => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    )
  }

  renderContent(section, _, isActive) {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    )
  }

  render() {
    const { multipleSelect, activeSections } = this.state;
return (
      <>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingTop: 30}}>
          <Text style={styles.title}>FREQUENTLY ASKED QUESTIONS</Text>
          <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            expandMultiple={multipleSelect}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            duration={400}
            onChange={this.setSections}
            style={{padding:30}}
          />
          <View>
       <Image source={{uri: 'https://farm9.static.flickr.com/8375/29297929562_1f7cbcd902_z.jpg'}}
       style={{width: '100%', height: 400, marginTop:25}} />
     </View>
        </ScrollView>
      </View>
       
     </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: Constants.statusBarHeight,
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
    fontWeight: '300',
    padding: 15,
    backgroundColor: 'black',
    marginBottom: 20,
  },
  header: {
    padding: 15,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },

  
});