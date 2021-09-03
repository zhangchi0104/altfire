import { Tray, nativeImage } from 'electron';
import { getAssetPath } from './util';

const buildTray = () => {
  const iconPath =
    process.platform === 'win32' ? ['icon.ico'] : ['icons', '16x16.png'];
  const trayIcon = nativeImage.createFromPath(getAssetPath(...iconPath));
  const tray = new Tray(trayIcon);
  tray.setToolTip('AltFire');
  return tray;
};

export default buildTray;
