import Mock from 'mockjs'

Mock.mock('/friendsShipList', {
    "userName": 'Dwyane Wade',
    "topPictureDesc": '@sentence(5)',
    "topPictureAddress|1": ['http://wx4.sinaimg.cn/mw690/5ed7d034ly1fdj0o6t3bcj20zk0qo7fd.jpg', 
                            'http://wx2.sinaimg.cn/mw690/5ed7d034ly1fdj0o4bacaj20zk0qodrl.jpg',
                            'http://wx1.sinaimg.cn/mw690/5ed7d034ly1fdj0o9ijhyj20zk0qo7de.jpg', 
                            'http://wx2.sinaimg.cn/mw690/7f58db7bgy1fcyhgi0un1j20go0gudl0.jpg', 
                            'http://ww1.sinaimg.cn/mw690/005HOTvCjw1fd4zmvhc02j30fo0h6jua.jpg'],
    "sideBarPicture|1": ['http://wx4.sinaimg.cn/mw690/5ed7d034ly1fdj0o6t3bcj20zk0qo7fd.jpg', 
                            'http://wx2.sinaimg.cn/mw690/5ed7d034ly1fdj0o4bacaj20zk0qodrl.jpg',
                            'http://wx1.sinaimg.cn/mw690/5ed7d034ly1fdj0o9ijhyj20zk0qo7de.jpg', 
                            'http://wx2.sinaimg.cn/mw690/7f58db7bgy1fcyhgi0un1j20go0gudl0.jpg', 
                            'http://ww1.sinaimg.cn/mw690/005HOTvCjw1fd4zmvhc02j30fo0h6jua.jpg'],
    "pictureItemList|10": [{
        "name": '@name',
        "id": '@last',
        "desc": '@sentence(5)',
        "src|1": ['http://wx4.sinaimg.cn/mw690/5ed7d034ly1fdj0o6t3bcj20zk0qo7fd.jpg', 
                            'http://wx2.sinaimg.cn/mw690/5ed7d034ly1fdj0o4bacaj20zk0qodrl.jpg',
                            'http://wx1.sinaimg.cn/mw690/5ed7d034ly1fdj0o9ijhyj20zk0qo7de.jpg', 
                            'http://wx2.sinaimg.cn/mw690/7f58db7bgy1fcyhgi0un1j20go0gudl0.jpg', 
                            'http://ww1.sinaimg.cn/mw690/005HOTvCjw1fd4zmvhc02j30fo0h6jua.jpg'],
        "pictureAdd|1": ['http://wx4.sinaimg.cn/mw690/5ed7d034ly1fdj0o6t3bcj20zk0qo7fd.jpg', 
                            'http://wx2.sinaimg.cn/mw690/5ed7d034ly1fdj0o4bacaj20zk0qodrl.jpg',
                            'http://wx1.sinaimg.cn/mw690/5ed7d034ly1fdj0o9ijhyj20zk0qo7de.jpg', 
                            'http://wx2.sinaimg.cn/mw690/7f58db7bgy1fcyhgi0un1j20go0gudl0.jpg', 
                            'http://ww1.sinaimg.cn/mw690/005HOTvCjw1fd4zmvhc02j30fo0h6jua.jpg'],
        "isLike": '@boolean',
        "comment|1-5": [{
            "sent|1": ["Dwyane Wade", "James", "Antony", "Paul"],
            "sentId": '@last',
            "receive|1": ["Dwyane Wade", "James", "Antony", "Paul", ''],
            "receiveId": '@last',
            "text": '@sentence(5)'
        }]
    }]
})

Mock.mock('/allList', {
    "topPictureDesc": '@sentence(5)',
    "topPictureAddress|1": ['http://wx4.sinaimg.cn/mw690/5ed7d034ly1fdj0o6t3bcj20zk0qo7fd.jpg', 
                            'http://wx2.sinaimg.cn/mw690/5ed7d034ly1fdj0o4bacaj20zk0qodrl.jpg',
                            'http://wx1.sinaimg.cn/mw690/5ed7d034ly1fdj0o9ijhyj20zk0qo7de.jpg', 
                            'http://wx2.sinaimg.cn/mw690/7f58db7bgy1fcyhgi0un1j20go0gudl0.jpg', 
                            'http://ww1.sinaimg.cn/mw690/005HOTvCjw1fd4zmvhc02j30fo0h6jua.jpg'],
    "pictureItemList|10": [{
        "name": '@name',
        "id": '@last',
        "desc": '@sentence(5)',
        "src|1": ['http://wx4.sinaimg.cn/mw690/5ed7d034ly1fdj0o6t3bcj20zk0qo7fd.jpg', 
                            'http://wx2.sinaimg.cn/mw690/5ed7d034ly1fdj0o4bacaj20zk0qodrl.jpg',
                            'http://wx1.sinaimg.cn/mw690/5ed7d034ly1fdj0o9ijhyj20zk0qo7de.jpg', 
                            'http://wx2.sinaimg.cn/mw690/7f58db7bgy1fcyhgi0un1j20go0gudl0.jpg', 
                            'http://ww1.sinaimg.cn/mw690/005HOTvCjw1fd4zmvhc02j30fo0h6jua.jpg'],
        "pictureAdd|1": ['http://wx4.sinaimg.cn/mw690/5ed7d034ly1fdj0o6t3bcj20zk0qo7fd.jpg', 
                            'http://wx2.sinaimg.cn/mw690/5ed7d034ly1fdj0o4bacaj20zk0qodrl.jpg',
                            'http://wx1.sinaimg.cn/mw690/5ed7d034ly1fdj0o9ijhyj20zk0qo7de.jpg', 
                            'http://wx2.sinaimg.cn/mw690/7f58db7bgy1fcyhgi0un1j20go0gudl0.jpg', 
                            'http://ww1.sinaimg.cn/mw690/005HOTvCjw1fd4zmvhc02j30fo0h6jua.jpg'],
        "isLike": '@boolean',
        "comment|1-5": [{
            "sent|1": ["Dwyane Wade", "James", "Antony", "Paul"],
            "sentId": '@last',
            "receive|1": ["Dwyane Wade", "James", "Antony", "Paul"],
            "receiveId": '@last',
            "text": '@sentence(5)'
        }]
    }]
})

