import NewsService from "../services/newsService";
import * as HttpStatus from "http-status";

import Helper from "../infra/helper";

class NewsController {

    sendResponse = function (res: any, statusCode: any, data: any) {
        res.status(statusCode).json({ result: data });
    };

    get(req: any, res: any) {
        NewsService.get()
            .then(news => Helper.sendResponse(res, HttpStatus.OK, news))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

    getById(req:any, res:any) {

        const _id = req.params.id;

        NewsService.getById(_id)
            .then(news => Helper.sendResponse(res, HttpStatus.OK, news))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

    create(req: any, res: any) {

        let vm = req.body;

        NewsService.create(vm)
            .then(news =>
             Helper.sendResponse(res, HttpStatus.OK, "Noticia cadastrada com sucesso!")
            )
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

    update(req: any, res: any) {
        const _id = req.params.id;
        let news = req.body;

        NewsService.update(_id, news)
            .then(news =>
                Helper.sendResponse(
                    res,
                    HttpStatus.OK,
                    'Noticia foi atualiza com sucesso'
                )
            )
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

    delete(req: any, res: any) {
        const _id = req.params.id;

        NewsService.delete(_id)
            .then(() => {
                Helper.sendResponse(res, HttpStatus.OK, 'Noticia deletada com sucesso!');
            })
            .catch(error => {
                console.error(`Error ${error}`);
                Helper.sendResponse(res, HttpStatus.INTERNAL_SERVER_ERROR, 'Erro ao deletar a notícia.');
            });
    }

}

export default new NewsController();