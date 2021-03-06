import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

/**
 * @name Taptic Engine
 * @description
 * An Ionic plugin to use Taptic Engine API on iPhone 7, 7 Plus or newer.
 *
 * @usage
 * ```typescript
 * import { TapticEngine } from '@ionic-native/taptic-engine';
 *
 * ...
 *
 * constructor(private taptic: TapticEngine) { }
 *
 * ...
 *
 * this.taptic.selection();
 *
 * this.taptic.notification();
 *
 * this.taptic.impact();
 *
 * ```
 */
@Plugin({
  pluginName: 'TapticEngine',
  plugin: 'cordova-plugin-taptic-engine',
  pluginRef: 'TapticEngine',
  repo: 'https://github.com/EddyVerbruggen/cordova-plugin-taptic-engine',
  platforms: ['iOS']
})
@Injectable()
export class TapticEngine extends IonicNativePlugin {
  /**
   * Use selection feedback generators to indicate a change in selection.
   * @returns {Promise<any>} Returns a promise that resolves on success and rejects on error
   */
  @Cordova()
  selection(): Promise<any> {
    return;
  }

  /**
   * Use this to indicate success/failure/warning to the user.
   * @param options {Object} should be of the type { type: 'success' } (or 'warning'/'error')
   * @param {'success' | 'warning' | 'error'} options.type
   * @returns {Promise<any>} Returns a promise that resolves on success and rejects on error
   */
  @Cordova()
  notification(options: {
    type: 'success' | 'warning' | 'error';
  }): Promise<any> {
    return;
  }

  /**
   * Use this to indicate success/failure/warning to the user.
   * @param options {Object} should be of the type { style: 'light' } (or 'medium'/'heavy')
   * @param {'light' | 'medium' | 'heavy'} options.type
   * @returns {Promise<any>} Returns a promise that resolves on success and rejects on error
   */
  @Cordova()
  impact(options: { style: 'light' | 'medium' | 'heavy' }): Promise<any> {
    return;
  }

  /**
   * Tell the taptic engine that a gesture for a selection change is starting.
   * @returns {Promise<any>}
   */
  @Cordova()
  gestureSelectionStart(): Promise<any> {
    return;
  }

  /**
   * Tell the taptic engine that a selection changed during a gesture.
   * @returns {Promise<any>}
   */
  @Cordova()
  gestureSelectionChanged(): Promise<any> {
    return;
  }

  /**
   * Tell the taptic engine we are done with a gesture. This needs to be called lest resources are not properly recycled.
   * @returns {Promise<any>}
   */
  @Cordova()
  gestureSelectionEnd(): Promise<any> {
    return;
  }
}
