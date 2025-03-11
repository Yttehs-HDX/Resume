import { Dimensions } from "react-native";

type DeviceType = 'mobile' | 'tablet' | 'desktop';

export default function getDeviceType(): DeviceType {
  const deviceWidth = Dimensions.get('window').width;
  if (deviceWidth < 600) {
    return 'mobile';
  } else if (deviceWidth < 1024) {
    return 'tablet';
  } else {
    return 'desktop';
  }
};
