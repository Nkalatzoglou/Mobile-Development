import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Cell, Section, TableView } from 'react-native-tableview-simple';

const { width } = Dimensions.get('window');

const HomescreenCell = (props) => (
  <Cell
    {...props}
    backgroundColor="transparent"
    highlightColor="#f0f0f0"
    onPress={props.action}
    cellContentView={
      <View style={styles.restaurantCellContent}>
        <Image source={props.imgUri} style={styles.headerImage} />
        <View style={styles.etaContainer}>
          <Text style={styles.etaText}>{`${props.eta}\n mins`}</Text>
        </View>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.subtitle}>{props.tagline}</Text>
      </View>
    }
  />
);

function Restaurants({navigation}) {
  return (
    <ScrollView style={styles.scroll}>
      <TableView style={styles.table}>
        <Section name="" hideSeparator="true" separatorTintColor="#ccc">
          <HomescreenCell
              title="French Montana"
              tagline="Desert, Ice cream, £££"
              eta="10-30"
              imgUri={require('./images/french-restaurant.jpg')}
              action={() => navigation.navigate('Menu', {
                items: [
                  {
                    title: "Gelato",
                    contents: [{ title: "Vanilla", quantity: 0 }, 
                               { title: "Chocolate", quantity: 10 },
                               { title: "Strawberry", quantity: 20 }
                              ]
                  },
                  {
                    title: "Coffee",
                    contents: [{ title: "Flat white", quantity: 23 }, 
                               { title: "Latte", quantity: 12 },
                               { title: "Caffe Americano", quantity: 56 }
                              ]
                  },
                  {
                    title: "Tea",
                    contents: [
                      { title: "Green Tea", quantity: 32 },
                      { title: "Black Tea", quantity: 0 },
                      { title: "Chamomile", quantity: 12 },
                      { title: "Earl Grey", quantity: 0 },
                      { title: "Matcha", quantity: 0 }
                    ]
                  },
                  {
                    title: "Smoothies",
                    contents: [
                      { title: "Mango Smoothie", quantity: 0 },
                      { title: "Berry Blast", quantity: 0 },
                      { title: "Green Detox", quantity: 42 },
                      { title: "Tropical Paradise", quantity: 21 },
                      { title: "Peanut Butter Banana", quantity: 32 }
                    ]
                  },
                ]
              })}
            />
            <HomescreenCell
              title="Sushi Palace"
              tagline="Sushi, Japanese, ££££"
              eta="20-40"
              imgUri={require('./images/lantern.jpg')}
              action={() => navigation.navigate('Menu', {
                items: [
                  {
                    title: "Sushi Rolls",
                    contents: [
                      { title: "California Roll", quantity: 0 },
                      { title: "Spicy Tuna Roll", quantity: 5 },
                      { title: "Dragon Roll", quantity: 32 }
                    ]
                  },
                  {
                    title: "Sashimi",
                    contents: [
                      { title: "Salmon", quantity: 54 },
                      { title: "Tuna", quantity: 0 },
                      { title: "Yellowtail", quantity: 12 }
                    ]
                  }
                ]
              })}
            />
            <HomescreenCell
              title="Pasta Paradise"
              tagline="Italian, Pasta, ££"
              eta="15-35"
              imgUri={require('./images/outdoor-dining.jpg')}
              action={() => navigation.navigate('Menu', {
                items: [
                  {
                    title: "Pasta",
                    contents: [
                      { title: "Spaghetti Carbonara" },
                      { title: "Fettuccine Alfredo" },
                      { title: "Penne Arrabbiata" }
                    ]
                  },
                  {
                    title: "Salads",
                    contents: [
                      { title: "Caesar Salad" },
                      { title: "Caprese Salad" },
                      { title: "Greek Salad" }
                    ]
                  }
                ]
              })}
            />
        </Section>
      </TableView>
    </ScrollView>
  )
}

function Menu({ route }) {

  const { items } = route.params;

  return (
    <ScrollView style={styles.scroll}>
      <TableView style={styles.table}>
        {items.map((item, index) => (
          <Section key={index} header={item.title}>
            {item.contents.map((content, idx) => (
              <Cell  
                key={idx} 
                title={content.title}
                isDisabled={content.quantity === 0} 
              />
            ))}
          </Section>
        ))}
      </TableView>
    </ScrollView>
  )
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
          <Stack.Screen name="Restaurants" component={Restaurants} />
          <Stack.Screen name="Menu" component={Menu} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scroll: {
    height: '100%',
  },
  restaurantCell: {
    height: 290,
  },
  restaurantCellContent: {
    flex: 1,
    paddingBottom: 25
  },
  headerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  etaContainer: {
    position: 'absolute',
    bottom: 50,
    right: 10,
    width: width / 4,
    backgroundColor: 'white',
    padding: 8,
    borderRadius: width,
  },
  etaText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});
