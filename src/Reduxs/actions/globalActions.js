import key from '../lib/constants'
import { checkStore } from '../lib/reducerConfig'
import { KEYSTORE } from 'utils/globalConstants'
// import { txtDefault } from 'utils/globalStyles'
// import { setCustomText } from 'react-native-global-props'
export function setToken (token) {
  checkStore(token, KEYSTORE.TOKEN)
  return {
    type: key.SET_TOKEN,
    payload: token
  }
}
export function setAgentInfo (agentInfo) {
  checkStore(agentInfo, KEYSTORE.AGENT_INFO)
  return {
    type: key.SET_AGENT_INFO,
    payload: agentInfo
  }
}
export function setBanceBranch (bancaBranch) {
  checkStore(bancaBranch, KEYSTORE.BANCE_BRANCH)
  return {
    type: key.SET_BANCE_BRANCH,
    payload: bancaBranch
  }
}
export function setLogined (isLogined) {
  checkStore(isLogined, KEYSTORE.LOGINED)
  return {
    type: key.SET_LOGINED,
    payload: isLogined
  }
}

export function setLanguage (language) {
  checkStore(language, KEYSTORE.LANGUAGE)
  // setCustomText({style: txtDefault})
  return {
    type: key.SET_LANGUAGE,
    payload: language
  }
}

export function setCurrency (currency) {
  checkStore(currency, KEYSTORE.CURRENCY)
  return {
    type: key.SET_CURRENCY,
    payload: currency
  }
}

export function setInternet (internet) {
  checkStore(internet, KEYSTORE.INTERNET)
  return {
    type: key.SET_INTERNET,
    payload: internet
  }
}

export function setClientList (clientList) {
  return {
    type: key.SET_CLIENT_LIST,
    payload: clientList
  }
}
export function setListBI (listBI) {
  return {
    type: key.SET_LIST_BI,
    payload: listBI
  }
}
export function setListEApp (listEApp) {
  return {
    type: key.SET_LIST_EAPP,
    payload: listEApp
  }
}

export function setMetadata (metadata) {
  // checkStore(metadata, KEYSTORE.META_DATA)
  return {
    type: key.SET_METADATA,
    payload: metadata
  }
}
export function setStates (states) {
  // checkStore(states, KEYSTORE.STATES)
  return {
    type: key.SET_STATES,
    payload: states
  }
}
export function setOccupationMeta (occupationMeta) {
  // checkStore(occupationMeta, KEYSTORE.OCCUPATION_META)
  return {
    type: key.SET_OCCUPATION_META,
    payload: occupationMeta
  }
}
export function setAgent (agent) {
  // checkStore(agent, KEYSTORE.AGENT)
  return {
    type: key.SET_AGENT,
    payload: agent
  }
}
export function setRelationshipMap (relationShipMap) {
  return {
    type: key.SET_RELATIONSHIP_MAP,
    payload: relationShipMap
  }
}
export function setWarningCount (warningCount) {
  return {
    type: key.SET_WARNING_COUNT,
    payload: warningCount
  }
}
export function setTimeUpdateEApp (timeUpdateEApp) {
  return {
    type: key.SET_TIME_UPDATE_EAPP,
    payload: timeUpdateEApp
  }
}
