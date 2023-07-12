import NewsRepository from '../repository/newsRepository';

class NewsService{
    get(){
        return NewsRepository.find({});
    }

    getById(_id){
        return NewsRepository.findById(_id);
    }
}

export default new NewsService();

