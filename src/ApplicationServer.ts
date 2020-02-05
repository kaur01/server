import * as cors from 'cors';
import {Application} from 'express';
import {Container} from 'inversify';
import {createServer, Server} from 'http';
import {InversifyExpressServer} from 'inversify-express-utils';
import {ControllerModule} from "./dependency-injection/ControllerModule";
import {RepositoryModule} from "./dependency-injection/RepositoryModule";
import bodyParser = require('body-parser');

export class ApplicationServer {
    private app: any;

    constructor(app: any) {
        this.app = app;
    }


    public start(server: Server): Server {
        const port = 3000;
        return server.listen(port, () => console.log(`Server listening at port ${port}.`));
    }

    public prepareServer(): Server {
        const container = new Container({autoBindInjectable: true});
        container.load(new ControllerModule(), new RepositoryModule());


        const application = new InversifyExpressServer(container, null, {rootPath: '/api'}, this.app)
            .setConfig((app: Application) => {
                app.use(bodyParser.json())
                    .use(cors());
            })
            .build();

        return createServer(application);
    }

}


