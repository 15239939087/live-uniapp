export default {
	/*
	注意：以下接口改成你自己部署的后端（老师提供的api接口已关闭），不懂的请看：课时127-131这几节课。
	*/
	
	// baseUrl:"http://liveapi2.dishait.cn",
	// socketUrl:"http://liveapi2.dishait.cn",
	// imageUrl:"http://liveapi2.dishait.cn",
	//
	// // 拉流前缀
	// livePlayBaseUrl:"http://liveapi2.dishait.cn:23481",
	// // 推流前缀
	// livePushBaseUrl:"rtmp://liveapi2.dishait.cn:23480",

    baseUrl:"http://192.168.1.166:7001",
    socketUrl:"http://192.168.1.166:7001",
    imageUrl:"http://192.168.1.166:7001",

    // 拉流前缀（主播）
    livePlayBaseUrl:"http://192.168.1.166:23481",
    // 推流前缀（客户）
    livePushBaseUrl:"rtmp://192.168.1.166:23480",

    // // 拉流前缀（主播）
    // livePlayBaseUrl:"http://192.168.1.166:23483",
    // // 推流前缀（客户）
    // livePushBaseUrl:"rtmp://192.168.1.166:23482",
}