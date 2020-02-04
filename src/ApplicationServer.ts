import {cors} from 'cors';
import {Application} from 'express';
import {createServer, Server} from 'https';
import {InversifyExpressServer} from 'inversify-express-utils';
import bodyParser = require('body-parser');
import {ContainerBuilder} from "./dependency-injection/ContainerBuilder";

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

        const container = ContainerBuilder.build();
        const allowedOrigins = ['http://localhost:4200'];
        const allowedOriginRegularExpressions = allowedOrigins.map(origin => new RegExp(origin + '$'));

        const application = new InversifyExpressServer(container, null, {rootPath: '/api'}, this.app)
            .setConfig((app: Application) => {
                app.use(bodyParser.json())
                    .use(cors({origin: allowedOriginRegularExpressions}));
            })
            .build();
        return createServer(application);
    }
}
