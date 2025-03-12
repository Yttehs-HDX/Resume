type DeviceType = 'mobile' | 'tablet' | 'desktop';

export default function getDeviceType(): DeviceType {
  const userAgent = navigator.userAgent;
  if (userAgent.includes('Mobile')) {
    return 'mobile';
  } else if (userAgent.includes('Tablet')) {
    return 'tablet';
  } else {
    return 'desktop';
  }
};
