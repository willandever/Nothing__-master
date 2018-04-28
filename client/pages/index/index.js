//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({
    data: {
        userInfo: {},
        logged: false,
        takeSession: false,
        requestResult: '',
        msg:'hello world'
    },
    func:function(){
    console.log('msg')
    },
    homeclick:function()
    {
      wx.navigateTo({
        url: '../home/home',
      })
    }
    home1click:function()
    {
      wx.navigateTo({
        url: '../home1',
      })
    }
})
