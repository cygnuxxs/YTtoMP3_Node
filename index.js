const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const yts = require('yt-search');
const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html');
});
app.get('/search', async (req, res) => {
    const query = req.query.inputString;
    const queriedResults = (await yts(query)).videos;
    const results = queriedResults.map(result => ({
        title : result.title,
        publish_date : result.ago,
        thumbnail_url : result.thumbnail,
        artist : result.author,
        views : result.views,
        description : result.description,
        youtube_url : result.url,
        id : result.videoId,
    }));
    res.json(results);
});

app.get('/download', async (req, res) => {
    try {
      const title = req.query.title;
      const videoID = req.query.videoID;
      const bitrate = req.query.bitrate;
      const videoURL = `https://www.youtube.com/watch?v=${videoID}`;
  
      const video = await ytdl.getInfo(videoURL);
        const bestAudio = video.formats.sort((a, b) => b.audioBitrate - a.audioBitrate).map(video => video.audioBitrate)[0];
      const options = {
        quality: 'highestaudio',
        filter: 'audioonly',
        audioBitrate: bestAudio,
      };
  
      const stream = ytdl(videoURL, options);
      res.attachment(`${title} (${bitrate}).mp3`);
      ffmpeg(stream)
        .audioBitrate(parseInt(bitrate, 10))
        .toFormat('mp3')
        .on('error', console.error)
        .on('end', () => {
          console.log('Audio streamed successfully.');
        })
        .pipe(res, { end: true });
    } catch (error) {
      console.error('Unexpected error:', error);
      res.status(500).send('Internal Server Error.');
    }
  });

app.listen(port,'0.0.0.0', () => {
    console.log("Server is listening on port:", port);
});