**DEPRECATED**

Please Refer to updated App locate at https://github.com/ThreatConnect-Inc/TCX_-_ExampleContextApp.

# TCS Sample App

This ThreatConnect&trade; Spaces Sample App provides examples of a few features of the [angular-spaces](https://github.com/ThreatConnect-Inc/angular2-spaces) and [angular2-threatconnect](https://github.com/ThreatConnect-Inc/angular2-threatconnect) modules as well as a basic layout for a context aware App.

## Install App
git clone https://github.com/ThreatConnect-Inc/TCS_-_SampleApp.git

## Build App
+ npm install
+ grunt build:dist

## Deploy
In the ThreatConnect UI install the App zip created in the Build App section.

## Sidebar
The Sidebar is an optional feature that provides a simple layout for a vertical menu.  Currently the area provided for a Spaces app is limited so the sidebar provides a good option for a navigational menu for an App.

## Tabs
The Tabs section is an optional feature that uses [PrimeNG TabView](http://www.primefaces.org/primeng/#/tabview) to group relevant data.

## Parameters
The Parameters tab provides a list of all parameters passed to a Spaces App.  Not all parameters will be required in all Apps.

## Data Store
The Data Store tab provides a example of persistent storage in a Spaces App.  The Data Store feature provided for Apps in the ThreatConnect Platform can be used to store settings, cached data or any other use for persistent data.

## Resource Data
The Resource Data tab provides an example of interacting with the ThreatConnect API.  Depending on the context the Group, Indicator or Victim data will be displayed.

## Owners
The Owners tab will only be displayed when the working with Indicators.  This tab provides and example of an optional tab dependent on the Resource Type.  This tab will show all owner where the indicator is found.

## App Settings
The App has to inputs defined in the install.json.  These are just examples of how a user would provide input to an App, such as API Credentials to a remote service.

# Release Notes

## 1.0.0
+ Initial Release
