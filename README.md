same issue on android device with react-native 0.32.

finally, i found method to solve this problem.

in file "react-native\packager\react-packager\src\node-haste\FileWatcher\index.js"
 you can increase "MAX_WAIT_TIME" variable. such: 360000.

and change function "_createWatcher"

to
_createWatcher(rootConfig) {
    const watcher = new WatcherClass(rootConfig.dir, {
      glob: rootConfig.globs,
      dot: false,
    });

    return new Promise((resolve, reject) => {
      const rejectTimeout = setTimeout(
        () => reject(new Error([
            'Watcher took too long to load',
            'Try running `watchman version` from your terminal',
            'https://facebook.github.io/watchman/docs/troubleshooting.html',
          ].join('\n'))),
        MAX_WAIT_TIME
      );

      watcher.once('ready', () => {
        clearTimeout(rejectTimeout);
        resolve(watcher);
      });
    });
  }


that's all and work for me. 



## Generating the release APK ##
config in android/app/build.gradle and android/gradle.properties
$ cd android && ./gradlew assembleRelease
The generated APK can be found under android/app/build/outputs/apk/app-release.apk, and is ready to be distributed
