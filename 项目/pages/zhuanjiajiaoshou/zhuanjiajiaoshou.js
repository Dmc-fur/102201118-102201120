Page({
  // 其他页面的代码...
  
  goTodating: function() {
    wx.navigateTo({
      url: '/pages/xiangmuguangchang/xiangmuguangchang' // 
    });
  },

  goToProjectManagement: function() {
    wx.navigateTo({
      url: '/pages/xiangmuguanli/xiangmuguanli' // 
    });
  },
  goToPersonalCenter: function() {
    wx.navigateTo({
      url: '/pages/gerenzhongxin/gerenzhongxin'
    });
  },
  goToNotifications() {
    wx.navigateTo({
      url: '/pages/wodetongzhi/wodetongzhi'
    });
  }
});