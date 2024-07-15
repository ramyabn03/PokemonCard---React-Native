import {Image, Platform, StyleSheet, Text, View} from 'react-native';

const PokemonCard = ({name, image, type, hp, moves, weaknesses}) => {
  const getTypeDetails = type => {
    switch (type.toLowerCase()) {
      case 'electric':
        return {borderColor: '#FFD700', emoji: '⚡️'};
      case 'water':
        return {borderColor: '#6493EA', emoji: '💧'};
      case 'fire':
        return {borderColor: '#FF5733', emoji: '🔥'};
      case 'grass':
        return {borderColor: '#66CC66', emoji: '🌿'};
      default:
        return {borderColor: '#A0A0A0', emoji: '❓'};
    }
  };

  const {borderColor, emoji} = getTypeDetails(type);

  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>💛{hp}</Text>
      </View>
      <Image
        source={image}
        style={styles.image}
        accessibilityLabel={`${name} pokemon`}
        resizeMode="contain"
      />
      <View style={styles.typeContainer}>
        <View style={[styles.badge, {borderColor}]}>
          <Text style={styles.emoji}>{emoji}</Text>
          <Text style={styles.typeText}>{type}</Text>
        </View>
      </View>
      <View style={styles.movesContainer}>
        <Text style={styles.movesText}>
          <Text style={styles.boldText}>Moves:</Text> {moves.join(', ')}
        </Text>
      </View>
      <View style={styles.weaknessesContainer}>
        <Text style={styles.weaknessesText}>
          <Text style={styles.boldText}>Weaknesses:</Text>{' '}
          {weaknesses.join(', ')}
        </Text>
      </View>
    </View>
  );
};
export default PokemonCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    margin: 20,
    ...Platform.select({
      ios: {
        shadowOffset: {width: 2, height: 2},
        shadowColor: '#333',
        shadowOpacity: 0.5,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  hp: {
    fontSize: 24,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  typeContainer: {
    marginBottom: 40,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderRadius: 10,
    paddingHorizontal: 18,
    paddingVertical: 6,
  },
  typeText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  emoji: {
    fontSize: 30,
    marginRight: 12,
  },
  movesContainer: {
    marginBottom: 18,
  },
  movesText: {
    fontSize: 22,
  },
  boldText: {
    fontWeight: 'bold',
  },
  weaknessesText: {
    fontSize: 22,
  },
});
