# 服务器

服务器在腾讯云登陆可以用connnect.sh文件
我是绑定key的，可以在腾讯云换一下ssh的key就行了

# 技术框架

- 前端: react
- 后端: python flask
- 数据库: mongo

# 数据库的设计:

```
// 文章
{
    "_id" : "文章id"
    "title" : "文章标题",
    "content" : "文章内容",
    "cover" : "文章封面图",
}
```

```
{
    "_id" : 音乐id,
    "title" : "音乐标题",
    "name" : "音乐人",
    "cover" : "音乐封面图",
    "linkUrl" : "音乐地址",
    "date" : "上传时间"
}
```

```
{
    "_id" : 新闻id,
    "content" : "新闻内容",
    "cover" : "新闻封面",
    "date" : "新闻时间",
}
```

```
{
    "_id" : 商品id,
    "type" : "商品类型",
    "price" : "价格",
    "top_logo" : "",
    "location" : "跳转路由",
    "images" : [ 
        {
            "cricle_image" : "圆形的图片",
            "image" : "圆形对应的大图"
        },
    ],
    "image_card" : [
        {
            "card_image" : "下面的卡片图片",
            "link" : "0"
        }
    ],
    "title" : {
        "en" : "英文名字",
        "zh" : "中文名字"
    },
    "description" : {
        "en" : "英文描述",
        "zh" : "中文描述"
    },
    "buy" : {
        "image" : {
            "en" : "购买英文图片",
            "zh" : "购买中文图片"
        },
        "link" : "跳转微店链接"
    },
    "share" : [ 
        {
            "image" : {
                "en" : "分享图片",
                "zh" : "分享图片"
            },
            "link" : ""
        }
    ],
    // 下面那一排信息
    "more_infor" : [ 
        {
            "key" : "des",
            "type" : "text",
            "value" : {
                "en" : "",
                "zh" : ""
            }
        }, 
        {
            "key" : "param",
            "type" : "image",
            "value" : {
                "en" : "",
                "zh" : ""
            }
        }, 
        {
            "key" : "after_sell",
            "type" : "text",
            "value" : {
                "en" : "",
                "zh" : ""
            }
        }
    ],
    "key" : "5c381317ab6cbca7428bb7ce"
}
```

# 后台操作

后台只需要进入之前给的那个链接就行，这里就不写了，以防非法人员进入

