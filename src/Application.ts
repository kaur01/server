import 'reflect-metadata';
import * as express from 'express';
import {ApplicationServer} from './ApplicationServer';

const applicationServer = new ApplicationServer(express());
 const server = applicationServer.prepareServer();
 applicationServer.start(server);
