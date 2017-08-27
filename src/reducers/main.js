import { fetchMainData } from '../services/main.service';
import {
  turnOnLoading,
  turnOffLoading,
  setMainData,
  TURN_ON_LOADING,
  TURN_OFF_LOADING,
  SET_MAIN_DATA
} from '../actions/main';

const initialState = {
  logos: [],
  news: [],
  textData: {
    jumbotron: {
      headings: []
    },
    description: {
      heading: '',
      text: ''
    },
    services: {
      heading: '',
      list: [],
      text: '',
      services1: {
        heading: '',
        text: '',
        list: []
      },
      services2: {
        heading: '',
        text: '',
        list: []
      },
      services3: {
        heading: '',
        text: '',
        list: []
      },
      services4: {
        heading: '',
        text: '',
        list: []
      },
      services5: {
        heading: '',
        text: '',
        list: []
      },
    },
    cooperation1: {
      heading: '',
      text: '',
      text2: '',
      text3: '',
      text4: '',
      text5: ''
    },
    cooperation2: {
      heading: '',
      text: ''
    },
    contact: {
      openingHours: [],
      address1: '',
      address2: '',
      phoneNumbers: []
    }
  },
  isLoading: false,
  isError: false
};

const main = (state = initialState, action) => {
  switch (action.type) {
    case TURN_ON_LOADING:
      return Object.assign({ ...state, isLoading: true });
    case TURN_OFF_LOADING:
      return Object.assign({ ...state, isLoading: false });
    case SET_MAIN_DATA:
      return Object.assign({ ...state, textData: action.payload });
    default:
      return state;
  }
};

export const getMainData = () => {
  return dispatch => {
    dispatch(turnOnLoading());
    fetchMainData().then(data => {
      const dataToSet = {
        jumbotron: {
          headings: data.data.fields.jumbotronHeadings
        },
        description: {
          heading: data.data.fields.descriptionHeading,
          text: data.data.fields.descriptionText
        },
        services: {
          heading: data.data.fields.servicesHeading,
          list: data.data.fields.servicesList,
          text: data.data.fields.servicesText,
          services1: {
            heading: data.data.fields.services1Heading,
            text: data.data.fields.services1Text,
            list: data.data.fields.services1List
          },
          services2: {
            heading: data.data.fields.services2Heading,
            text: data.data.fields.services2Text,
            list: data.data.fields.services2List
          },
          services3: {
            heading: data.data.fields.services3Heading,
            text: data.data.fields.services3Text,
            list: data.data.fields.services3List
          },
          services4: {
            heading: data.data.fields.services4Heading,
            text: data.data.fields.services4Text,
            list: data.data.fields.services4List
          },
          services5: {
            heading: data.data.fields.services5Heading,
            text: data.data.fields.services5Text,
            list: data.data.fields.services5List
          }
        },
        cooperation1: {
          heading: data.data.fields.cooperation1Heading,
          text: data.data.fields.cooperation1Text,
          text2: data.data.fields.cooperation1Text2,
          text3: data.data.fields.cooperation1Text3,
          text4: data.data.fields.cooperation1Text4,
          text5: data.data.fields.cooperation1Text5
        },
        cooperation2: {
          heading: data.data.fields.cooperation2Heading,
          text: data.data.fields.cooperation2Text
        },
        summary: {
          heading: data.data.fields.summaryHeading,
          text: data.data.fields.summaryText
        },
        contact: {
          phoneNumbers: data.data.fields.phoneNumbers,
          openingHours: data.data.fields.openingHours,
          address1: data.data.fields.address1,
          address2: data.data.fields.address2,
          address3: data.data.fields.address3,
        }
      }
      dispatch(turnOffLoading());
      dispatch(setMainData(dataToSet));
    });
  };
};

export default main;
