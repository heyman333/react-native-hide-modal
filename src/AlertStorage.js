import AsyncStorage from "@react-native-community/async-storage";

const ALERT_STORAGE_KEY = "@ALERT_STORAGE_KEY";

export const pushIds = async (id, invisibleDuration = null) => {
  const stringIds = await AsyncStorage.getItem(ALERT_STORAGE_KEY);
  const stringArrs = JSON.parse(stringIds);

  if (stringArrs) {
    stringArrs.push({ id, invisibleDuration });
    AsyncStorage.setItem(ALERT_STORAGE_KEY, JSON.stringify(stringArrs));
  } else {
    AsyncStorage.setItem(
      ALERT_STORAGE_KEY,
      JSON.stringify([{ id, invisibleDuration }])
    );
  }
};

export const checkHiddenAlertExist = async id => {
  const stringIds = await AsyncStorage.getItem(ALERT_STORAGE_KEY);
  const stringArrs = JSON.parse(stringIds);

  return stringArrs && stringArrs.find(alert => alert.id === id);
};
