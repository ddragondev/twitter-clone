import { Image, StyleSheet, FlatList } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

import tweets from '../../assets/data/tweets';
import Tweet from '../../components/Tweet';

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList data={tweets} renderItem={({ item }) => <Tweet tweet={item} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  }
});
