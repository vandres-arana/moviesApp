import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

type UserRaitingProps = {
  raiting: number;
  label: string;
}
export class UserRaiting extends Component<UserRaitingProps> {
  constructor(props: UserRaitingProps) {
    super(props);
  }
  render() {
    const {
      raiting,
      label,
    } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.topText}>{raiting}</Text>
        <Text style={styles.bottomText}>{label}</Text>
      </View>
    )

  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    elevation: 7,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    padding: 12,
  },
  topText: {
    fontSize: 30,
    color: "#222222"
  },
  bottomText: {
    fontSize: 15,
    color: "#999999"
  }
})