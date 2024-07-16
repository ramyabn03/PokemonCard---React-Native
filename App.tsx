/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import PokemonCard from './components/PokemonCard';
import {data} from './data';

const groupedData = [
  {
    type: 'Grass',
    data: ['Bulbasaur', 'Ivysaur', 'Venusaur'],
  },
  {
    type: 'Fire',
    data: ['Charmander', 'Charmeleon', 'Charizard'],
  },
  {
    type: 'Water',
    data: ['Squirtle', 'Wartortle', 'Blastoise'],
  },
  {type: 'Electric', data: ['Pikachu', 'Raichu']},
];

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView> */}
      {/* FlatList will only render item that are currently in view thus increasing performance */}
      <View>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <PokemonCard
              {...item}
              // keyExtractor={(item, index) => item.name + index}
            />
          )}
          // ItemSeparatorComponent={() => <View style={{height: 50}} />}
          ListEmptyComponent={() => (
            <Text style={styles.emptyText}>No data found!</Text>
          )}
          ListHeaderComponent={() => (
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>Pockemon Card</Text>
            </View>
          )}
          ListFooterComponent={() => (
            <Text style={styles.footerText}>2024 Pokemon Card @Ramya B N</Text>
          )}
        />

        {/* Section List */}
        {/* <SectionList
          sections={groupedData}
          renderItem={({item}) => {
            return (
              <View>
                <Text>{item}</Text>
              </View>
            );
          }}
          renderSectionHeader={({section: {type}}) => {
            return <Text style={{backgroundColor: '#fff'}}>{type}</Text>;
          }}
        /> */}
      </View>

      {/* {data?.map(item => {
          return <PokemonCard key={item.name} {...item} />;
        })}
      </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F3',
  },
  emptyText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    textAlign: 'center',
  },
  headerContainer: {
    textAlign: 'center',
    marginTop: 10,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footerText: {
    textAlign: 'center',
    marginBottom: 10,
    color: 'gray',
  },
});

export default App;
