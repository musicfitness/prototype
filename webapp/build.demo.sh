#!/bin/bash
echo "-- removing ../dist"
rm -rf ../dist/
echo "-- building to ../dist"
meteor build --directory ../dist --server https://172.20.10.184
cd ../dist/android/project/build/outputs/apk/
echo "-- signing"
cp android-armv7-release-unsigned.apk release-signed.apk
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 release-signed.apk guzz
echo "-- zipaligning"
~/Library/Android/sdk/build-tools/23.0.2/zipalign 4 release-signed.apk sportimusic.apk
echo "-- copying sportimusic.apk to .deployment/mobile"
cp sportimusic.apk ../../../../../../webapp/.deployment/mobile/sportimusic.demo.apk
