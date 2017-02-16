import Mock from 'mockjs'

Mock.mock('/friendsShipList', {
    "userName": 'Wade',
    "topPictureDesc": '@sentence(5)',
    "topPictureAddress": '../../static/104683.jpg',
    "sideBarPicture": '../../static/104683.jpg',
    "pictureItemList|20": [{
        "name": '@name',
        "id": '@last',
        "desc": '@sentence(5)',
        "src": '../../static/104683.jpg',
        "pictureAdd": '../../static/104683.jpg',
        "isLike": '@boolean',
        "comment|1-5": [{
            "sent|1": ["Wade", "James", "Antony", "Paul"],
            "sentId": '@last',
            "receive|1": ["Wade", "James", "Antony", "Paul", ''],
            "receiveId": '@last',
            "text": '@sentence(5)'
        }]
    }]
})

Mock.mock('/allList', {
    "topPictureDesc": '@sentence(5)',
    "topPictureAddress": '../../static/104683.jpg',
    "pictureItemList|20": [{
        "name": '@name',
        "id": '@last',
        "desc": '@sentence(5)',
        "src|1": '../../static/104683.jpg',
        "pictureAdd": '../../static/104683.jpg',
        "isLike": '@boolean',
        "comment|1-5": [{
            "sent|1": ["Wade", "James", "Antony", "Paul"],
            "sentId": '@last',
            "receive|1": ["Wade", "James", "Antony", "Paul"],
            "receiveId": '@last',
            "text": '@sentence(5)'
        }]
    }]
})

Mock.mock(/\/name\/\w/, {
    "name": '@name',
    "gender|1": ['male', 'famle'],
    "birthday": "@date('yyyy-MM')",
    "address": "@county(true)",
    "profileTopPic|1": ['../../static/WADEpsd2.jpg', '../../static/logo.png', '../../static/FONT.jpg', '../../static/58447_1262335109I868.jpg', '../../static/nTr1589kTgyXCOdStCGm_MikaRuusunen.jpg'],
    "avadarAdress|1": ['../../static/WADEpsd2.jpg', '../../static/logo.png', '../../static/FONT.jpg', '../../static/58447_1262335109I868.jpg', '../../static/nTr1589kTgyXCOdStCGm_MikaRuusunen.jpg'],
    "pictureList|1-2": ['../../static/WADEpsd2.jpg', '../../static/logo.png', '../../static/FONT.jpg', '../../static/58447_1262335109I868.jpg', '../../static/nTr1589kTgyXCOdStCGm_MikaRuusunen.jpg']
})

Mock.mock('myinformation', {
    "name": 'Dwyane Wade',
    "gender": 'male',
    "birthday": "1982-1",
    "address": "Miami",
    "profileTopPic": '../../static/58447_1262335109I868.jpg',
    "avadarAdress": '../../static/WADEpsd2.jpg',
    "pictureList": ['../../static/WADEpsd2.jpg', '../../static/logo.png', '../../static/FONT.jpg', '../../static/58447_1262335109I868.jpg', '../../static/nTr1589kTgyXCOdStCGm_MikaRuusunen.jpg']
})

Mock.mock('myinformation', {
    "name": 'Dwyane Wade',
    "gender": 'male',
    "birthday": "1982-1",
    "address": "Miami",
    "profileTopPic": '../../static/58447_1262335109I868.jpg',
    "avadarAdress": '../../static/WADEpsd2.jpg',
    "pictureList": ['../../static/WADEpsd2.jpg', '../../static/logo.png', '../../static/FONT.jpg', '../../static/58447_1262335109I868.jpg', '../../static/nTr1589kTgyXCOdStCGm_MikaRuusunen.jpg']
})

Mock.mock(/\/followlist\/\w/, {
    'followList|10': [{
        "name": '@name',
        "id": '@last',
        "src|1": ['../../static/WADEpsd2.jpg', '../../static/logo.png', '../../static/FONT.jpg', '../../static/58447_1262335109I868.jpg', '../../static/nTr1589kTgyXCOdStCGm_MikaRuusunen.jpg'],
        "desc": '@sentence(5)',
        "followNumber": "@number"
    }]
})

module.exports = Mock