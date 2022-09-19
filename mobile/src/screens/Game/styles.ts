import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    marginTop: 28
  },
  logo: {
    width: 72,
    height: 40
  },
  right: {
    width: 20,
    height: 20
  },
  coverContainer: {
    width: '100%',
    paddingHorizontal: 32,
    marginTop: 32
  },
  cover: {
    width: '100%',
    height: 180,
    borderRadius: 8
  },
  listContainer: {
    width: '100%'
  },
  listContent: {
    paddingLeft: 32,
    paddingRight: 34,
    alignItems: 'flex-start',
  }
});