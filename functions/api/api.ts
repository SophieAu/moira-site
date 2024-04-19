import ServerlessHttp from 'serverless-http';
import express, { Router } from 'express';
import { isAuthorized } from '@tinacms/auth';
import { createMediaHandler } from 'next-tinacms-cloudinary/dist/handlers';

const app = express();
const router = Router();

const mediaHandler = createMediaHandler({
  authorized: async (req, _res) => {
    try {
      if (process.env.NODE_ENV == 'development') return true;
      if (!process.env.CLOUDINARY_CLOUD_NAME) throw Error('missing cloud name');
      if (!process.env.CLOUDINARY_API_KEY) throw Error('missing CLOUDINARY_API_KEY');
      if (!process.env.CLOUDINARY_API_SECRET) throw Error('missing CLOUDINARY_API_SECRET');

      return !!(await isAuthorized(req))?.verified;
    } catch (e) {
      console.error(e);
      return false;
    }
  },
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || '',
  api_key: process.env.CLOUDINARY_API_KEY || '',
  api_secret: process.env.CLOUDINARY_API_SECRET || '',
});

router.get('/cloudinary/media', mediaHandler);

router.post('/cloudinary/media', mediaHandler);

router.delete('/cloudinary/media/:media', (req, res) => {
  req.query.media = ['media', req.params.media];
  return mediaHandler(req, res);
});

app.use('/api/', router);
app.use('/.netlify/functions/api/', router);

export const handler = ServerlessHttp(app);
