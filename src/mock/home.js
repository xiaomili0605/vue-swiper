import Mock from 'mockjs'
// 响应数据 export default 导出对象

export default {
    // 返回对象，对象里的数据为响应数据
    getHomeData: {
        status: 200,
        message: '获取图片成功!',
        // 响应数据随机生成1-5条
        'data|1-5': [
            {
                img: "https://img14.360buyimg.com/pop/s590x470_jfs/t1/104185/12/15287/271527/5e6f31a4Ef5b07718/9257434455a65fa9.jpg.webp",
                src: "https://www.swiper.com.cn/api/methods/107.html",
                // 随机生成：整数自增的步长。默认值为 1。例如：Random.increment(100)// => 101
                id: Mock.Random.increment(1),
                // 随机生成一个汉字。
                name: Mock.Random.cword(),
                // 随机生成2-8个汉字
                name1: Mock.Random.cword(2, 8),
                // 随机生成价格 2-10之间
                price: Mock.Random.natural(2, 10),
                // 随机生成数量 2-999之间
                count: Mock.Random.natural(100, 999),
                // 随机生成Base64 图片编码 宽高78x78 建议使用Base64，比image稳定
                // 可以console.log(响应数据) 在控制台复制Base64，把前后的双引号去掉，粘贴到url上即可看到图片
                imgTest: Mock.Random.dataImage('78x78')
            }
        ]
    }
}

