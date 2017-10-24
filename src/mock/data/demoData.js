import $ from '../../api/jquery-1.12.2.min.js'
import Mock from 'mockjs'
const timeData = []
for (let i = 0; i < 100; i++) {
  timeData.push(Mock.mock({
  	name: Mock.Random.ctitle(2, 12),
    publishAt: Mock.Random.date()
  }))
}
export{timeData}
