import {createSlice} from '@reduxjs/toolkit';
//images import
import logo1 from '../images/logos/logo.png' 

const initialState = {
  info:[
    {
      websiteName:'Little India',
      address:'bredowstr 17, 22113 hamburg',
      phone:'+49 1621804148',
      email:'suppourt@littleindia.de',
      about:'Little India e.k is an e-commerce business catered towards Asian products and groceries. We are in the business of connecting people through their passion of food and have been successful for more than a decade through our Little India Super market chains, franchises and E-commerce in Poland Market. With so many enquires popping up for Germany market, we are also extending our Services to Germany and few other countries.',
      quote:'“Bringing the Flavors of India to Your Doorstep. LITTLE INDIA Indian Groceries store online in Germany with Ease!”',
      logoe:logo1
    }
  ]
}

const webinfoslice = createSlice({
  name:'webinfo',
  initialState,
  reducers:{

  }
})

export default webinfoslice.reducer