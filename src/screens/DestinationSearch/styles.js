import {StyleSheet} from 'react-native';
//AIzaSyAL4DFYw1YOXjAKBvpVazbsf8W4BajGyOs
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: `white`,
    height: '100%',
  },
  textInput: {
    padding: 10,
    backgroundColor: `#eee`,
    marginVertical: 5,
    marginLeft: 20,
  },
  placesAutocompleteContainer: {
    position: 'absolute',
    top: 0,
    left: 10,
    right: 10,
  },
  listView: {
    position: 'absolute',
    top: 110,
  },
  separator: {
    height: 1,
    backgroundColor: 'lightgray',
  },
  rowContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#a2a2a2',
    padding: 5,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationText: {
    marginLeft: 10,
  },
  circle: {
    width: 7,
    height: 7,
    backgroundColor: 'black',
    position: 'absolute',
    top: 20,
    left: 15,
    borderRadius: 50,
  },
  line: {
    width: 1,
    height: 49,
    backgroundColor: 'gray',
    position: 'absolute',
    top: 29,
    left: 18,
  },
  square: {
    width: 7,
    height: 7,
    backgroundColor: 'black',
    position: 'absolute',
    top: 80,
    left: 15,
  },
});

export default styles;
