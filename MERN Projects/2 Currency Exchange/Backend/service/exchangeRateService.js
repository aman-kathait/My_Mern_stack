const axios=require("axios");

class ExchangeRateService{
  constructor(){
    this.rates=null;
    this.apiKey=process.env.EXCHANGE_RATE_API_KEY;
    this.baseURL='https://v6.exchangerate-api.com/v6/df6e46de275ff41634145405/latest/USD';
  }

}