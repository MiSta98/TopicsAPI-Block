# TopicsAPI-Block
Browser extension for blocking Topics API

## How to install
1. Download `topicscblock.zip` from https://github.com/MiSta98/TopicsAPI-Block/releases/tag/topicsapi
2. Extract extension.
3. Go to `chrome://extensions/` and enable developer mode.
4. Go to `Load unpacked extension` and select the folder `ext`

## How to test that the extension works

After installation, go to a site, open the console with F12 and call the method `document.browsingTopics();`. This should now return a Promise Rejection


## Develop
```bash
git clone https://github.com/MiSta98/TopicsAPI-Block.git
cd flocblock
npm install # to install browserify.
npm run build # to build the extension. 
npm run pkg # to create a .zip
```

## Credits
Icons credit: https://www.freepik.com from https://www.flaticon.com
Based on: https://github.com/ShivanKaul/flocblock
