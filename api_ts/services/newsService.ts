import NewsRepository from '../repository/newsRepository';

class NewsService{
    get(){
        return NewsRepository.find({});
    }

    getById(_id){
        return NewsRepository.findById(_id);
    }

    create(news){
        return NewsRepository.create(news);
    }

    update(_id,news){
        return NewsRepository.findByIdAndUpdate(_id, news);
    }
}

export default new NewsService();

