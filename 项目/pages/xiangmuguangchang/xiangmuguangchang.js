Page({
  data: {
    // 可根据需要定义页面数据
  },
  xiangqing: function() {
    wx.navigateTo({
      url: '/pages/xiangmuxiangqing/xiangmuxiangqing' // 
    });
  },
  goToPersonalCenter: function() {
    wx.navigateTo({
      url: '/pages/gerenzhongxin/gerenzhongxin'// 实现个人中心页面跳转逻辑
    });
  },
  goToProfessors: function() {
    // 实现专家教授页面跳转逻辑
    wx.navigateTo({
      url: '/pages/zhuanjiajiaoshou/zhuanjiajiaoshou' // 
    });
  },

  goToProjectManagement: function() {
    wx.navigateTo({
      url: '/pages/xiangmuguanli/xiangmuguanli' // 
    });
  },
  goToNotifications() {
    wx.navigateTo({
      url: '/pages/wodetongzhi/wodetongzhi'
    });
  }

});