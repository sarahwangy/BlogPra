
import Write from '../../pages/write'
import HomeList from './homeList'
import Recommend from './recommend'
import Topic from './topic'

export { Write, HomeList, Recommend, Topic };

// 使用index 把所有的都暴露出去的话，要用export，不能用export default。。。，然后home 里
// 只要引用 一个index 文件就可以了，把这些 component 都暴露出去