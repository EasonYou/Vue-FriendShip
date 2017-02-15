import Mock from 'mockjs'

Mock.mock( /\/name\/\w/, {
    "array|1-3": [
        {
            "name|+1": [
                "Hello", "Vue", "World"
            ]
        }
    ]
})	


Mock.mock('/friendsShipList', {
    "userName": 'Wade',
	"topPictureDesc": '@sentence(5)',
	"topPictureAddress": '../../static/FONT.jpg',
	"sideBarPicture": '../../static/104683.jpg',
    "pictureItemList|10": [
    	{
    		"name": '@name',
    		"desc": '@sentence(5)',
    		"src": '../../static/FONT.jpg',
    		"pictureAdd": '../../static/104683.jpg',
    		"isLike": '@boolean',
    		"comment|1-5": [{
    			"sent|1": ["Wade", "James", "Antony", "Paul"],
    			"receive|1": ["Wade", "James", "Antony", "Paul"],
    			"text": '@sentence(5)'
    		}]
    	}
    ] 
})

Mock.mock('/pm25', {
  "object|2-4": {
    "110000": "北京市",
    "120000": "天津市",
    "130000": "河北省",
    "140000": "山西省"
  }
})


module.exports =  Mock