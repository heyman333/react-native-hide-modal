import AsyncStorage from "./node_modules/@react-native-community/async-storage";

const ALERT_STORAGE_KEY = "@ALERT_STORAGE_KEY";

export const pushIds = async (id, invisibleDuration = null) => {
  const stringIds = await AsyncStorage.getItem(ALERT_STORAGE_KEY);
  const stringArrs = JSON.parse(stringIds);

  if (stringArrs) {
    stringArrs.push({ id, invisibleDuration, savedTime: Date.now() });
    AsyncStorage.setItem(ALERT_STORAGE_KEY, JSON.stringify(stringArrs));
  } else {
    AsyncStorage.setItem(
      ALERT_STORAGE_KEY,
      JSON.stringify([{ id, invisibleDuration, savedTime: Date.now() }])
    );
  }
};

export const checkHiddenAlertExist = async id => {
  const stringIds = await AsyncStorage.getItem(ALERT_STORAGE_KEY);
  const stringArrs = JSON.parse(stringIds);

  if (stringArrs) {
    const foundAlert = stringArrs.find(alert => alert.id === id);

    if (foundAlert && foundAlert.invisibleDuration) {
      const isOver =
        Date.now() - foundAlert.savedTime > foundAlert.invisibleDuration;

      if (isOver) {
        const survived = stringArrs.filter(alert => alert.id !== foundAlert.id);
        AsyncStorage.setItem(ALERT_STORAGE_KEY, JSON.stringify(survived));
      }

      return !isOver;
    } else if (foundAlert) {
      return true;
    }
  }

  return false;
};
