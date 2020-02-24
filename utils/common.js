const news = [
  {
    id: '1',
    title: '5米不得见 是对岗位的坚守',
    poster: 'http://www.xinhuanet.com/politics/2020-02/23/1125614596_15824386476101n.jpg',
    add_date: '2020-02-23 14:34:18',
    content:'习近平在回信中说，在中国抗击新冠肺炎疫情的关键时刻，你和夫人领导的基金会慷慨解囊，你给我写信表达对中国人民的支持，我对此表示衷心的感谢。'
    },
    {
    id: '2',
    title: '6米不得见 是对岗位的坚守',
    poster: 'http://www.xinhuanet.com/politics/2020-02/23/1125614596_15824386476101n.jpg',
    add_date: '2020-02-23 14:34:18',
      content:'习近平在回信中说，在中国抗击新冠肺炎疫情的关键时刻，你和夫人领导的基金会慷慨解囊，你给我写信表达对中国人民的支持，我对此表示衷心的感谢。'
      },
  {
    id: '3',
    title: '7米不得见 是对岗位的坚守',
    poster: 'http://www.xinhuanet.com/politics/2020-02/23/1125614596_15824386476101n.jpg',
    add_date: '2020-02-23 14:34:18',
    content:'习近平在回信中说，在中国抗击新冠肺炎疫情的关键时刻，你和夫人领导的基金会慷慨解囊，你给我写信表达对中国人民的支持，我对此表示衷心的感谢。'
    },
]

function getNewsList() {
  let list = []
  for (let i = 0; i < news.length; i++) {
    let obj = {}
    obj.id = news[i].id
    obj.poster = news[i].poster
    obj.content = news[i].content
    obj.add_date = news[i].add_date
    obj.title = news[i].title
    list.push(obj)
  }
  return list
}


function getNewsDetail(newsID) {
  let message = {
    code: '404',
    news: {}
  }

  for(let i = 0; i < news.length; i++) {
    if(newsID === news[i].id) {
      message.code = '200'
      message.news = news[i]
      break
    }
  }

  return message
}