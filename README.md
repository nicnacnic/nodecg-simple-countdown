# nodecg-simple-countdown
A very primitive countdown timer graphic for NodeCG.

## Installation
Execute `nodecg install nicnacnic/nodecg-simple-countdown` in a terminal window to install the bundle. Then run `nodecg defaultconfig nodecg-simple-countdown` to generate the config file.

## Configuration
The config file is located in `<path_to_nodecg/cfg/nodecg-simple-countdown.json` if you generated the config earlier. The default config looks like this.
```json
{
    "dateToCountdown": "1970-01-01T00:00:00+0000",
    "showDays": true,
    "showHours": true,
    "showMinutes": true
}
```
- `dateToCountdown`: An ISO 8601 formatted date string. Timezone must be UTC/GMT. You can create a ISO 8601 string using [this tool](https://timestampgenerator.com/).
- `show <days/hours/minutes>`: If one is set to true, it will force show that time even when it's zero. For example, if my time left is 30 minutes and I have `showHours` set to true, the timer will look like this: `00:30:00`.

## Usage
Once configured the timer will count down to your desired date. Just import the graphic into OBS and you're ready to go!
