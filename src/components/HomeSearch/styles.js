import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: `#e7e7e7`,
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputText: {
    fontSize: 20,
    fontWeight: '500',
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    width: 100,
    backgroundColor: `#fff`,
    borderRadius: 50,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: `#dbdbdb`,
    width: '80%',
  },
  iconContainer: {
    backgroundColor: `gray`,
    borderRadius: 25,
    padding: 10,
  },
  rowText: {
    marginLeft: 10,
    fontWeight: '500',
    fontSize: 16,
  },
});

export default styles;
