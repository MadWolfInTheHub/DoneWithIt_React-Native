import { Constants } from "expo-constants"


const settings = {
  dev: {
    apiUrl: 'https://don-t--need--it--sell--it.herokuapp.com/api'
  },
  staging: {
    apiUrl: 'https://don-t--need--it--sell--it.herokuapp.com/api'
  },
  prod: {
    apiUrl: 'https://don-t--need--it--sell--it.herokuapp.com/api'
  },
}

const getCurrentSettings = () => {
  if(__DEV__) return settings.dev;
  if(Constants.manifest.releaseChanel === 'staging') return settings.staging;
  return settings.prod;
}

export default getCurrentSettings();