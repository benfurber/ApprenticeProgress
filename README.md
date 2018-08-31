# ApprenticeProgress
A platform to track Ben's progress through his thoughtbot apprenticeship.

# Goals for tracking progress
These are a combination of [Makers](https://makers.tech/) learning criteria for their Academy course and a summary of thoughtbot's expectations for Developers.

These are the most important statements a thoughtbot apprenticeship should be able to state. Evidencing them all by the end of the apprenticeship should be the _main_ evidence required for my promotion to Developer.

*I'm team thoughtbot*
* I contribute to thoughtbot being a good place to work
* I iterate over my existing knowledge effectively
* I’m a great pair programmer
* I help others become better
* I’m passionate about software/products
* I set my own direction

*I'm a developer*
* I can write high quality code for React Native (OOP, easy to understand, easy to change)
* I can write high quality test suites for React Native
* I can build apps in React Native
* I understand how React Native works
* I understand how the web works
* I understand how databases work

*I'm a consultant*
* I communicate clearly with clients
* I can clearly explain to others where/when thoughtbot can add value
* I understand how technical/design decisions will impact clients
* My teams build software clients’ love

# Releasing

1. Verify you are on the `master` branch.
1. Verify `.env.production` has the correct configuration values. Get these from
   another team member if you don't have them.
1. Bump the version with `bundle exec fastlane bump_version type:some_type`,
   where `some_type` is `patch`, `minor` or `major`.
1. Release a beta and test
  - iOS: Run `bundle exec fastlane ios beta` which will ship a new version to
      TestFlight. If you need to submit this to external testers, you'll need to do
      this through the iTunes Connect website.
  - Android: Run `bundle exec fastlane android build`. This will generate an APK
      locally at `android/app/build/outputs/apk/app-release.apk`. You'll need to
      create a new beta release on the Google Play Console and upload the APK
      there to release. You can test the release build in the simulator if you'd
      like using `react-native run-android --variant=release`.
1. Release to the App Store and Play Store. You promote the beta builds to
   production through the iTunes Connect and Play Console websites.
