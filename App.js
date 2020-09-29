import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native';

import params from './src/params';
import Field from './src/components/Field';

const App = () => {
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.body}>
            <Text>
              Tamanho da grade: {params.getRowsAmount()}x
              {params.getColumnsAmount()}
            </Text>
          </View>
          <Field />
          <Field opened />
          <Field opened nearMines={1} />
          <Field opened nearMines={2} />
          <Field opened nearMines={3} />
          <Field opened nearMines={6} />
          <Field mined />
          <Field mined opened />
          <Field mined opened exploded />
          <Field flagged />
          <Field flagged opened />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fafafa',
  },
  body: {
    backgroundColor: '#fff',
  },
});

export default App;