Mock.mock(/\/profile\/\w/, {
    "name": '@name',
    "gender|1": ['male', 'famle'],
    "birthday": "@date('yyyy-MM')",
    "address": "@county(true)",
    "profileTopPic|1": ['http://wx4.sinaimg.cn/mw690/5ed7d034ly1fdj0o6t3bcj20zk0qo7fd.jpg', 
                            'http://wx2.sinaimg.cn/mw690/5ed7d034ly1fdj0o4bacaj20zk0qodrl.jpg',
                            'http://wx1.sinaimg.cn/mw690/5ed7d034ly1fdj0o9ijhyj20zk0qo7de.jpg', 
                            'http://wx2.sinaimg.cn/mw690/7f58db7bgy1fcyhgi0un1j20go0gudl0.jpg', 
                            'http://ww1.sinaimg.cn/mw690/005HOTvCjw1fd4zmvhc02j30fo0h6jua.jpg'],
    "avadarAdress|1": ['http://wx4.sinaimg.cn/mw690/5ed7d034ly1fdj0o6t3bcj20zk0qo7fd.jpg', 
                            'http://wx2.sinaimg.cn/mw690/5ed7d034ly1fdj0o4bacaj20zk0qodrl.jpg',
                            'http://wx1.sinaimg.cn/mw690/5ed7d034ly1fdj0o9ijhyj20zk0qo7de.jpg', 
                            'http://wx2.sinaimg.cn/mw690/7f58db7bgy1fcyhgi0un1j20go0gudl0.jpg', 
                            'http://ww1.sinaimg.cn/mw690/005HOTvCjw1fd4zmvhc02j30fo0h6jua.jpg'],
    "pictureList|1-2": ['http://wx4.sinaimg.cn/mw690/5ed7d034ly1fdj0o6t3bcj20zk0qo7fd.jpg', 
                            'http://wx2.sinaimg.cn/mw690/5ed7d034ly1fdj0o4bacaj20zk0qodrl.jpg',
                            'http://wx1.sinaimg.cn/mw690/5ed7d034ly1fdj0o9ijhyj20zk0qo7de.jpg', 
                            'http://wx2.sinaimg.cn/mw690/7f58db7bgy1fcyhgi0un1j20go0gudl0.jpg', 
                            'http://ww1.sinaimg.cn/mw690/005HOTvCjw1fd4zmvhc02j30fo0h6jua.jpg']
})

Mock.mock('myinformation', {
    "name": 'Dwyane Wade',
    "gender": 'male',
    "birthday": "1982-1",
    "address": "Miami",
    "profileTopPic": 'http://wx4.sinaimg.cn/mw690/5ed7d034ly1fdj0o6t3bcj20zk0qo7fd.jpg',
    "avadarAdress": 'http://wx4.sinaimg.cn/mw690/5ed7d034ly1fdj0o6t3bcj20zk0qo7fd.jpg',
    "pictureList": ['http://wx4.sinaimg.cn/mw690/5ed7d034ly1fdj0o6t3bcj20zk0qo7fd.jpg', 
                            'http://wx2.sinaimg.cn/mw690/5ed7d034ly1fdj0o4bacaj20zk0qodrl.jpg',
                            'http://wx1.sinaimg.cn/mw690/5ed7d034ly1fdj0o9ijhyj20zk0qo7de.jpg', 
                            'http://wx2.sinaimg.cn/mw690/7f58db7bgy1fcyhgi0un1j20go0gudl0.jpg', 
                            'http://ww1.sinaimg.cn/mw690/005HOTvCjw1fd4zmvhc02j30fo0h6jua.jpg']
})


Mock.mock(/\/followlist\/\w/, {
    'followList|10': [{
        "name": '@name',
        "id": '@last',
        "src|1": ['http://wx4.sinaimg.cn/mw690/5ed7d034ly1fdj0o6t3bcj20zk0qo7fd.jpg', 
                            'http://wx2.sinaimg.cn/mw690/5ed7d034ly1fdj0o4bacaj20zk0qodrl.jpg',
                            'http://wx1.sinaimg.cn/mw690/5ed7d034ly1fdj0o9ijhyj20zk0qo7de.jpg', 
                            'http://wx2.sinaimg.cn/mw690/7f58db7bgy1fcyhgi0un1j20go0gudl0.jpg', 
                            'http://ww1.sinaimg.cn/mw690/005HOTvCjw1fd4zmvhc02j30fo0h6jua.jpg'],
        "desc": '@sentence(5)',
        "followNumber": "@number",
        "isFollowed": true
    }]
})

module.exports = Mock